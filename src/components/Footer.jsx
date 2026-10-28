import { useEffect, useRef, useState } from 'react';
import { Code2, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getSupabaseClient } from '../lib/supabase.js';

function Footer() {
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState(false);
  const submittingRef = useRef(false);

  async function subscribe(event) {
    event.preventDefault();
    if (submittingRef.current) return;
    const form = event.currentTarget;
    if (!form.reportValidity()) return;

    submittingRef.current = true;
    setSubmitting(true);
    setMessage('Submitting…');
    setError(false);
    try {
      const email = new FormData(form).get('email');
      const client = await getSupabaseClient();
      const { error: insertError } = await client.from('subscribers').insert({ email });
      if (insertError) throw insertError;
      form.reset();
      setMessage('Subscribed successfully!');
    } catch (submitError) {
      console.error('Unable to save newsletter subscription', submitError);
      setMessage('Subscription failed. Please try again.');
      setError(true);
    } finally {
      submittingRef.current = false;
      setSubmitting(false);
    }
  }

  return (
    <>
      <footer className="site-footer">
        <div className="container fgrid">
          <div>
            <Link className="logo light" to="/"><Code2 className="logo-icon" aria-hidden="true" />JHORKA IT</Link>
            <p>IT-based education consultancy offering training, career guidance and student support.</p>
            <div className="social" aria-label="Social links">
              <a href="#" aria-label="Facebook">f</a><a href="#" aria-label="LinkedIn">in</a>
              <a href="#" aria-label="YouTube">▶</a><a href="#" aria-label="X">X</a>
            </div>
          </div>
          <div>
            <h3>Quick links</h3>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/courses">Courses</Link></li>
              <li><Link to="/consultancy">Consultancy</Link></li>
              <li><Link to="/team">Our Team</Link></li>
              <li><Link to="/faq">FAQ</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3>Popular courses</h3>
            <ul>
              <li><Link to="/course-details?id=web">Web Development</Link></li>
              <li><Link to="/course-details?id=python">Python Programming</Link></li>
              <li><Link to="/course-details?id=cyber">Cybersecurity Basics</Link></li>
              <li><Link to="/course-details?id=data">Data Analysis</Link></li>
            </ul>
          </div>
          <div>
            <h3>Contact</h3>
            <ul className="plain">
              <li><Mail size={15} aria-hidden="true" /> Email: [info@example.com]</li>
              <li><Phone size={15} aria-hidden="true" /> Phone: [+000 0000 000000]</li>
              <li>Address: [Office address placeholder]</li>
            </ul>
            <form className="newsletter" onSubmit={subscribe}>
              <label htmlFor="nl-email" className="sr">Email address</label>
              <input id="nl-email" name="email" type="email" placeholder="Your email" required />
              <button className="btn btn-accent" type="submit" disabled={submitting}>{submitting ? 'Subscribing…' : 'Subscribe'}</button>
              <p className="msg" role="status" aria-live="polite" data-error={error}>{message}</p>
            </form>
          </div>
        </div>
        <div className="copy">&copy; 2026 JHORKA IT. All Rights Reserved.</div>
      </footer>
      <a className="whatsapp-chat" href="https://wa.me/8801609445319?text=Hello%20JHORKA%20IT%2C%20I%20would%20like%20to%20know%20more." target="_blank" rel="noopener noreferrer" aria-label="Chat with JHORKA IT on WhatsApp">
        <Phone size={21} aria-hidden="true" /><span>Chat on WhatsApp</span>
      </a>
      <BackToTop />
    </>
  );
}

function BackToTop() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return <button id="toTop" className={visible ? 'show' : ''} type="button" aria-label="Back to top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>↑</button>;
}

export default Footer;
