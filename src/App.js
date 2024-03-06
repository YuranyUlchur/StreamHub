import React from 'react';
import { Route, Routes} from 'react-router-dom';
import { Home } from './components/Home/Home';
import { Login } from './components/Login/Login';
import { ContentDetails } from './components/ContentDetails/ContentDetails';
import { ContentCategory } from './components/ContentCategory/ContentCategory';


export const App = () => {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Login" element={<Login />} />
                <Route path="category/:id/:name" element={<ContentCategory />} />
                <Route path="movie/:id" element={<ContentDetails />} />
            </Routes>
        </div>
    );
};

