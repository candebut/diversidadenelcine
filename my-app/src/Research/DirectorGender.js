
import React, { useState, useEffect } from 'react';
import peliculas2023 from '../data/movies2023.json'
import { Bar } from 'react-chartjs-2';
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

    const chartData = {
        labels: Object.keys(countByGender),
        datasets: [
            {
                label: 'Películas dirigidas',
                backgroundColor: 'rgba(75,192,192,0.2)',
                borderColor: 'rgba(75,192,192,1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(75,192,192,0.4)',
                hoverBorderColor: 'rgba(75,192,192,1)',
                data: countByGender(),
            },
        ],
    };

    // Configuración del gráfico
    const chartOptions = {
        scales: {
            xAxes: [{
                type: 'category',
                ticks: {
                    beginAtZero: true,
                },
            }],
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                },
            }],
        },
    };

    return (
        <div>
            <h1>Películas Argentinas estrenadas en 2023</h1>
            <div className='pieChart-container'>
                {/* <Bar data={chartData} options={chartOptions} /> */}
                <PieChart data={Object.values(countByGender())} />
            </div>
        </div>
    )
}
export default DirectorGender;