// src/App.js
import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom'; // Import Routes and Route
import './App.css';
import './index.css';
import Home from './components/Home';
import NewPage from './components/NewPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/newpage" element={<NewPage />} />
      </Routes>
    </Router>
  );
}

export default App;


