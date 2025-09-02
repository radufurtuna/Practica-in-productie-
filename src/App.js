import React from 'react';
import './style.css';

function App() {
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
      </header>

      {/* Conținut principal */}
      <main>
      </main>
    </div>
  );
}

export default App;