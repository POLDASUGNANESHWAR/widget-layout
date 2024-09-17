// src/App.js
import React from 'react';
import './App.css';
import InfoWidget from './components/InfoWidget';
import GalleryWidget from './components/GalleryWidget';

function App() {
  return (
    <div className="container">
      <div className="left-pane"></div>
      <div className="right-pane">
        <InfoWidget />
        <GalleryWidget />
      </div>
    </div>
  );
}

export default App;
