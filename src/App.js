import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import './style/style.css';
import logo from './images/imag.png';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
           <img src={logo} alt="Auto Catalog Logo" className="App-logo" />
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