import './Services.css';

const services = [
  { id: 1, title: 'Custom Tours', desc: 'Tailored itineraries that suit your interests and budget.' },
  { id: 2, title: 'Flight Booking', desc: 'Competitive rates on worldwide flight tickets.' },
  { id: 3, title: 'Hotel Reservations', desc: 'Hand-picked stays that guarantee comfort and convenience.' },
  { id: 4, title: 'Travel Insurance', desc: 'Comprehensive coverage so you can explore with confidence.' },
];

function Services() {
  return (
    <section className="services container">
      <h2 className="heading-2 center">Our Services</h2>
      <div className="service__grid">
        {services.map((s) => (
          <div key={s.id} className="service__card">
            <h3 className="heading-3">{s.title}</h3>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services; 