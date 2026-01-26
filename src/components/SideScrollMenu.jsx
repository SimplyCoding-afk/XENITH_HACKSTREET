// src/components/SideScrollMenu.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link
import './SideScrollMenu.css';

const SideScrollMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Helper to close menu when a link is clicked
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <div className={`side-menu-container ${isOpen ? 'open' : ''}`}>
      
      {/* 1. The Paper (Content Area) */}
      <div className="menu-paper">
        <nav className="menu-nav">
          
          {/* Use LINK instead of A tags for smooth transitions */}
          <Link to="/" className="menu-link" onClick={handleLinkClick}>
            HOME
          </Link>
          
          <Link to="/about" className="menu-link" onClick={handleLinkClick}>
            ABOUT
          </Link>
          
          <Link to="/themes" className="menu-link" onClick={handleLinkClick}>
            THEMES
          </Link>
          
          <Link to="/prizes" className="menu-link" onClick={handleLinkClick}>
            PRIZES
          </Link>
          
          <Link to="/faq" className="menu-link" onClick={handleLinkClick}>
            FAQ
          </Link>
           <Link to="/timeline" className="menu-link" onClick={handleLinkClick}>
            TIMELINE
          </Link>
          
        </nav>
      </div>

      {/* 2. The Handle (Button) */}
      <div className="menu-handle" onClick={toggleMenu}>
        <div className="handle-decoration top"></div>
        
        <div className="handle-text">
          {isOpen ? 'CLOSE' : 'MENU'}
        </div>
        
        <div className="handle-decoration bottom"></div>
      </div>
      
    </div>
  );
};

export default SideScrollMenu;