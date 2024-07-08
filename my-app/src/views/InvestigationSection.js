
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import maleNames from '../data/maleNames.json'

const apiKey = 'e36097fbe2fd55722e0e5c36cb0aa671';

const getMovies2023InArgentina = async (page = 1) => {
    const url = `https://api.themoviedb.org/3/discover/movie`;
    const params = {
        api_key: apiKey,
        // language: 'es-AR', // Lenguaje preferido para nombres de películas y personas
        sort_by: 'release_date.desc',
        include_adult: false,
        include_video: false,
        primary_release_year: 2023,
        with_original_language: 'es', // Limita a películas en español (opcional)
        with_countries: 'AR', // Limita a películas producidas en Argentina
        origin_country: 'AR',
        //with_crew: '274702', // ID de género para mujeres como directoras
        page: 1,
    };
    const response = await axios.get(url, { params });
    return response.data;
};

const getMovieDetails = async (movieId) => {
    const url = `https://api.themoviedb.org/3/movie/${movieId}`;
    const params = { api_key: apiKey, language: 'en-US', append_to_response: 'credits' };
    const response = await axios.get(url, { params });
    console.log('response.data: ', response.data)
    return response.data;
};

// const getPersonDetails = async (personId) => {
//     const url = `https://api.themoviedb.org/3/person/${personId}`;
//     const params = { api_key: apiKey, language: 'en-US' };
//     const response = await axios.get(url, { params });
//     return response.data;
// };

const InvestigationSection = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    const eliminarDuplicados = (array, key) => {
        const seen = new Set();
        return array.filter(item => {
            const value = item[key];
            if (seen.has(value)) {
                return false;
            }
            seen.add(value);
            return true;
        });
    };
    // useEffect(() => {
    //     setNombresHombresList(maleNames.nombres);
    // }, []);

    useEffect(() => {
        const fetchMovies = async () => {
            let allMovies = [];
            let allDirectors = [];
            let page = 1;
            let keepFetching = true;

            while (keepFetching) {
                const data = await getMovies2023InArgentina(page);
                console.log('data: ', data)

                if (data.results.length === 0 || page > data.total_pages) {
                    keepFetching = false;
                    break;
                } else {
                    for (const movie of data.results) {
                        const movieDetails = await getMovieDetails(movie.id);
                        const directors = movieDetails.credits.crew.filter(crew => crew.job === 'Director');


                        for (let i = 0; i < directors.length; i++) {
                            const item = directors[i];
                            //     // Check if gender is '1'
                            if (item.gender !== 2 && maleNames.nombres.some(nombreHombre => item.name.includes(nombreHombre)) === false) {
                                allDirectors.push(item);
                                allMovies.push({
                                    title: movieDetails.title,
                                    release_date: movieDetails.release_date,
                                    country: movieDetails.production_countries.length > 0 ? movieDetails.production_countries[0].name : 'Unknown',
                                    director_name: item.name,
                                    // director_gender: 'Female'
                                });
                            }
                            // Iterate through the middle array
                            // for (let j = 0; j < directors[i].length; j++) {
                            //     secondIt.push(directors[i][j])
                            //     // Iterate through the innermost array
                            //     const item = directors[i][j]
                            //     allDirectors.push(item);
                            //     // if (item.gender == '1') {
                            //     // }
                            //     // for (let k = 0; k < directors[i][j].length; k++) {
                            //     //     const item = directors[i][j][k];
                            //     //     // Check if gender is '1'
                            //     //     if (item.gender == '1') {
                            //     //         allDirectors.push(item);
                            //     //     }
                            //     // }
                            // }
                        }


                        // for (const director of directors) {
                        //     const directorDetails = await getPersonDetails(director.id);
                        //     if (directorDetails.gender === 1) { // Filtra por directoras mujeres
                        //         allMovies.push({
                        //             title: movieDetails.title,
                        //             release_date: movieDetails.release_date,
                        //             country: movieDetails.production_countries.length > 0 ? movieDetails.production_countries[0].name : 'Unknown',
                        //             director_name: directorDetails.name,
                        //             director_gender: 'Female'
                        //         });
                        //     }
                        // }
                    }
                }
                page += 1;
            }

            setMovies(eliminarDuplicados(allMovies, 'title'));
            setLoading(false);
        };
        fetchMovies();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="App">
            <h1>Películas de 2023 en Argentina dirigidas por mujeres</h1>
            <ul>
                {movies.map((movie, index) => (
                    <li key={index}>
                        <h2>{movie.title}</h2>
                        <p>Fecha de estreno: {movie.release_date}</p>
                        <p>País: {movie.country}</p>
                        <p>Directora: {movie.director_name}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default InvestigationSection;
