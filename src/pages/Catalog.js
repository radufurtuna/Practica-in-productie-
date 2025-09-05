import { useState, useEffect } from 'react';
import SearchBar from '../components/SearchBar';
import FilterContainer from '../components/FilterContainer';
import CarList from '../components/CarList';
import { fetchCars } from '../service/carService';
import '../style/style.css';
import Footer from '../components/Footer';

export default function Catalog() {
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
    const content = car.content?.toLowerCase() || '';
    const additional = car.additional?.toLowerCase() || '';

    const matchesSearch = title.includes(searchTerm.toLowerCase());
    const matchesFilters =
      (!filters.title || title.includes(filters.title.toLowerCase())) &&
      (!filters.content || content.includes(filters.content.toLowerCase())) &&
      (!filters.additional || additional.includes(filters.additional.toLowerCase())) &&
      (!filters.wr || car.wr?.toLowerCase().includes(filters.wr.toLowerCase()));

    return matchesSearch && matchesFilters;
  });

  if (loading) return <p>Se încarcă...</p>;
  if (error) return <p style={{ color: 'red' }}>Eroare: {error}</p>;

  return (
    <>
      <div className="catalog-container">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} onToggleFilters={() => setShowFilters(!showFilters)} />
        {showFilters && <FilterContainer onFilterChange={handleFilterChange} />}
        <CarList cars={filteredCars} />
      </div>
      <Footer />
    </>
  );
}

