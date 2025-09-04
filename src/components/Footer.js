import React from 'react';
import '../style/Footer.css'; // Stiluri pentru footer

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; 2025 Catalog Auto. Toate drepturile rezervate.</p>
      <div className="footer-social">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i>
        </a>
      </div>
    </footer>
  );
}

export default Footer;