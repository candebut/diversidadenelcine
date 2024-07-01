import React from 'react';
import { Pie } from 'react-chartjs-2';

const PieChart = ({ data }) => {
    const chartData = {
        labels: ['Mujeres', 'Hombres', 'No binario'],
        datasets: [
            {
                label: 'Directores por género',
                data: data,
                backgroundColor: ['#BEB7DF', '#FF6384', '#36A2EB',],
                hoverBackgroundColor: ['#9992BA', '#FF6384', '#36A2EB'],
            },
        ],
    };

    const options = {
        plugins: {
            legend: {
                display: true,
                position: 'bottom',
            },
        },
    };

    return (
        <div className="chart-container">
            <Pie data={chartData} options={options} />
        </div>
    );
};

export default PieChart;
