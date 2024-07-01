import React from 'react';
import { Pie } from 'react-chartjs-2';

const PieChart = ({ data }) => {
    const chartData = {
        labels: ['Mujeres', 'Hombres', 'No binario'],
        datasets: [
            {
                label: `Directores por género`,
                data: data,
                backgroundColor: ['#E3D081', '#91C7B1', '#B33951',],
                hoverBackgroundColor: ['#D3BE6A', '#79BDA2', '#A03A4E'],
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
