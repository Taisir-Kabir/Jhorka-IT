import { useRef, useState } from 'react';
import { getSupabaseClient } from '../lib/supabase.js';

export function useSupabaseForm(table, createPayload) {
  const [status, setStatus] = useState({ message: '', error: false });
  const [submitting, setSubmitting] = useState(false);
  const submittingRef = useRef(false);
  const [errors, setErrors] = useState({});

  function getFieldError(field) {
    const value = field.value.trim();
    if (field.required && !value) return 'This field is required.';
    if (value && field.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      return 'Enter a valid email address.';
    }
    if (value && field.type === 'tel' && !/^[+]?[0-9\s-]{7,15}$/.test(value)) {
      return 'Enter a valid phone number.';
    }
    return '';
  }

  function validateField(event) {
    const field = event.target;
    if (!field.matches('input, select, textarea')) return;
    setErrors((previous) => ({ ...previous, [field.name]: getFieldError(field) }));
  }

  async function submit(event) {
    event.preventDefault();
    if (submittingRef.current) return;

    const form = event.currentTarget;
    const fields = [...form.querySelectorAll('input, select, textarea')];
    const nextErrors = Object.fromEntries(fields.map((field) => [field.name, getFieldError(field)]));
    setErrors(nextErrors);
    if (Object.values(nextErrors).some(Boolean)) {
      setStatus({ message: 'Please fill in the form correctly.', error: true });
      return;
    }

    const values = Object.fromEntries(new FormData(form).entries());
    submittingRef.current = true;
    setSubmitting(true);
    setStatus({ message: 'Submitting…', error: false });

    try {
      const client = await getSupabaseClient();
      const { error } = await client
        .from(table)
        .insert(createPayload(values));
      if (error) throw error;

      form.reset();
      setStatus({ message: 'Submitted successfully!', error: false });
    } catch (error) {
      console.error(`Unable to submit ${table} form`, error);
      setStatus({ message: 'Submission failed. Please try again.', error: true });
    } finally {
      submittingRef.current = false;
      setSubmitting(false);
    }
  }

  return { status, submitting, submit, errors, validateField };
}
