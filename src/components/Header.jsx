// src/components/Header.jsx
import { Link, useMatch } from 'react-router-dom';
import LanguageToggle from './LanguageToggle';

const Header = () => {
  return (
    <header className="bg-white shadow-md py-4 px-6 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl md:text-2xl font-bold text-primary">LOGO</h1>

        <nav className="hidden md:flex space-x-8">
          <NavLink to="/">Beranda</NavLink>
          <NavLink to="/about">Tentang Kami</NavLink>
          <NavLink to="/services">Layanan</NavLink>
          <NavLink to="/network">Jaringan Global</NavLink>
          <NavLink to="/testimonials">Testimoni</NavLink>
          <NavLink to="/contact">Kontak</NavLink>
        </nav>

        <LanguageToggle />
      </div>
    </header>
  );
};

// Component untuk NavLink dengan styling aktif
const NavLink = ({ to, children }) => {
  const isActive = useMatch(to);
  return (
    <Link
      to={to}
      className={`hover:text-accent transition-colors ${isActive ? 'text-accent font-semibold' : 'text-gray-700'}`}
    >
      {children}
    </Link>
  );
};

export default Header;