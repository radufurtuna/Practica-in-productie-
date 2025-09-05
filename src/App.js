import React, { useEffect, useMemo, useState } from 'react';
import './style/style.css';
import './style/modern.css';
import logo from './images/imag.png';
import carsImage from './images/cars.png';
import SearchBar from './components/SearchBar';
import FilterContainer from './components/FilterContainer';
import CarList from './components/CarList';
import Footer from './components/Footer';
import { fetchCars } from './service/carService';

function App() {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({});
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    const loadCars = async () => {
      try {
        const data = await fetchCars();
        setCars(data);
      } catch (err) {
        setError(err?.message || 'Eroare la încărcarea datelor');
      } finally {
        setLoading(false);
      }
    };
    loadCars();
  }, []);

  const filteredCars = useMemo(() => {
    return cars.filter((car) => {
      const title = car.title?.toLowerCase() || '';
      const content = car.content?.toLowerCase() || '';
      const additional = car.additional?.toLowerCase() || '';
      const wr = car.wr?.toLowerCase() || '';

      const matchesSearch = title.includes(searchTerm.toLowerCase());
      const matchesFilters = (!filters.title || title.includes((filters.title || '').toLowerCase())) &&
        (!filters.content || content.includes((filters.content || '').toLowerCase())) &&
        (!filters.additional || additional.includes((filters.additional || '').toLowerCase())) &&
        (!filters.wr || wr.includes((filters.wr || '').toLowerCase()));

      return matchesSearch && matchesFilters;
    });
  }, [cars, searchTerm, filters]);

  return (
    <div className="modern-app">
      <header className="modern-nav">
        <div className="modern-nav__left">
          <img src={logo} alt="Catalog Auto" className="modern-logo" />
          <span className="modern-brand">Catalog Auto</span>
        </div>
        <nav className="modern-nav__links">
          <a href="#acasa">Acasă</a>
          <a href="#catalog">Catalog</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section id="acasa" className="modern-hero">
          <div className="modern-hero__text">
            <h1>Găsește mașina perfectă pentru tine</h1>
            <p>Explorează modele, filtrează după preferințe și inspiră-te din cele mai noi apariții.</p>
            <a href="#catalog" className="modern-cta">Vezi catalogul</a>
          </div>
          <div className="modern-hero__art" aria-hidden="true">
            <img src={carsImage} alt="Mașini" className="modern-hero__image" />
          </div>
        </section>

        <section id="catalog" className="modern-section">
          <div className="modern-section__header">
            <h2>Catalog</h2>
            <p>Filtre rapide pentru a restrânge rezultatele.</p>
          </div>

          <div className="search-row">
            <SearchBar
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              onToggleFilters={() => setShowFilters((v) => !v)}
            />
            {showFilters && (
              <FilterContainer onFilterChange={setFilters} />
            )}
          </div>

          {loading && <p className="modern-status">Se încarcă...</p>}
          {error && <p className="modern-status error">{error}</p>}
          {!loading && !error && <CarList cars={filteredCars} />}
        </section>

        <section id="contact" className="modern-section modern-section--muted">
          <div className="modern-section__header">
            <h2>Contact</h2>
            <p>Ai întrebări sau propuneri? Scrie-ne!</p>
          </div>
          <div className="modern-contact">
            <a className="chip" href="mailto:contact@example.com">contact@example.com</a>
            <a className="chip" href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a>
            <a className="chip" href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;