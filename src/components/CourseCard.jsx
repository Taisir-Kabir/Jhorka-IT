import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { imagePath } from '../lib/assets.js';

function CourseCard({ course }) {
  return (
    <article className="card">
      <img className="thumb" src={imagePath(`courses-${course.id}.svg`)} alt={`${course.title} course banner`} loading="lazy" />
      <span className="tag">{course.category}</span>
      <h3>{course.title}</h3>
      <p>{course.summary}</p>
      <div className="meta"><span>{course.duration}</span><span>{course.level}</span><span>{course.fee}</span></div>
      <Link className="btn btn-primary" to={`/course-details?id=${course.id}`}>View Details <ArrowRight size={16} aria-hidden="true" /></Link>
    </article>
  );
}

export default CourseCard;
