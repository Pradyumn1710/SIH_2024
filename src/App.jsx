import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MapPage from './pages/MapPage';
import Outputmap from './pages/Outputmap';
import About from './pages/About';
import Login from './pages/Login';
// import MapCard from './pages/MapCard';

import points from './data';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/map" element={<MapPage />} />
        <Route path="/outputmap" element={<Outputmap  points={points}  />} />
        {/* <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/map_card" element={<MapCard />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;