import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './Login.css';


export const Login = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Function to handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        navigate('/');
    };

    return (
        <div className="login-background">
            <div className="login-container">
                <h2>Inicio de sesión</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <input
                            type="text"
                            placeholder='Username'
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div>
                        <input
                            type="email"
                            id="email"
                            placeholder='Email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <input
                            type="password"
                            id="password"
                            placeholder='Password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit">Iniciar sesión</button>
                </form>
            </div>
        </div>
    );
};
