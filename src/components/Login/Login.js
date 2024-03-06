import React, { useState } from 'react';

export const Login = () => {
    // Estados para almacenar los valores de los campos del formulario
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Función para manejar el envío del formulario
    const handleSubmit = (event) => {
        event.preventDefault(); // Evitar que el formulario se envíe de forma predeterminada
        // Aquí puedes realizar la lógica para enviar los datos a tu backend o realizar alguna acción
        console.log('Username:', username);
        console.log('Email:', email);
        console.log('Password:', password);
    };

    return (
        <div>
            <h2>Inicio de sesión</h2>
            <form onSubmit={handleSubmit}>

                <div>
                    <label htmlFor="username">Usuario:</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>

                <div>
                    <label htmlFor="email">Correo electrónico:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div>
                    <label htmlFor="password">Contraseña:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
    
                <button type="submit">Iniciar sesión</button>
            </form>
        </div>
    );
};
