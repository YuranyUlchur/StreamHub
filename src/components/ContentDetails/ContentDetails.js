import React, { useState, useEffect } from 'react';
import { Navbar } from '../Navbar/Navbar';
import { ApiServicesDetails } from '../ApiServices/ApiServices';
import { useParams } from 'react-router-dom';
import { FaPlay } from 'react-icons/fa';
import './ContentDetails.css';

export const ContentDetails = () => {
    const [movie, setMovies] = useState([]);
    const [showVideo, setShowVideo] = useState(false);
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

   
    const getYoutubeTrailerId = () => {
        return "VIDEO_ID";
    }

    const handlePlayClick = () => {
        setShowVideo(true);
    }

    return (
        <div>
            <Navbar />
            <div className="content-details-container">
                <img className="movie-poster" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                <div className="movie-details">
                    <h1 className="movie-title">{movie.title}</h1>
                    <p className="movie-overview">{movie.overview}</p>
                    
                    {!showVideo && (
                        <div className="play-icon" onClick={handlePlayClick}>
                            <FaPlay />
                        </div>
                    )}
            
                    {showVideo && (
                        <iframe
                            className="trailer-video"
                            src={`https://www.youtube.com/embed/${getYoutubeTrailerId()}`}
                            title="Trailer Video"
                            frameBorder="0"
                            allowFullScreen
                        ></iframe>
                    )}
                </div>
            </div>
        </div>
    );
};
