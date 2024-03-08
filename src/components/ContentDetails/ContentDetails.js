import React, { useState, useEffect } from 'react';
import { Navbar } from '../Navbar/Navbar';
import { Footer } from '../Footer/Footer';
import { ApiServicesDetails, ApiServicesTrailer } from '../ApiServices/ApiServices';
import { useParams } from 'react-router-dom';
import './ContentDetails.css';

// Component for displaying movie details
export const ContentDetails = () => {
    const [movie, setMovie] = useState(null);
    const [showVideo, setShowVideo] = useState(false);
    const [trailer, setTrailer] = useState(null);

     // Get movie id from route parameters
    const { id } = useParams();

    useEffect(() => {
        const fetchMovieDetails = async () => {
            try {
                // Fetch movie details from API based on movie id
                const data = await ApiServicesDetails.fetchData(id);
                setMovie(data);
            } catch (error) {
                console.error('Error fetching movie details:', error);
            }
        };

        fetchMovieDetails();
    }, [id]);


    // Fetch trailer when component mounts or movie id changes
    useEffect(() => {
        const getTrailerId = async () => {
            try {
                const data = await ApiServicesTrailer.fetchData(id);
                setTrailer(data.key);
            } catch (error) {
                console.error('Error fetching movie details:', error);
            }
        };

        getTrailerId();
    }, [id]);


      // Function to handle play button click event
    const handlePlayClick = () => {
        setShowVideo(true);
    };

    return (
        <div>
            <Navbar />
            {movie && (
                <div className="container">
                    <div className="movie-details">
                        <img className="movie-poster" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                        <div className="movie-overview-container">
                            <h1 className="movie-title">{movie.title}</h1>
                            <p className="movie-overview">{movie.overview}</p>
                            <p className='movie-genre'>
                                Genres: {movie.genres.map((genre, index) => (
                                    <span key={genre.id}>
                                        {genre.name}
                                        {index !== movie.genres.length - 1 ? ', ' : ''}
                                    </span>
                                ))}
                            </p>

                        </div>
                    </div>

                    <div className="video-trailer">
                        {!showVideo && (
                            <div className="play-icon" onClick={handlePlayClick}>
                                <iframe
                                    className="iframe-trailer"
                                    src={`https://www.youtube.com/embed/${ trailer }`}
                                    title="Trailer Video"
                                    frameBorder="0"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        )}
                    </div>

                </div>
            )}
            <Footer />
        </div>
    );
};
