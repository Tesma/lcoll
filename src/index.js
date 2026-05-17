import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import About from './pages/About';
import Contact from './pages/Contact';
import Portifolioheader from './Header';
import { LanguageProvider } from './LanguageContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router basename='/lcoll'>
    <LanguageProvider>
      <Portifolioheader/>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<App />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </LanguageProvider>
  </Router>
);