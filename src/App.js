import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import Home from './Home';
import Catalog from './Catalog';
import './style.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Auto Catalog</h1>
          <nav>
            <ul>
              <li><Link to="/home">Acasă</Link></li>
              <li><Link to="/catalog">Catalog</Link></li>
            </ul>
          </nav>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/catalog" element={<Catalog />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;