import { Link } from 'react-router-dom';
import CallToAction from '../components/CallToAction.jsx';
import CourseCard from '../components/CourseCard.jsx';
import { courses } from '../lib/courses.js';
import { imagePath } from '../lib/assets.js';

const reasons = [
  { icon: '💻', title: 'Project-based learning', description: 'Build real projects in every course.' },
  { icon: '🎯', title: 'Career guidance', description: 'One-to-one counseling and learning roadmaps.' },
  { icon: '👥', title: 'Small batches', description: 'More instructor attention for every student.' },
  { icon: '🏅', title: 'Certificates', description: 'Course completion certificates (details to be confirmed).' },
];

const team = [
  { image: 'taisir.png', name: 'TAISIR KABIR', id: '252004822e', role: 'Project Manager & Lead Developer', description: 'Coordinated project planning, development, teamwork, and final quality review.' },
  { image: 'jobayer.jpeg', name: 'JOBAYER', id: '252002622e', role: 'UI/UX Designer & Frontend Developer', description: 'Designed the experience and built responsive, interactive website components.' },
  { image: 'abid.jpeg', name: 'ABID NEWAZ', id: '252004722e', role: 'Frontend Developer & Website Tester', description: 'Developed and tested pages, links, forms, and responsive layouts.' },
];

function Home() {
  return (
    <div className="pg">
      <section className="hero">
        <div className="container hero-in">
          <div>
            <h1>Empowering Your Future Through IT Education</h1>
            <p>JHORKA IT is an education consultancy that helps students pick the right technology path, learn practical skills and prepare for careers.</p>
            <Link className="btn btn-accent" to="/courses">Explore Courses</Link>{' '}
            <Link className="btn btn-ghost" to="/contact">Contact Us</Link>
          </div>
          <img className="hero-img" src={imagePath('hero.svg')} alt="Illustration of a student learning to code on a laptop" width="520" height="400" loading="eager" />
        </div>
      </section>
      <section className="section">
        <div className="container">
          <h2>Featured courses</h2>
          <div className="grid g3">{courses.slice(0, 3).map((course) => <CourseCard key={course.id} course={course} />)}</div>
          <p className="center"><Link className="btn btn-primary" to="/courses">View all courses</Link></p>
        </div>
      </section>
      <section className="section alt">
        <div className="container">
          <h2>Why choose JHORKA IT</h2>
          <div className="grid g3">{reasons.map((item) => <article className="card" key={item.title}><div className="ico" aria-hidden="true">{item.icon}</div><h3>{item.title}</h3><p>{item.description}</p></article>)}</div>
        </div>
      </section>
      <section className="stats">
        <div className="container grid g4">
          <div><b data-count="1200">0</b><span>Students guided*</span></div>
          <div><b data-count="25">0</b><span>Courses*</span></div>
          <div><b data-count="15">0</b><span>Instructors*</span></div>
          <div><b data-count="90">0</b><span>% satisfaction*</span></div>
        </div>
        <p className="center small">*Sample figures. Replace with real data.</p>
      </section>
      <section className="section">
        <div className="container">
          <h2>What students say</h2>
          <div className="grid g3">
            <blockquote className="card">“The roadmap helped me choose web development with confidence.”<cite>Student A (sample)</cite></blockquote>
            <blockquote className="card">“Project work made the lessons stick.”<cite>Student B (sample)</cite></blockquote>
            <blockquote className="card">“CV and interview sessions were very useful.”<cite>Student C (sample)</cite></blockquote>
          </div>
          <p className="center"><Link to="/reviews">View all reviews</Link></p>
        </div>
      </section>
      <section className="section alt">
        <div className="container">
          <h2>📢 Notice Board</h2>
          <p className="lead">New batch updates and announcements from JHORKA IT.</p>
          <div className="grid notice-grid">
            <article className="card notice-card"><span className="tag">New Batch</span><h3>Web Development</h3><p>Admissions are open for the next batch. Contact us for the start date and class schedule.</p><Link className="btn btn-primary" to="/admission">Apply now</Link></article>
            <article className="card notice-card"><span className="tag">Announcement</span><h3>Course fees &amp; schedules</h3><p>Contact our team for the latest course fee and upcoming batch schedule information.</p><Link className="btn btn-ghost" to="/contact">Contact us</Link></article>
          </div>
        </div>
      </section>
      <section className="section home-team-preview">
        <div className="container">
          <h2>Meet Our Team</h2>
          <p className="lead">The Team Behind JHORKA IT</p>
          <div className="grid g3">{team.map((member) => <article className="card team-card" key={member.id}><img className="team-photo" src={imagePath(member.image)} alt={`Profile of ${member.name}`} loading="lazy" /><h3>{member.name}</h3><p className="student_id">ID: {member.id}</p><p className="team-role">{member.role}</p><p>{member.description}</p></article>)}</div>
          <p className="center"><Link className="btn btn-primary" to="/team">View Full Team</Link></p>
        </div>
      </section>
      <CallToAction />
    </div>
  );
}

export default Home;
