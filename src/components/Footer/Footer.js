import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { FaFilm } from 'react-icons/fa';
import { FaTwitter, FaLinkedinIn, FaGithub } from 'react-icons/fa';

export const Footer = () => {

    // Function to handle click event on social media icons
    const handleClick = (e) => {
        console.log('Button clicked:', e.target.textContent); // Log which button was clicked
    };

    return (
        <footer className="footer">
            <div className= 'divider-custom'>
                <div className='divider-custom-line'></div>
            </div>
            <div className="footer-container">
                <div className='row-container'>
                    <Link className='title-footer' to="/">
                        <FaFilm /> StreamHub
                    </Link>
                </div>

                <div className='sesion-contact'>
                    <ul className="social-links">
                        <button onClick={handleClick}><FaTwitter /></button>
                        <button onClick={handleClick}><FaLinkedinIn /></button>
                        <button onClick={handleClick}><FaGithub /></button>
                    </ul>
                </div>
            </div>
            <div className="p-copy">
                <p>&copy; 2024</p>
            </div>
        </footer>
    );
};
