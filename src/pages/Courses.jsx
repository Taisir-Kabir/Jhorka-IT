import { useMemo, useState } from 'react';
import CallToAction from '../components/CallToAction.jsx';
import CourseCard from '../components/CourseCard.jsx';
import PageHero from '../components/PageHero.jsx';
import { courses } from '../lib/courses.js';

const categories = ['All', 'Web', 'Programming', 'Security', 'Data', 'Career'];

function Courses() {
  const [query, setQuery] = useState('');
  const [level, setLevel] = useState('All');
  const [fee, setFee] = useState('All');
  const [category, setCategory] = useState('All');
  const filteredCourses = useMemo(() => courses.filter((course) => {
    const feeAnnounced = /\d/.test(course.fee);
    const matchesQuery = `${course.title} ${course.summary} ${course.fee}`.toLowerCase().includes(query.trim().toLowerCase());
    return (category === 'All' || course.category === category)
      && (level === 'All' || course.level === level)
      && (fee === 'All' || (fee === 'published' ? feeAnnounced : !feeAnnounced))
      && matchesQuery;
  }), [category, fee, level, query]);

  return (
    <div className="pg">
      <PageHero title="Our Courses">Find the right course for your goals.</PageHero>
      <section className="section">
        <div className="container">
          <h2>Advanced Course Search</h2>
          <div className="toolbar">
            <label className="sr" htmlFor="search">Search courses</label>
            <input id="search" type="search" placeholder="Search courses..." value={query} onChange={(event) => setQuery(event.target.value)} />
            <label className="sr" htmlFor="level-filter">Filter by level</label>
            <select id="level-filter" aria-label="Filter by level" value={level} onChange={(event) => setLevel(event.target.value)}>
              <option value="All">All levels</option><option>Beginner</option><option>Intermediate</option><option>All levels</option>
            </select>
            <label className="sr" htmlFor="fee-filter">Filter by fee status</label>
            <select id="fee-filter" aria-label="Filter by fee status" value={fee} onChange={(event) => setFee(event.target.value)}>
              <option value="All">All fee statuses</option><option value="published">Fee announced</option><option value="unannounced">Fee not announced</option>
            </select>
            <div className="filters" role="group" aria-label="Filter by category">
              {categories.map((item) => <button key={item} className={`chip${category === item ? ' active' : ''}`} type="button" aria-pressed={category === item} onClick={() => setCategory(item)}>{item}</button>)}
            </div>
          </div>
          <p className="center">Course fees have not been announced yet.</p>
          <div className="grid g3">{filteredCourses.map((course) => <CourseCard key={course.id} course={course} />)}</div>
          {filteredCourses.length === 0 && <p className="center" role="status">No courses match your search.</p>}
        </div>
      </section>
      <CallToAction />
    </div>
  );
}

export default Courses;
