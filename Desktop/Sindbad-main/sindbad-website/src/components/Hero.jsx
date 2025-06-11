import { NavLink } from 'react-router-dom';
import carImg from '../assets/1.webp';
import './Hero.css';
import { Link } from 'react-router-dom';
import LogoAlt from '../assets/Sindbad_logotype 5.svg';

function Hero() {
  return (
    <header className="hero" style={{ backgroundImage: `url(${carImg})` }}>
      <div className="hero__overlay">
        {/* custom nav */}
        <nav className="hero__nav">
          <Link to="/" className="hero__brand"><img src={LogoAlt} alt="Sindbad" /></Link>
          <ul className="hero__links">
            <li><NavLink to="/" end>Home</NavLink></li>
            <li><NavLink to="/services">Services</NavLink></li>
            <li><NavLink to="/about">About us</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
            <li className="more"><button aria-label="more">▾</button></li>
          </ul>
        </nav>
        {/* text block */}
        <div className="hero__content container">
          <h2 className="hero__subtitle">Automotive</h2>
          <h1 className="hero__title">Sindbad</h1>
          <p className="hero__desc">Reliable vehicles. Real-time tracking. Flexible solutions — all tailored to your needs.</p>
        </div>
        {/* ctas */}
        <button className="hero__cta">Explore Our Services</button>
        <button className="hero__scroll" aria-label="scroll down">↓</button>
      </div>
    </header>
  );
}

export default Hero; 