import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Restaurant from './components/Restaurant';
import Dining from './components/Dining';
import Footer from './components/Footer';
import PerticularRest from './components/PerticularRest'; 
import Delivery from './components/Delivery';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Hero />} />
        
        <Route path="/restaurant" element={<Restaurant />} />
        <Route path="/dining" element={<Dining />} />
        <Route path="/restaurant/:id" element={<PerticularRest />} />
        {/* Dining.jsx jo id bhejega uske basis pe  wo id wala restaurent show krenge show krenge..... */}
        <Route path="/delivery" element={<Delivery />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
