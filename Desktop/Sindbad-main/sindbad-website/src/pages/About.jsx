import aboutImg from '../assets/2.webp';
import './About.css';

function About() {
  return (
    <section className="about">
      <div className="container grid two">
        <div className="about__image">
          <img src={aboutImg} alt="About Sindbad" />
        </div>
        <div className="about__content">
          <h2 className="heading-2">About Us</h2>
          <p>We are passionate about connecting travelers with authentic experiences around the globe. For over a decade, Sindbad has delivered exceptional service and crafted unforgettable adventures for thousands of explorers.</p>
          <p>Our mission is simple: make travel planning effortless, inspiring, and tailored to your unique style.</p>
        </div>
      </div>
    </section>
  );
}

export default About; 