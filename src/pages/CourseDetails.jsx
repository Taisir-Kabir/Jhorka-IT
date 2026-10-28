import { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import PageHero from '../components/PageHero.jsx';
import { courses } from '../lib/courses.js';
import { imagePath } from '../lib/assets.js';

function CourseDetails() {
  const [params] = useSearchParams();
  const course = courses.find((item) => item.id === params.get('id')) || courses[0];
  const [openModule, setOpenModule] = useState(null);

  return (
    <div className="pg">
      <PageHero title={course.title}>{course.summary}</PageHero>
      <section className="section">
        <div className="container two">
          <div>
            <h2>Overview</h2><p>{course.summary}</p>
            <h2>What you will learn</h2><ul className="ticks">{course.learn.map((item) => <li key={item}>{item}</li>)}</ul>
            <h2>Curriculum</h2>
            <div className="acc">
              {course.modules.map((module, index) => {
                const isOpen = openModule === index;
                return <div className={`acc-item${isOpen ? ' open' : ''}`} key={module}>
                  <button className="acc-btn" type="button" aria-expanded={isOpen} onClick={() => setOpenModule(isOpen ? null : index)}>{module}</button>
                  <div className="acc-panel" style={{ maxHeight: isOpen ? '120px' : '0' }}><p>{module}</p></div>
                </div>;
              })}
            </div>
            <h2>Career opportunities</h2><ul className="ticks">{course.careers.map((item) => <li key={item}>{item}</li>)}</ul>
          </div>
          <aside className="card side">
            <img className="thumb" src={imagePath(`courses-${course.id}.svg`)} alt={`${course.title} course banner`} />
            <p><b>Duration:</b> {course.duration}</p><p><b>Level:</b> {course.level}</p><p><b>Fee:</b> {course.fee}</p><p><b>Prerequisites:</b> {course.prerequisites}</p>
            <Link className="btn btn-primary" to="/admission">Enroll now</Link>
            <p className="small">Fees and dates are placeholders.</p>
          </aside>
        </div>
      </section>
    </div>
  );
}

export default CourseDetails;
