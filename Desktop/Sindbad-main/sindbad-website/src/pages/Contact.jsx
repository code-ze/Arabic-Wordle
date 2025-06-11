import './Contact.css';

function Contact() {
  return (
    <section className="contact container">
      <h2 className="heading-2 center">Contact Us</h2>
      <form className="contact__form">
        <div className="form__group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" placeholder="Your full name" required />
        </div>
        <div className="form__group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="you@example.com" required />
        </div>
        <div className="form__group">
          <label htmlFor="message">Message</label>
          <textarea id="message" rows="5" placeholder="Tell us what you need ..." required />
        </div>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}

export default Contact; 