import { useEffect, useState } from 'react';
import { ChevronDown, Code2, Menu, Moon, Sun, X } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';

const courseLinks = [
  ['/courses', 'All Courses'],
  ['/course-details?id=web', 'Course Details'],
  ['/admission', 'Admission'],
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem('jhorka-theme') || 'dark';
    } catch (error) {
      console.error('Unable to read the saved theme preference.', error);
      return 'dark';
    }
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  function changeTheme() {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    document.documentElement.dataset.theme = nextTheme;
    try {
      localStorage.setItem('jhorka-theme', nextTheme);
    } catch (error) {
      console.error('Unable to save the theme preference.', error);
    }
  }

  function closeMenu() {
    setMenuOpen(false);
    setCoursesOpen(false);
    setServicesOpen(false);
  }

  const activeClassName = ({ isActive }) => (isActive ? 'active' : undefined);

  return (
    <header className="site-header">
      <div className="container nav">
        <Link className="logo" to="/" onClick={closeMenu}>
          <Code2 className="logo-icon" aria-hidden="true" />
          JHORKA IT
        </Link>
        <button className="nav-toggle" type="button" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <nav className={`nav-links${menuOpen ? ' open' : ''}`} aria-label="Main">
          <ul>
            <li><NavLink end className={activeClassName} to="/" onClick={closeMenu}>Home</NavLink></li>
            <li><NavLink className={activeClassName} to="/about" onClick={closeMenu}>About Us</NavLink></li>
            <li className={`has-dd${coursesOpen ? ' open' : ''}`}>
              <NavLink className={activeClassName} to="/courses" onClick={closeMenu}>Courses</NavLink>
              <button className="dd-btn" type="button" aria-label="Open Courses menu" aria-expanded={coursesOpen} aria-controls="courses-menu" onClick={() => setCoursesOpen(!coursesOpen)}><ChevronDown size={16} /></button>
              <ul className="dd" id="courses-menu">
                {courseLinks.map(([to, label]) => <li key={label}><Link to={to} onClick={closeMenu}>{label}</Link></li>)}
              </ul>
            </li>
            <li><NavLink className={activeClassName} to="/it-training" onClick={closeMenu}>IT Training</NavLink></li>
            <li><NavLink className={activeClassName} to="/consultancy" onClick={closeMenu}>Consultancy</NavLink></li>
            <li className={`has-dd${servicesOpen ? ' open' : ''}`}>
              <NavLink className={activeClassName} to="/student-services" onClick={closeMenu}>Student Services</NavLink>
              <button className="dd-btn" type="button" aria-label="Open Student Services menu" aria-expanded={servicesOpen} aria-controls="student-services-menu" onClick={() => setServicesOpen(!servicesOpen)}><ChevronDown size={16} /></button>
              <ul className="dd" id="student-services-menu">
                <li><Link to="/student-services" onClick={closeMenu}>Overview</Link></li>
                <li><Link to="/team" onClick={closeMenu}>Our Team</Link></li>
              </ul>
            </li>
            <li><NavLink className={activeClassName} to="/team" onClick={closeMenu}>Our Team</NavLink></li>
            <li><NavLink className={activeClassName} to="/reviews" onClick={closeMenu}>Reviews</NavLink></li>
            <li><NavLink className={activeClassName} to="/faq" onClick={closeMenu}>FAQ</NavLink></li>
            <li><NavLink className={activeClassName} to="/contact" onClick={closeMenu}>Contact</NavLink></li>
            <li><Link to="/login" onClick={closeMenu}>Login</Link></li>
          </ul>
          <Link className="btn btn-accent" to="/admission" onClick={closeMenu}>Apply Now</Link>
          <button className="theme-toggle" type="button" aria-label={`Switch to ${theme === 'dark' ? 'day' : 'night'} mode`} aria-pressed={theme === 'dark'} onClick={changeTheme}>
            {theme === 'dark' ? <Moon className="theme-toggle-icon" size={16} /> : <Sun className="theme-toggle-icon" size={16} />}
            <span className="theme-toggle-label">{theme === 'dark' ? 'Night mode' : 'Day mode'}</span>
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
