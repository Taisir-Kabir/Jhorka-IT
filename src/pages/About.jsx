import { Link } from 'react-router-dom';
import CallToAction from '../components/CallToAction.jsx';
import InfoCardGrid from '../components/InfoCardGrid.jsx';
import PageHero from '../components/PageHero.jsx';
import { imagePath } from '../lib/assets.js';

const values = [
  { icon: '🤝', title: 'Student-first', description: "Advice based on each learner's goals, level and time." },
  { icon: '🔎', title: 'Practical', description: 'Learning by building and receiving feedback.' },
  { icon: '🌱', title: 'Growth', description: 'Support that continues beyond course completion.' },
];

function About() {
  return (
    <div className="pg">
      <PageHero title="About JHORKA IT">An IT education consultancy built around student success.</PageHero>
      <section className="section">
        <div className="container">
          <h2>Who we are</h2>
          <div className="two">
            <div><p>JHORKA IT began with a simple idea: students should get honest guidance and hands-on training before choosing a technology career. We combine consultancy with practical courses so that learners know what to study, why, and how to get there. <em>(Sample background text; replace with your real story.)</em></p></div>
            <img className="about-img" src={imagePath('about.svg')} alt="Students and a chart showing learning progress" loading="lazy" />
          </div>
        </div>
      </section>
      <section className="section alt">
        <div className="container">
          <h2>Mission and vision</h2>
          <InfoCardGrid columns="g2" items={[
            { icon: '🎯', title: 'Mission', description: 'Provide accessible, practical IT education and clear career guidance.' },
            { icon: '👁', title: 'Vision', description: 'Help more learners build confident, sustainable careers in technology.' },
          ]} />
        </div>
      </section>
      <section className="section"><div className="container"><h2>Our values</h2><InfoCardGrid items={values} /></div></section>
      <section className="section alt">
        <div className="container">
          <h2>Leadership</h2>
          <div className="grid g3">
            <article className="card person"><img className="av" src={imagePath('team-AR.svg')} alt="" loading="lazy" /><h3>Founder Name</h3><p className="small">Founder &amp; Director (placeholder)</p></article>
            <article className="card person"><img className="av" src={imagePath('team-LM.svg')} alt="" loading="lazy" /><h3>Lead Mentor</h3><p className="small">Head of Training (placeholder)</p></article>
            <article className="card person"><img className="av" src={imagePath('team-CC.svg')} alt="" loading="lazy" /><h3>Chief Counselor</h3><p className="small">Head of Consultancy (placeholder)</p></article>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container"><h2>Why students choose us</h2><ul className="ticks"><li>Practical, project-based courses</li><li>Personal learning roadmaps</li><li>Career, CV and interview support</li><li>Online and offline options</li></ul></div>
      </section>
      <section className="cta"><div className="container"><h2>Ready to start your IT journey?</h2><p>Talk to a counselor or apply for the next batch.</p><Link className="btn btn-accent" to="/admission">Apply Now</Link>{' '}<Link className="btn btn-ghost" to="/contact">Contact Us</Link></div></section>
    </div>
  );
}

export default About;
