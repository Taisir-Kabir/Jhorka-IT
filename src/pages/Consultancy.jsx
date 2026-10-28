import FormField from '../components/FormField.jsx';
import PageHero from '../components/PageHero.jsx';
import { useSupabaseForm } from '../hooks/useSupabaseForm.js';

const services = [
  { icon: '🧭', title: 'IT education guidance', description: 'Understand fields, paths and entry requirements.' },
  { icon: '💬', title: 'Career counseling', description: 'Match your strengths and goals to roles.' },
  { icon: '✅', title: 'Course selection', description: 'Choose courses that fit your level and schedule.' },
  { icon: '🛣', title: 'Learning roadmaps', description: 'A step-by-step plan with milestones.' },
  { icon: '🎓', title: 'Academic guidance', description: 'Support for study choices and applications.' },
  { icon: '🌱', title: 'Professional growth', description: 'Plans for upskilling while you work.' },
];

function Consultancy() {
  const { status, submitting, submit, errors, validateField } = useSupabaseForm('consultations', (values) => ({
    name: values.name.trim(),
    email: values.email.trim(),
    phone: values.phone.trim(),
    interest: values.interest,
    message: values.message.trim(),
    status: 'pending',
  }));

  return (
    <div className="pg">
      <PageHero title="Education Consultancy">Clear direction before you invest time and money.</PageHero>
      <section className="section"><div className="container"><h2>How we help</h2><div className="grid g3">{services.map((service) => <article className="card" key={service.title}><div className="ico" aria-hidden="true">{service.icon}</div><h3>{service.title}</h3><p>{service.description}</p></article>)}</div></div></section>
      <section className="section alt">
        <div className="container">
          <h2>Request a consultation</h2>
          <form className="form card" noValidate onSubmit={submit} onBlur={validateField}>
            <FormField id="consult-name" name="name" label="Full name" required autoComplete="name" error={errors.name} />
            <FormField id="consult-email" name="email" label="Email" type="email" required autoComplete="email" error={errors.email} />
            <FormField id="consult-phone" name="phone" label="Phone" type="tel" required autoComplete="tel" error={errors.phone} />
            <FormField id="consult-interest" name="interest" label="Interest" required error={errors.interest}>
              <select id="consult-interest" name="interest" required>
                <option value="">Choose…</option><option>Web Development</option><option>Programming</option><option>Cybersecurity</option><option>Data</option><option>Not sure</option>
              </select>
            </FormField>
            <FormField id="consult-message" name="message" label="Message" error={errors.message}><textarea id="consult-message" name="message" rows="4" /></FormField>
            <button className="btn btn-primary" type="submit" disabled={submitting}>{submitting ? 'Submitting…' : 'Request consultation'}</button>
            <p className={`msg${status.error ? ' error-text' : ''}`} role="status" aria-live="polite">{status.message}</p>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Consultancy;
