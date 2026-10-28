import PageHero from '../components/PageHero.jsx';

const reviews = [
  { quote: '“The roadmap helped me choose web development with confidence.”', student: 'Student A (sample)' },
  { quote: '“Project work made the lessons stick.”', student: 'Student B (sample)' },
  { quote: '“CV and interview sessions were very useful.”', student: 'Student C (sample)' },
];

function Reviews() {
  return (
    <div className="pg">
      <PageHero title="What students say">The student feedback currently featured on our website.</PageHero>
      <section className="section">
        <div className="container">
          <h2>Student reviews</h2>
          <p className="lead">These are the sample testimonials shown on the existing JHORKA IT homepage.</p>
          <div className="grid g3">{reviews.map((review) => <blockquote className="card" key={review.student}>{review.quote}<cite>{review.student}</cite></blockquote>)}</div>
        </div>
      </section>
    </div>
  );
}

export default Reviews;
