
import React from 'react';
import peliculas2023 from '../data/movies2023.json'
import { CategoryScale } from 'chart.js';
import Chart from 'chart.js/auto';
import PieChart from '../components/PieChart';
import Collapsible from '../components/Collapsible';


const DirectorGender = () => {
    Chart.register(CategoryScale);

    const countByGender = () => {
        return {
            Mujeres: peliculas2023.titles2023.filter(item => item.director_gender.includes('Mujer cis')).length,
            Hombres: peliculas2023.titles2023.filter(item => item.director_gender.includes('Hombre cis')).length,
            Nobinario: peliculas2023.titles2023.filter(item => item.director_gender.includes('No binario')).length
        }
    }

    const getMovieListByGender = (gender) => {
        return peliculas2023.titles2023.filter(item => item.director_gender.includes(gender))
    }

    return (
        <div className='director-gender'>
            <h1>Películas Argentinas estrenadas en 2023</h1>
            <div className='pieChart-main-container'>
                <div className='pieChart-container'>
                    <PieChart data={Object.values(countByGender())} />
                </div>
                <div className='pieChart_title_and_text'>
                    De las 143 películas que registramos y analizamos, el 74,8% fueron dirigidas por hombres, el 24,4% tuvo una directora mujer y apenas el 0,6% fue dirigida por una persona no binaria.
                    <div className='collapsibles-main-container'>
                        <Collapsible
                            title="Películas dirigidas por mujeres"
                        >
                            {
                                getMovieListByGender('Mujer cis').map((movie, index) => <p key={'movie_female_director_' + index}>
                                    {movie.title} - Dirigida por  {movie.director}
                                </p>)
                            }
                        </Collapsible>
                        <Collapsible
                            title="Películas dirigidas por personas de género no binario"
                        >
                            {
                                getMovieListByGender('No binario').map((movie, index) => <p key={'movie_nonbinary_director_' + index}>
                                    {movie.title} - Dirigida por  {movie.director}
                                </p>)
                            }
                        </Collapsible>
                        <Collapsible
                            title="Películas dirigidas por hombres"
                        >
                            {
                                getMovieListByGender('Hombre cis').map((movie, index) => <p key={'movie_male_director_' + index}>
                                    {movie.title} - Dirigida por  {movie.director}
                                </p>)
                            }
                        </Collapsible>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default DirectorGender;

//TODO:: 
// -- separar en cis y no cisgénero
// -- agregar listado de películas on hover
// -- agregar acceso a info de película
// -- agregar texto explicativo con porcentajes