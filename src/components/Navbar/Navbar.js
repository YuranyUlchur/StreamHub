import React from 'react';
import './Navbar.css';

export const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="container">
                <a href="/" className="navbar-brand">StreamHub</a>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a href="/" className="nav-link">Home</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};