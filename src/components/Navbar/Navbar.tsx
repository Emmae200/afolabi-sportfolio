import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ThemeToggle } from '../ThemeToggle/ThemeToggle';
import './Navbar.css';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        <Link to="/" className="nav-logo">
          Afolabi.
        </Link>
        <div className="nav-links">
          <a href="/#work" className="nav-link">Work</a>
          <a href="/#about" className="nav-link">About</a>
          <a href="mailto:afolabiolufemi@icloud.com" className="nav-link contact-btn">Contact</a>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
