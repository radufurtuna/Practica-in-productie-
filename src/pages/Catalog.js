import React, { useState, useEffect } from 'react';
import SearchBar from '../components/SearchBar';
import FilterContainer from '../components/FilterContainer';
import CarList from '../components/CarList';
import { fetchCars } from '../service/carService';
import '../style/style.css';

function Catalog() {
  const [cars, setCars] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    const loadCars = async () => {
      try {
        const data = await fetchCars();
        setCars(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    loadCars();
  }, []);

  const handleFilterChange = (updatedFilters) => {
    setFilters(updatedFilters);
  };

  const filteredCars = cars.filter((car) => {
    const title = car.title?.toLowerCase() || '';
    const matchesSearch = title.includes(searchTerm.toLowerCase());
    const matchesFilters =
      (!filters.title || title.includes(filters.title.toLowerCase()));

    return matchesSearch && matchesFilters;
  });

  if (loading) return <p>Se încarcă...</p>;
  if (error) return <p style={{ color: 'red' }}>Eroare: {error}</p>;

  return (
    <div>
      <h1>Catalog de Mașini</h1>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} onToggleFilters={() => setShowFilters(!showFilters)} />
      {showFilters && <FilterContainer onFilterChange={handleFilterChange} />}
      <CarList cars={filteredCars} />
    </div>
  );
}

export default Catalog;