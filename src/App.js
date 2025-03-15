import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ServicesPage from './pages/ServicesPage';
import ResourcesPage from './pages/ResourcesPage';
import Articles from './pages/Articles';
import ContactPage from './pages/Contact';
import HomePage from './pages/Homepage';
import WhoWeAre from './pages/Who-we-are';
import OurServices from './pages/OurServicesPage';
import './i18n/i18n';
import AboutJem from './pages/AboutJem';

const App = () => { 
  return (
    
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/resources" element={<ResourcesPage />} />
        <Route path="/about" element={<AboutJem />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/who-we-are" element={<WhoWeAre />} />
        <Route path="/our-services" element={<OurServices />} />
        <Route path="/contact" element={<ContactPage />} /> 
      </Routes>
    </Router>
  );
};

export default App;
