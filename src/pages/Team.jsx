import PageHero from '../components/PageHero.jsx';
import { imagePath } from '../lib/assets.js';

const team = [
  {
    image: 'taisir.png', name: 'Taisir Kabir', id: '252004822e', role: 'Project Manager & Lead Developer',
    description: 'Led the planning and coordination that brought the JHORKA IT website together.',
    responsibilities: ['Project planning and management', 'Website structure and development coordination', 'Assigning tasks and managing teamwork', 'Final project review and quality control'],
  },
  {
    image: 'jobayer.jpeg', name: 'Jobayer', id: '252002622e', role: 'UI/UX Designer & Frontend Developer',
    description: "Shaped the website's visual experience and developed its responsive frontend.",
    responsibilities: ['Website UI/UX design', 'HTML, CSS, and JavaScript development', 'Responsive layouts for desktop, tablet, and mobile', 'Navigation, animations, and interactive components'],
  },
  {
    image: 'abid.jpeg', name: 'S M Abid Newaz', id: '252004722e', role: 'Frontend Developer & Website Tester',
    description: 'Built and checked frontend pages to help ensure the site works smoothly across devices.',
    responsibilities: ['Developing website pages and components', 'Testing links, buttons, and forms', 'Finding and fixing frontend bugs', 'Checking responsiveness and overall website quality'],
  },
];

function Team() {
  return (
    <div className="pg">
      <PageHero title="Meet Our Team">The Team Behind JHORKA IT</PageHero>
      <section className="section team-section">
        <div className="container">
          <h2 className="sr">The three founding team members</h2>
          <div className="grid g3">
            {team.map((member) => (
              <article className="card team-card" key={member.id}>
                <img className="team-photo" src={imagePath(member.image)} alt={`Profile of ${member.name}`} loading="lazy" />
                <h3>{member.name}</h3><p className="student_id">ID: {member.id}</p>
                <p className="team-role">{member.role}</p><p>{member.description}</p>
                <h4>Responsibilities</h4>
                <ul>{member.responsibilities.map((responsibility) => <li key={responsibility}>{responsibility}</li>)}</ul>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Team;
