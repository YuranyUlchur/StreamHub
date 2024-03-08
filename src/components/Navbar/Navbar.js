import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaFilm } from 'react-icons/fa';
import './Navbar.css';

function getUser(){
    let user = localStorage.getItem('user');
    if (!user){
        user = null
    }
    return user;
}

export const Navbar = () => {
    const [user, setUser] = useState(getUser())
    const navigate = useNavigate();
 
    const handleLogin = (()=>{
        navigate("/login")
    });

    // Function to handle logout action
    const handleLogout = () => {
        localStorage.removeItem('user');
        setUser(null);
        navigate('/');
    };

    return (
        <nav className="navbar">
            <div className="container-navbar">
                <a href="/" className="navbar-brand"> <FaFilm /> StreamHub</a>
                <ul className="navbar-nav-home">
                    <a href="/" className="nav-home">Home</a>
                </ul>
                <div className="ml-auto">
                    <button className={user ? "logout-btn" : "login-btn"} onClick={user ? handleLogout : handleLogin}>
                        {user ? "Cerrar sesión" : "Iniciar sesión"}
                    </button>
                </div>
            </div>
        </nav>
    );
};
