import React, { useState, useEffect } from 'react';
import { Navbar } from '../Navbar/Navbar';
import { ApiServicesGenre } from '../ApiServices/ApiServices';
import { Link } from 'react-router-dom';


export const Home = () => {
    const [genres, setGenres] = useState([]);

    useEffect(() => {
        const fetchMoviesGenre = async () => {
            try {
                const data = await ApiServicesGenre.fetchData();
                console.log(data)
                setGenres(data.genres.slice(0, 5));
            } catch (error) {
                console.error('Error fetching movies:', error);
            }
        };

        fetchMoviesGenre();
    }, []);

    return (

        <div>
            <Navbar />
            <h1>Category</h1>
            <ul>
                {genres.map(genre => (
                    <li key={genre.id}>
                       <Link to={`/category/${genre.id}/${genre.name}`}>{genre.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

