// src/Routes.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import AirportComponent from './components/AirportComponent';

const AppRoutes = () => (
  <Router>
    <Header />
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div style={{ height: '91vh', padding: '20px', flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services/airports" element={<AirportComponent />} />
        </Routes>
      </div>
    </div>
  </Router>
);

export default AppRoutes;
