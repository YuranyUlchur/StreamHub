import React, { useState, useEffect } from 'react';
import { Navbar } from '../Navbar/Navbar';
import { ApiServicesDetails} from '../ApiServices/ApiServices';
import { useParams } from 'react-router-dom'; 


export const ContentDetails = () => {
    const [movie, setMovies] = useState([]);
    const { id } = useParams();
    const { name } = useParams();
    console.log(name)

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const data = await ApiServicesDetails.fetchData(id);
                setMovies(data);
            } catch (error) {
                console.error('Error fetching movies:', error);
            }
        };

        fetchMovies();
    }, [id]);

    

    return (

        <div>
            <Navbar />
            <ul>
                <h1>{movie.title}</h1>
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                <h3>{movie.overview}</h3>
            </ul>
        </div>
    );
};

