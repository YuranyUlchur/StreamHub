import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { FaFilm } from 'react-icons/fa';
import { FaTwitter, FaLinkedinIn, FaGithub } from 'react-icons/fa';

export const Footer = () => {

    const handleClick = (e) => {
        console.log('Botón clickeado:', e.target.textContent);
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
                    <h3 className='title-contact'>Contact</h3>
                    <ul className="social-links">
                        <button onClick={handleClick}><FaTwitter /></button>
                        <button onClick={handleClick}><FaLinkedinIn /></button>
                        <button onClick={handleClick}><FaGithub /></button>
                    </ul>
                </div>
            </div>
            <div className="p-copy">
                <p>&copy;
                    2024</p>
            </div>
        </footer>
    );
};
