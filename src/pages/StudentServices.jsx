import PageHero from '../components/PageHero.jsx';

const services = [
  { icon: '🛟', title: 'Student support', description: 'Help with schedules, doubts and progress.' },
  { icon: '📖', title: 'Learning resources', description: 'Notes, practice sets and recommended reading.' },
  { icon: '🗺', title: 'Career planning', description: 'Set goals and track them term by term.' },
  { icon: '💼', title: 'Internship preparation', description: 'Find, apply and prepare for internships.' },
  { icon: '📄', title: 'CV and portfolio', description: 'Reviews to make your work stand out.' },
  { icon: '🎤', title: 'Interview preparation', description: 'Mock interviews with feedback.' },
];

function StudentServices() {
  return (
    <div className="pg">
      <PageHero title="Student Services">Support that goes beyond the classroom.</PageHero>
      <section className="section">
        <div className="container">
          <h2>What we offer</h2>
          <div className="grid g3">{services.map((service) => <article className="card" key={service.title}><div className="ico" aria-hidden="true">{service.icon}</div><h3>{service.title}</h3><p>{service.description}</p></article>)}</div>
        </div>
      </section>
    </div>
  );
}

export default StudentServices;
