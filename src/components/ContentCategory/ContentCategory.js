import React, { useState, useEffect } from 'react';
import { Navbar } from '../Navbar/Navbar';
import { ApiServicesMovie} from '../ApiServices/ApiServices';
import { Link, useParams } from 'react-router-dom';



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

        <div>
            <Navbar />
            <h1>Category { name } </h1>
            <ul>
                {movies.map(movie => (
                    <li key={movie.id}>
                       <Link to={`/movie/${movie.id}`}>{movie.title}</Link>
                       <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                        
                    </li>
                ))}
            </ul>
        </div>
    );
};

