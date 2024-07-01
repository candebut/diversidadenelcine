
import React from 'react';
import peliculas2023 from '../data/movies2023.json'
import { CategoryScale } from 'chart.js';
import Chart from 'chart.js/auto';
import PieChart from '../components/PieChart';


const DirectorGender = () => {
    Chart.register(CategoryScale);

    const countByGender = () => {
        return {
            Mujeres: peliculas2023.titles2023.filter(item => item.director_gender.includes('Mujer cis')).length,
            Hombres: peliculas2023.titles2023.filter(item => item.director_gender.includes('Hombre cis')).length,
            Nobinario: peliculas2023.titles2023.filter(item => item.director_gender.includes('No binario')).length
        }
    }

    return (
        <div>
            <h1>Películas Argentinas estrenadas en 2023</h1>
            <div className='pieChart-container'>
                <PieChart data={Object.values(countByGender())} />
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