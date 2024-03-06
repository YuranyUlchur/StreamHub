import React from 'react';
import './Footer.css';
import { FaTwitter, FaLinkedinIn, FaGithub } from 'react-icons/fa';

export const Footer = () => {
    
    const handleClick = (e) => {
        console.log('Botón clickeado:', e.target.textContent);
    };

    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-column">
                    <h3>Contacto</h3>
                    <h3>Correo@gmail.com</h3>
                    <h5>Tel: 12345678</h5>
                </div>
                <div className="footer-column">
                    <h3>Enlaces útiles</h3>
                    <h5>Acerca de nosotros</h5>
                </div>
                <div className="footer-column">
                    <h3>Síguenos en las redes sociales</h3>
                    <ul className="social-links">
                        <button onClick={handleClick}><FaTwitter /></button>
                        <button onClick={handleClick}><FaLinkedinIn /></button>
                        <button onClick={handleClick}><FaGithub /></button>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 Tu Sitio Web. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
};
