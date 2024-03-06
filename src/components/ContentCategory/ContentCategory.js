import React, { useState, useEffect } from 'react';
import { Navbar } from '../Navbar/Navbar';
import { ApiServicesMovie } from '../ApiServices/ApiServices';
import { Link, useParams } from 'react-router-dom';
import './ContentCategory.css';

export const ContentCategory = () => {
    const [movies, setMovies] = useState([]);
    const { id } = useParams();
    const { name } = useParams();

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const data = await ApiServicesMovie.fetchData(id);
                setMovies(data.results);
            } catch (error) {
                console.error('Error fetching movies:', error);
            }
        };

        fetchMovies();
    }, [id]);

    return (
        <div className="content-category-container">
            <Navbar />
            <h1 className="category-title">Category {name}</h1>
            <div className="cards-container">
                {movies.map(movie => (
                    <div className="card" key={movie.id}>
                        <Link to={`/movie/${movie.id}`}>
                            <img className="card-image" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                            <div className="card-content">
                                <h2 className="card-title">{movie.title}</h2>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};
