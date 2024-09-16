import React, { useState, useEffect } from 'react';
import { Navbar } from '../Navbar/Navbar';
import { ApiServicesGenre } from '../ApiServices/ApiServices';
import { Link } from 'react-router-dom';
import { faRunning, faCompass, faTheaterMasks, faLaugh, faHandcuffs } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Footer } from '../Footer/Footer';
import './Home.css';
// Home component
export const Home = () => {
    // State to store movie genres
    const [genres, setGenres] = useState([]);
    // Fetch movie genres when component mounts

    useEffect(() => {
        const fetchMoviesGenre = async () => {
            try {
                // Fetch movie genres data from API
                const data = await ApiServicesGenre.fetchData();
                // Set first 5 movie genres to state
                setGenres(data.genres.slice(0, 5));
            } catch (error) {
                console.error('Error fetching movies:', error); // Log error if fetching fails
            }
        };

        fetchMoviesGenre();
    }, []);

    // List of background images for category cards
    const backgroundImageList = [
        'https://www.10wallpaper.com/wallpaper/medium/1606/Wonder_Womans_Special_Powers-2016_Movies_HD_Wallpaper_medium.jpg',
        'https://p4.wallpaperbetter.com/wallpaper/600/210/496/up-movie-animated-movies-movies-wallpaper-preview.jpg',
        'https://lumiere-a.akamaihd.net/v1/images/eu_xx_strange-world_c196_r_77f2a2c6.jpeg?region=0,2,1630,916',
        'https://www.lavanguardia.com/andro4all/hero/2023/08/dont-look-up.png?width=768&aspect_ratio=16:9&format=nowebp',
        'https://img.freepik.com/fotos-premium/hombre-abrigado-sombrero-al-estilo-pelicula-negra-calle-oscura_1160231-6297.jpg?w=826'
    ];

    // List of icons for category cards
    const iconList = [faRunning, faCompass, faTheaterMasks, faLaugh, faHandcuffs];

    return (
        <div>
            <Navbar />
            <h1 className='title-category'>Category</h1>
            <div className='category-cards-container'>
                {genres.map((genre, index) => (
                    <div key={genre.id} className='category-card'>
                        <Link to={`/category/${genre.id}/${genre.name}`}>
                            <div className='card-background' style={{ backgroundImage: `url(${backgroundImageList[index]})` }}>
                                <div className='icon'>
                                    <FontAwesomeIcon icon={iconList[index]} />
                                </div>
                            </div>
                            <div className='card-title'>{genre.name}</div>
                        </Link>
                    </div>
                ))}
            </div>
            <Footer />
        </div>
    );
};
