import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import CountryDetails from './components/CountryDetails';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => (
  <div className="App">
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:country" element={<CountryDetails />} />
      </Routes>
      <Footer />
    </Router>
  </div>
);

export default App;
