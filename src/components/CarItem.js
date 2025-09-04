import React from 'react';

function CarItem({ car }) {
  const extractHp = (content) => {
    const match = content?.match(/(\d+)\s*Hp/i);
    return match ? match[1] : 'N/A';
  };

  const hp = extractHp(car.content);

  return (
    <li className="car-item">
      <p><strong>{car.title}</strong></p>
      <p>Cai putere: {hp}</p>
      <p>{car.content}</p>
      {car.additional && <p>{car.additional}</p>}
      {car.wr && <p>{car.wr}</p>}
      {car.image && <img src={car.image} alt={car.title} className="car-image" />}
    </li>
  );
}

export default CarItem;