import React, { useState, useEffect } from 'react';
import { Navbar } from '../Navbar/Navbar';
import { Footer } from '../Footer/Footer';
import { ApiServicesMovie } from '../ApiServices/ApiServices';
import { Link, useParams } from 'react-router-dom';
import './ContentCategory.css';

// Component for displaying movies based on category
export const ContentCategory = () => {
    const [movies, setMovies] = useState([]);
    const { id, name } = useParams();
    // Fetch movies when component mounts or category id changes
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
        <div>
            <Navbar />
            <div className="content-category-container">
                <h1 className="category-title">Category {name}</h1>
                <div className="cards-container">
                    {movies.map(movie => (
                        <div className="card" key={movie.id}>
                            <Link to={`/movie/${movie.id}`} className="card-title-movie">
                                <img className="card-image" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                                {movie.title}
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
};
