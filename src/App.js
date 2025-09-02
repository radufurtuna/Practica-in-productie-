import React, { useState, useEffect } from 'react';
import './style.css';

// Datele inițiale (poți înlocui cu un API sau un fișier JSON extern)
const MOCK_DATA = [
  { id: 1, car_model: 'BMW X5', year: 2020 },
  { id: 2, car_model: 'Audi A4', year: 2019 },
  { id: 3, car_model: 'Tesla Model 3', year: 2021 },
];

// Funcție pentru filtrarea mașinilor
const filterCars = (searchText, listOfCars) => {
  if (!searchText) {
    return listOfCars;
  }
  return listOfCars.filter(({ car_model }) =>
    car_model.toLowerCase().includes(searchText.toLowerCase())
  );
};

function App() {
  const [searchTerm, setSearchTerm] = useState(''); // Textul introdus în bara de căutare
  const [carList, setCarList] = useState(MOCK_DATA); // Lista de mașini filtrată

  // Debounce pentru căutare (optimizare)
  useEffect(() => {
    const debounce = setTimeout(() => {
      const filteredCars = filterCars(searchTerm, MOCK_DATA);
      setCarList(filteredCars);
    }, 300); // Așteaptă 300ms

    return () => clearTimeout(debounce); // Curăță timeout-ul la fiecare modificare
  }, [searchTerm]);

  return (
    <div className="App">
      {/* Bara de navigare */}
      <header className="App-header">
        <h1>Auto Catalog</h1>
        <nav>
          <ul>
            <li><a href="#home">Acasă</a></li>
            <li><a href="#catalog">Catalog</a></li>
          </ul>
        </nav>
        {/* Bara de căutare */}
        <input
          type="text"
          placeholder="Caută după model..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-bar"
        />
      </header>

      {/* Conținut principal */}
      <main>
        <h2>Rezultatele căutării:</h2>
        <ul>
          {carList.map(car => (
            <li key={car.id}>
              {car.car_model} - {car.year}
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;