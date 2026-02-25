import React, { useState } from 'react';
import { Link, useLocation } from '@tanstack/react-router';

export default function Navbar() {
    const [isActive, setIsActive] = useState(false);
    const location = useLocation();

    const toggleNav = () => {
        setIsActive(!isActive);
    };

    return (
        <nav>
            <div className="logo">
                <Link to="/">
                    <span className="syntax-keyword">import</span>
                    <span className="syntax-punct">{" { "}</span>
                    <span className="syntax-func">Trae</span>
                    <span className="syntax-punct">{" } "}</span>
                    <span className="syntax-keyword">from</span>
                    <span className="syntax-string">'shanks'</span>
                    <span className="syntax-punct">;</span>
                </Link>
            </div>

            <ul className={`nav-links ${isActive ? 'nav-active' : ''}`}>
                <li>
                    <Link to="/" onClick={() => setIsActive(false)} className={location.pathname === '/' ? 'active' : ''}>
                        ~/about
                    </Link>
                </li>
                <li>
                    <Link to="/projects" onClick={() => setIsActive(false)} className={location.pathname === '/projects' ? 'active' : ''}>
                        ~/projects
                    </Link>
                </li>
                <li>
                    <Link to="/contact" onClick={() => setIsActive(false)} className={location.pathname === '/contact' ? 'active' : ''}>
                        ~/contact
                    </Link>
                </li>
            </ul>

            <div className={`burger ${isActive ? 'toggle' : ''}`} onClick={toggleNav}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
        </nav>
    );
}
