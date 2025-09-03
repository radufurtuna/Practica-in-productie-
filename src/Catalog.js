import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import './style.css';

function Catalog() {
  const [cars, setCars] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCars = async () => {
      const url = 'https://cars-database-with-image.p.rapidapi.com/api/search/advanced';
      const options = {
        method: 'GET',
        headers: {
          'x-rapidapi-key': process.env.REACT_APP_API_KEY,
          'x-rapidapi-host': process.env.REACT_APP_API_HOST
        }
      };

      try {
        // verificăm dacă avem date salvate în localStorage
        const cachedData = localStorage.getItem('carsData');
        if (cachedData) {
          console.log('Date încărcate din localStorage');
          setCars(JSON.parse(cachedData));
          setLoading(false);
          return; // nu mai apelăm API-ul
        }

        // dacă nu există cache, apelăm API-ul
        const response = await fetch(url, options);
        if (!response.ok) {
          throw new Error('Eroare la încărcarea datelor');
        }
        const data = await response.json();

        // salvăm rezultatele în localStorage
        localStorage.setItem('carsData', JSON.stringify(data.results  ));

        setCars(data.results  );
        setLoading(false);
      } catch (error) {
        console.error(error);
        setError(error.message);
        setLoading(false);
      }
    };

    fetchCars();
  }, []);

  const filteredCars = cars.filter((car) =>
    car.title && car.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return <p>Se încarcă...</p>;
  }

  if (error) {
    return <p style={{ color: 'red' }}>Eroare: {error}</p>;
  }

  return (
    <div>
      <h1>Catalog de Mașini</h1>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <ul className="car-list">
        {filteredCars.map((car) => (
          <li key={car.id || car.title} className="car-item">
            <p>{car.title}</p>
            <p>{car.content}</p>
            <p>{car.additional}</p>
            {car.image && (
              <img src={car.image} alt={car.title} className="car-image" />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Catalog;