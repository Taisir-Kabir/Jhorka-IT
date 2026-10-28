import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero.jsx';

function Login() {
  return (
    <div className="pg">
      <PageHero title="Login">A foundation for future Supabase Authentication.</PageHero>
      <section className="section">
        <div className="container">
          <div className="card auth-foundation">
            <h2>Authentication is not enabled yet</h2>
            <p>This page does not accept credentials or expose private data. Supabase Auth and database-enforced authorization can be added when authentication is configured.</p>
            <Link className="btn btn-primary" to="/">Return home</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Login;
