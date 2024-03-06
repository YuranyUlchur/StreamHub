import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Logout, LoginAction } from '../Actions/Actions';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';

export const Navbar = () => {
    const dispatch = useDispatch();
    const { isLoggedIn } = useSelector(state => state.auth);
    const navigate = useNavigate();

    const handleLogin = () => {
        const userData = { name: 'Usuario', email: 'usuario@example.com' };
        dispatch(LoginAction(userData));
        navigate('/Login');
    };

    const handleLogout = () => {
        dispatch(Logout());
        navigate('/');
    };

    return (
        <nav className="navbar">
            <div className="containernavbar">
                <a href="/" className="navbar-brand">StreamHub</a>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a href="/" className="nav-home">Home</a>
                    </li>
                </ul>
                <div className="ml-auto">
                    {isLoggedIn ? (
                        <button className="logout-btn" onClick={handleLogout}>Cerrar sesión</button>
                    ) : (
                        <button className="login-btn" onClick={handleLogin}>Iniciar sesión</button>
                    )}
                </div>
            </div>
        </nav>
    );
};
