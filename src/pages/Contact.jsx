import { Facebook, Linkedin, Youtube } from 'lucide-react';
import FormField from '../components/FormField.jsx';
import PageHero from '../components/PageHero.jsx';
import { useSupabaseForm } from '../hooks/useSupabaseForm.js';

function Contact() {
  const { status, submitting, submit, errors, validateField } = useSupabaseForm('contacts', (values) => ({
    name: values.name.trim(),
    email: values.email.trim(),
    phone: values.phone.trim(),
    subject: values.subject.trim(),
    message: values.message.trim(),
  }));

  return (
    <div className="pg">
      <PageHero title="Contact Us">We usually reply within one working day (placeholder).</PageHero>
      <section className="section">
        <div className="container two">
          <form className="form card" noValidate onSubmit={submit} onBlur={validateField}>
            <FormField id="contact-name" name="name" label="Name" required autoComplete="name" error={errors.name} />
            <FormField id="contact-email" name="email" label="Email" type="email" required autoComplete="email" error={errors.email} />
            <FormField id="contact-phone" name="phone" label="Phone" type="tel" autoComplete="tel" error={errors.phone} />
            <FormField id="contact-subject" name="subject" label="Subject" required error={errors.subject} />
            <FormField id="contact-message" name="message" label="Message" required error={errors.message}><textarea id="contact-message" name="message" rows="4" required /></FormField>
            <button className="btn btn-primary" type="submit" disabled={submitting}>{submitting ? 'Sending…' : 'Send message'}</button>
            <p className={`msg${status.error ? ' error-text' : ''}`} role="status" aria-live="polite">{status.message}</p>
          </form>
          <div>
            <div className="card">
              <h3>Reach us</h3>
              <p>Address: [Office address placeholder]</p>
              <p>Phone: [+000 0000 000000]</p>
              <p>Email: [info@example.com]</p>
              <div className="social dark">
                <a href="#" aria-label="Facebook"><Facebook size={18} /></a>
                <a href="#" aria-label="LinkedIn"><Linkedin size={18} /></a>
                <a href="#" aria-label="YouTube"><Youtube size={18} /></a>
              </div>
            </div>
            <div className="map" role="img" aria-label="Map placeholder">Google Maps embed placeholder</div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
