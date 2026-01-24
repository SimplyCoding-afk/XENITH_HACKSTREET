import React from 'react';
import './ScrollNav.css';

const ScrollNav = () => {
    // The 5 sections you want to navigate to
    const navItems = ["HOME", "ABOUT", "TRACKS", "SPONSORS", "FAQ"];

    return (
        <div className="scroll-nav-container">
            {navItems.map((item, index) => (
                <div key={index} className="scroll-item">

                    {/* The Left Wooden Handle */}
                    <div className="scroll-handle left"></div>

                    {/* The Paper Body */}
                    <div className="scroll-paper">
                        <span className="scroll-text">{item}</span>
                    </div>

                    {/* The Right Wooden Handle */}
                    <div className="scroll-handle right"></div>

                </div>
            ))}
        </div>
    );
};

export default ScrollNav;