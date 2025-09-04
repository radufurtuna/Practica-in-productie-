import React from 'react';
import { useNavigate } from 'react-router-dom'; // Pentru navigare
import cars from '../images/cars.png';
import '../style/Home.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Footer from '../components/Footer';

function Home() {
  const navigate = useNavigate(); // Hook pentru navigare

  return (
    <div className="home-container">
      <img src={cars} alt="car photo" className="home-image" />
      <div className="home-content">
        <h1 className="home-title">Bine ai venit la Catalogul Auto</h1>
        <p className="home-description">
          Explorează cele mai noi modele de mașini și găsește mașina potrivita pentru tine!
        </p>
        <button className="home-button" onClick={() => navigate('/catalog')}>
          Vezi Catalogul
        </button>
      </div>
      <Footer />
    </div>
  );
}

export default Home;