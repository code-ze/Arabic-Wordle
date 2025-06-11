import './Footer.css';

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p>&copy; {year} Sindbad. All rights reserved.</p>
        <p className="credits">Designed with ❤ following brand guide.</p>
      </div>
    </footer>
  );
}

export default Footer; 