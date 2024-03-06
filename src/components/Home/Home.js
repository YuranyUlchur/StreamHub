import React, { useState, useEffect } from 'react';
import { Navbar } from '../Navbar/Navbar';
import { ApiServicesGenre } from '../ApiServices/ApiServices';
import { Link } from 'react-router-dom';
import { faRunning, faCompass, faTheaterMasks, faLaugh, faHandcuffs } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Footer } from '../Footer/Footer';
import './Home.css';

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


const backgroundImageList = [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_XlkVyLTCa2K4QXS5qY7o6RmKi29HlLc1NA&usqp=CAU',
    'https://hips.hearstapps.com/hmg-prod/images/aquaman-pelicula-8-1546188549.jpg?crop=0.75xw:1xh;center,top&resize=1200:*',
    'https://lumiere-a.akamaihd.net/v1/images/eu_xx_strange-world_c196_r_77f2a2c6.jpeg?region=0,2,1630,916',
    'https://www.lavanguardia.com/andro4all/hero/2023/08/dont-look-up.png?width=768&aspect_ratio=16:9&format=nowebp',
    'https://www.xtrafondos.com/descargar.php?id=8479&resolucion=3840x2160'
];

const iconList = [faRunning, faCompass, faTheaterMasks, faLaugh, faHandcuffs];

return (
    <div>
        <Navbar />
        <h1>Category</h1>
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