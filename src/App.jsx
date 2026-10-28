import { lazy, Suspense, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Footer from './components/Footer.jsx';
import Navbar from './components/Navbar.jsx';
import PageEffects from './components/PageEffects.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';

const Home = lazy(() => import('./pages/Home.jsx'));
const About = lazy(() => import('./pages/About.jsx'));
const Courses = lazy(() => import('./pages/Courses.jsx'));
const CourseDetails = lazy(() => import('./pages/CourseDetails.jsx'));
const Admission = lazy(() => import('./pages/Admission.jsx'));
const Consultancy = lazy(() => import('./pages/Consultancy.jsx'));
const StudentServices = lazy(() => import('./pages/StudentServices.jsx'));
const Team = lazy(() => import('./pages/Team.jsx'));
const Reviews = lazy(() => import('./pages/Reviews.jsx'));
const FAQ = lazy(() => import('./pages/FAQ.jsx'));
const Contact = lazy(() => import('./pages/Contact.jsx'));
const ITTraining = lazy(() => import('./pages/ITTraining.jsx'));
const Login = lazy(() => import('./pages/Login.jsx'));
const NotFound = lazy(() => import('./pages/NotFound.jsx'));
const PAGE_TITLES = {
  '/': 'Home',
  '/about': 'About Us',
  '/courses': 'Courses',
  '/course-details': 'Course Details',
  '/admission': 'Admission',
  '/consultancy': 'Education Consultancy',
  '/student-services': 'Student Services',
  '/team': 'Meet Our Team',
  '/reviews': 'Reviews',
  '/faq': 'FAQ',
  '/contact': 'Contact Us',
  '/it-training': 'IT Training',
  '/login': 'Login',
};

function PageTitle() {
  const { pathname } = useLocation();

  useEffect(() => {
    document.title = `${PAGE_TITLES[pathname] || 'Page not found'} | JHORKA IT`;
  }, [pathname]);

  return null;
}

function App() {
  return (
    <>
      <ScrollToTop />
      <PageEffects />
      <PageTitle />
      <Navbar />
      <main>
        <Suspense fallback={<div className="container page-loading" role="status">Loading page…</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/course-details" element={<CourseDetails />} />
            <Route path="/admission" element={<Admission />} />
            <Route path="/consultancy" element={<Consultancy />} />
            <Route path="/student-services" element={<StudentServices />} />
            <Route path="/team" element={<Team />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/it-training" element={<ITTraining />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </>
  );
}

export default App;
