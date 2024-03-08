import { Route, Routes } from 'react-router-dom';
import { Home } from './components/Home/Home';
import { Login } from './components/Login/Login';
import { ContentDetails } from './components/ContentDetails/ContentDetails';
import { ContentCategory } from './components/ContentCategory/ContentCategory';
import './App.css';
import { PrivateRoute } from './components/PrivateRoute/PrivateRoute';

export const App = () => {
    return (
        <div className="body">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="category/:id/:name" element={<PrivateRoute component={ContentCategory} />} />
                <Route path="movie/:id" element={<PrivateRoute component={ContentDetails} />} />
            </Routes>
        </div>
    );
};
