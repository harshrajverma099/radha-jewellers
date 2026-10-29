import React, { useState } from 'react';
import { Navbar } from './Navbar';
import { MobileMenu } from './MobileMenu';
import { FloatingContact } from './FloatingContact';
import { Footer } from './Footer';
import { Background3D } from './Background3D';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-ivory text-charcoal font-sans selection:bg-gold selection:text-white flex flex-col relative overflow-x-hidden">
      {/* 3D Luxury Stardust Background Canvas */}
      <Background3D />

      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-gold focus:text-white focus:rounded-md"
      >
        Skip to main content
      </a>

      {/* Luxury Navigation Header */}
      <Navbar
        isMobileMenuOpen={isMobileMenuOpen}
        onToggleMobileMenu={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      />

      {/* Mobile Slide-over Drawer Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />

      {/* Page Main Content with 3D Depth Context */}
      <main id="main-content" className="flex-1 relative z-10">
        {children}
      </main>

      {/* Floating Quick Action Contacts */}
      <FloatingContact />

      {/* Luxury Brand Footer */}
      <Footer />
    </div>
  );
};

export default Layout;
