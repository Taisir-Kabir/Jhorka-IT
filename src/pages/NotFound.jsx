import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <section className="section">
      <div className="container not-found">
        <h1>Page not found</h1>
        <p>The page you requested could not be found.</p>
        <Link className="btn btn-primary" to="/">Return home</Link>
      </div>
    </section>
  );
}

export default NotFound;
