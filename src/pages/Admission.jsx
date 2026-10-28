import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import FormField from '../components/FormField.jsx';
import PageHero from '../components/PageHero.jsx';
import { useSupabaseForm } from '../hooks/useSupabaseForm.js';
import { getSupabaseClient } from '../lib/supabase.js';

function Admission() {
  const [availableCourses, setAvailableCourses] = useState([]);
  const [coursesLoading, setCoursesLoading] = useState(true);
  const [courseError, setCourseError] = useState('');
  const { status, submitting, submit, errors, validateField } = useSupabaseForm('admissions', (values) => ({
    student_name: values.name.trim(),
    email: values.email.trim(),
    phone: values.phone.trim(),
    course_id: values.course,
    mode: values.mode,
    notes: values.message.trim(),
    status: 'pending',
  }));

  useEffect(() => {
    let active = true;
    async function loadCourses() {
      try {
        const client = await getSupabaseClient();
        const { data, error } = await client
          .from('courses')
          .select('id, title')
          .order('title');
        if (error) throw error;
        if (active) setAvailableCourses(data || []);
      } catch (error) {
        console.error('Unable to load admission courses', error);
        if (active) setCourseError('Courses could not be loaded. Please try again later.');
      } finally {
        if (active) setCoursesLoading(false);
      }
    }
    loadCourses();
    return () => { active = false; };
  }, []);

  return (
    <div className="pg">
      <PageHero title="Admission & Enrollment">Start your application in a few minutes.</PageHero>
      <section className="section alt">
        <div className="container">
          <h2>Admission requirements</h2>
          <div className="grid g3">
            <article className="card"><div className="ico" aria-hidden="true">🪪</div><h3>Basic details</h3><p>Name, contact information and education background.</p></article>
            <article className="card"><div className="ico" aria-hidden="true">🖥</div><h3>Device access</h3><p>A computer or laptop for practice (details to be confirmed).</p></article>
            <article className="card"><div className="ico" aria-hidden="true">⏱</div><h3>Commitment</h3><p>Attend classes and complete projects.</p></article>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container"><h2>Application process</h2><ol className="steps"><li>Choose a course</li><li>Submit the registration form</li><li>Talk with an advisor</li><li>Confirm your seat and pay the fee (placeholder)</li></ol></div>
      </section>
      <section className="section alt">
        <div className="container">
          <h2>Student registration</h2>
          <form className="form card" noValidate onSubmit={submit} onBlur={validateField}>
            <FormField id="admit-name" name="name" label="Full name" required autoComplete="name" error={errors.name} />
            <FormField id="admit-email" name="email" label="Email" type="email" required autoComplete="email" error={errors.email} />
            <FormField id="admit-phone" name="phone" label="Phone" type="tel" required autoComplete="tel" error={errors.phone} />
            <FormField id="admit-course" name="course" label="Course" required error={errors.course}>
              <select id="admit-course" name="course" required disabled={coursesLoading || Boolean(courseError)}>
                <option value="">{coursesLoading ? 'Loading courses…' : 'Choose…'}</option>
                {availableCourses.map((course) => <option key={course.id} value={course.id}>{course.title}</option>)}
              </select>
            </FormField>
            <FormField id="admit-mode" name="mode" label="Mode" required error={errors.mode}>
              <select id="admit-mode" name="mode" required><option value="">Choose…</option><option>Online</option><option>Offline</option><option>Hybrid</option></select>
            </FormField>
            <FormField id="admit-message" name="message" label="Notes" error={errors.message}><textarea id="admit-message" name="message" rows="4" /></FormField>
            {courseError && <p className="msg error-text" role="alert">{courseError}</p>}
            <button className="btn btn-primary" type="submit" disabled={submitting || coursesLoading || Boolean(courseError) || availableCourses.length === 0}>{submitting ? 'Submitting…' : 'Submit application'}</button>
            <p className={`msg${status.error ? ' error-text' : ''}`} role="status" aria-live="polite">{status.message}</p>
            {availableCourses.length === 0 && !coursesLoading && !courseError && <p className="note">No courses are currently available. <Link to="/contact">Contact us</Link> for assistance.</p>}
          </form>
        </div>
      </section>
    </div>
  );
}

export default Admission;
