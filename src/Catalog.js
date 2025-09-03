import React, { useState } from 'react';

const MOCK_DATA = [
  { id: 1, car_model: 'BMW X5', year: 2020 },
  { id: 2, car_model: 'Audi A4', year: 2019 },
  { id: 3, car_model: 'Tesla Model 3', year: 2021 },
  { id: 4, car_model: 'BMW X3', year: 2021 },
  { id: 5, car_model: 'Audi Q7', year: 2020 },
];

function Catalog() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCars = MOCK_DATA.filter(({ car_model }) =>
    car_model.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>Catalog de Mașini</h1>
      <input
        type="text"
        placeholder="Caută după model..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-bar"
      />
      <ul>
        {filteredCars.map((car) => (
          <li key={car.id}>
            {car.car_model} - {car.year}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Catalog;