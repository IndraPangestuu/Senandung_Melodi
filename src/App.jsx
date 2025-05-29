// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Network from './pages/Network';
import Testimonial from './pages/Testimonial';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import Partners from './pages/Partners';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="network" element={<Network />} />
          <Route path="testimonials" element={<Testimonial />} />
          <Route path="contact" element={<Contact />} />
          <Route path="blog" element={<Blog />} />
          <Route path="partners" element={<Partners />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;