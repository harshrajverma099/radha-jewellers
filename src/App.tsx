import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ScrollToTop } from './components/ScrollToTop';
import { Home } from './pages/Home';
import { AboutPage } from './pages/AboutPage';
import { Experience3DPage } from './pages/Experience3DPage';
import { CollectionsPage } from './pages/CollectionsPage';
import { OffersPage } from './pages/OffersPage';
import { ShowroomPage } from './pages/ShowroomPage';
import { ContactPage } from './pages/ContactPage';

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/3d-experience" element={<Experience3DPage />} />
        <Route path="/collections" element={<CollectionsPage />} />
        <Route path="/offers" element={<OffersPage />} />
        <Route path="/showroom" element={<ShowroomPage />} />
        <Route path="/contact" element={<ContactPage />} />
        {/* Fallback to Home for unknown paths */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
