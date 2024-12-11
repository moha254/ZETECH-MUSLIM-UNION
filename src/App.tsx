import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import NewsPage from './pages/NewsPage';
import ResourcesPage from './pages/ResourcesPage';
import CommunityPage from './pages/CommunityPage';
import ContactPage from './pages/ContactPage';
import FridaySadaqa from './components/shared/FridaySadaqa';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <FridaySadaqa />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/community" element={<CommunityPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;