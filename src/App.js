// src/App.js
import React from 'react';
import './App.css'; // Import the CSS file for styling

function App() {
  return (
    <div className="App">
      <div className="logo-container">
        <img src="/thelastsol.png" alt="Logo" className="logo" />
      </div>
      <div className="social-links">
        <a href="https://t.me/TheLastSolPortal" target="_blank" rel="noopener noreferrer">
          <img src="/telegram.png" alt="Telegram" className="social-icon" />
        </a>
        <a href="https://twitter.com/The_Last_Sol" target="_blank" rel="noopener noreferrer">
          <img src="/twitter.png" alt="Twitter" className="social-icon" />
        </a>
        <a href="https://dexscreener.com/" target="_blank" rel="noopener noreferrer">
          <img src="/dexscreener.png" alt="dexscreener" className="social-icon" />
        </a>
        <a href="https://www.dextools.io/app/" target="_blank" rel="noopener noreferrer">
          <img src="/dextools.png" alt="dextools" className="social-icon" />
        </a>
        <a href="https://solscan.io/" target="_blank" rel="noopener noreferrer">
          <img src="/solscan.png" alt="solscan" className="social-icon" />
        </a>
        
      </div>
    </div>
  );
}

export default App;
