import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './Login.css';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../Store/UserSlice';

export const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [user, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    //redux state
    const {loading, error} = useSelector((state)=>state.user);

    // Function to handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        let userCredential = {
            email, password
        }
        dispatch(loginUser(userCredential)).then((result)=>{
            if (result.payload){
                setEmail('');
                setPassword('');
                navigate('/');
            }
        })
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
                            value={user}
                            required
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div>
                        <input
                            type="email"
                            id="email"
                            placeholder='Email'
                            value={email}
                            required
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <input
                            type="password"
                            id="password"
                            placeholder='Password'
                            value={password}
                            required
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit">{loading?'Loading...':'Login'}</button>
                    {error&&(
                        <div className='alert'>{error}</div>
                    )}
                </form>
            </div>
        </div>
    );
};
