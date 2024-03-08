import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Logout, LoginAction } from '../Actions/Actions';
import { useNavigate } from 'react-router-dom';
import { FaFilm } from 'react-icons/fa';
import './Navbar.css';

export const Navbar = () => {
    const dispatch = useDispatch();
    const { isLoggedIn } = useSelector(state => state.auth);
    const navigate = useNavigate();

    // Function to handle login action
    const handleLogin = () => {
        const userData = { name: 'Usuario', email: 'usuario@example.com' };
        dispatch(LoginAction(userData));
        navigate('/Login');
    };

    // Function to handle logout action
    const handleLogout = () => {
        dispatch(Logout());
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
                    <button className={isLoggedIn ? "logout-btn" : "login-btn"} onClick={isLoggedIn ? handleLogout : handleLogin}>
                        {isLoggedIn ? "Cerrar sesión" : "Iniciar sesión"}
                    </button>
                </div>
            </div>
        </nav>
    );
};
