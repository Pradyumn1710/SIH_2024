/* eslint-disable no-unused-vars */
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './my_components/Navbar.tsx'; // Import the Navbar component
import HomePage from './pages/HomePage'; // Import the HomePage component
// import MapPage from './pages/MapPage'; // Import the MapPage component
import About from './pages/About'; // Import the About component
import Login from './pages/Login'; // Import the Login component
import Map_card from './my_components/Map_card.jsx'; // Import the Login component
import { BrowserRouter } from 'react-router-dom';

const App = () => {
  return <div>
    <BrowserRouter>
    <div>
      <Map_card>
      </Map_card>
    </div>
    </BrowserRouter>
    {/* <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/map" element={<MapPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Map_card" element={<Map_card />} />
      </Routes>
    </Router> */}
  </div>
};

export default App;
