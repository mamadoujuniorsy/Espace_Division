import React, { useEffect, useRef } from 'react';
import { Chart, registerables } from 'chart.js';
import { Chart as ReactChart } from 'react-chartjs-2';
import userData from '../../data/userData.json';

Chart.register(...registerables);

const AreaChart = () => {
  const chartRef = useRef(null);

  // Extracting user data from the JSON file
  const userLabels = userData.slice(0, 12).map((data) => data.label);
  const userValues = userData.slice(0, 12).map((data) => data.users);

  // Creating the chart data object
  const data = {
    labels: userLabels,
    datasets: [
      {
        label: 'Nombres utilisateurs',
        data: userValues,
        fill: true, // Enable fill for area chart
        backgroundColor: 'rgba(128, 0, 128, 0.2)', // Adjust background color opacity for fill effect
        borderColor: 'rgb(128, 0, 128)',
        tension: 0.1,
      },
    ],
  };

  useEffect(() => {
    const chartContext = chartRef.current.getContext('2d');

    let chartInstance;

    if (chartContext) {
      if (chartRef.current.chartInstance) {
        chartRef.current.chartInstance.destroy();
      }

      chartInstance = new Chart(chartContext, {
        type: 'line',
        data: data,
        options: {
          plugins: {
            legend: {
              display: true,
            },
          },
          scales: {
            x: {
              beginAtZero: true,
            },
            y: {
              beginAtZero: true,
            },
          },
        },
      });

      chartRef.current.chartInstance = chartInstance;
    }

    return () => {
      if (chartInstance) {
        chartInstance.destroy();
      }
    };
  }, [data]);

  return (
    <div className='flex w-[500px] bg-white mt-4'>
      <canvas ref={chartRef} />
    </div>
  );
};

export default AreaChart;
