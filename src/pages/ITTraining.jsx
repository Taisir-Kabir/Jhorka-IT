import { Link } from 'react-router-dom';
import CallToAction from '../components/CallToAction.jsx';
import PageHero from '../components/PageHero.jsx';

const tracks = [
  { icon: '🌐', title: 'Web development', description: 'HTML, CSS, JavaScript and responsive design.' },
  { icon: '📚', title: 'Frontend & backend', description: 'Build interfaces, then the server logic behind them.' },
  { icon: '🗄', title: 'Database management', description: 'SQL, data modeling and queries.' },
  { icon: '💻', title: 'Python programming', description: 'From basics to automation and small apps.' },
  { icon: '🔌', title: 'Networking fundamentals', description: 'IP, routing, switching and troubleshooting.' },
  { icon: '🛡', title: 'Cybersecurity basics', description: 'Threats, safe practice and system hardening.' },
];

function ITTraining() {
  return (
    <div className="pg">
      <PageHero title="IT Training">Skills you can use from day one.</PageHero>
      <section className="section"><div className="container"><h2>Training tracks</h2><div className="grid g3">{tracks.map((track) => <article className="card" key={track.title}><div className="ico" aria-hidden="true">{track.icon}</div><h3>{track.title}</h3><p>{track.description}</p></article>)}</div></div></section>
      <section className="section alt"><div className="container"><h2>Project-based learning</h2><p>Every track ends with a portfolio project reviewed by an instructor, such as a business website, a student database app, or a home-network security checklist.</p><p><Link className="btn btn-primary" to="/courses">See matching courses</Link></p></div></section>
      <CallToAction />
    </div>
  );
}

export default ITTraining;
