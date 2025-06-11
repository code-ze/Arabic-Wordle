import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';
import './Navbar.css';
import Logo from '../assets/Sindbad_logotype 4.svg';

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container nav__inner">
        <Link to="/" className="nav__brand" onClick={() => setOpen(false)}>
          <img src={Logo} alt="Sindbad" className="nav__logo" />
        </Link>

        <button className="nav__toggle" aria-label="toggle navigation" onClick={() => setOpen(!open)}>
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </button>

        <ul className={`nav__links ${open ? 'open' : ''}`}>
          <li><NavLink to="/" end onClick={() => setOpen(false)} className={({ isActive }) => isActive ? 'active' : undefined}>Home</NavLink></li>
          <li><NavLink to="/services" onClick={() => setOpen(false)} className={({ isActive }) => isActive ? 'active' : undefined}>Services</NavLink></li>
          <li><NavLink to="/about" onClick={() => setOpen(false)} className={({ isActive }) => isActive ? 'active' : undefined}>About</NavLink></li>
          <li><NavLink to="/contact" onClick={() => setOpen(false)} className={({ isActive }) => isActive ? 'active' : undefined}>Contact</NavLink></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar; 