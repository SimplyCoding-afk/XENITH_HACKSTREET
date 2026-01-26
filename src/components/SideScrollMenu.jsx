import React, { useState } from 'react';
import './SideScrollMenu.css';

const SideScrollMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  // The Navigation Links
  const menuItems = ["HOME", "ABOUT", "THEMES", "PRIZES", "FAQ"];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`side-menu-container ${isOpen ? 'open' : ''}`}>
      
      {/* 1. THE PAPER (Holds the links) */}
      <div className="menu-paper">
        <nav className="menu-nav">
          {menuItems.map((item, index) => (
            <a 
              key={index} 
              href={`#${item.toLowerCase()}`} 
              className="menu-link"
              style={{ transitionDelay: `${index * 0.1}s` }} // Staggered fade-in
            >
              {item}
            </a>
          ))}
        </nav>
      </div>

      {/* 2. THE WOODEN HANDLE (The Trigger) */}
      {/* Clicking this unrolls/rolls the menu */}
      <div className="menu-handle" onClick={toggleMenu}>
        <div className="handle-decoration top"></div>
        <span className="handle-text">{isOpen ? 'CLOSE' : 'MENU'}</span>
        <div className="handle-decoration bottom"></div>
      </div>

    </div>
  );
};

export default SideScrollMenu;