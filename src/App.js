import React from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import './index.css';
import NewPage from './components/NewPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> {/* Home page with button */}
        <Route path="/newpage" element={<NewPage />} /> {/* New page */}
      </Routes>
    </Router>
  );
}

function Home() {
  const navigate = useNavigate(); 

  const handleButtonClick = () => {
    navigate('/newpage');
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Happy Valentines my love! 🫶</h1>
        <img
          src="https://media1.tenor.com/m/QWSXGYQHn4oAAAAC/yippee-iluvmybf.gif"
          alt="Yippiee Cat"
          style={{ width: '300px', height: 'auto' }}
        />
        <button className="valentines" onClick={handleButtonClick}>
          CLICK MEEEE PLEASE CLICK ME!!!!!
        </button>
      </header>
    </div>
  );
}

export default App;
