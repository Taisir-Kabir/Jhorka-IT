import { Link } from 'react-router-dom';

function CallToAction() {
  return (
    <section className="cta">
      <div className="container">
        <h2>Ready to start your IT journey?</h2>
        <p>Talk to a counselor or apply for the next batch.</p>
        <Link className="btn btn-accent" to="/admission">Apply Now</Link>{' '}
        <Link className="btn btn-ghost" to="/contact">Contact Us</Link>
      </div>
    </section>
  );
}

export default CallToAction;
