import React from 'react';
import { Bar } from 'react-chartjs-2';
import { seasonData } from '../../seasonData';

const SeasonBarChart = () => {
  const gs1Data = seasonData.find(ship => ship.name === "Grant Ship 1");

  // Check if gs1Data and its seasons are available
  if (!gs1Data || !gs1Data.seasons) {
    return <p>Loading...</p>; // Or some other placeholder
  }

  const labels = gs1Data.seasons.map(s => `Season ${s.season}`);
  const allocatedData = gs1Data.seasons.map(s => s.allocated);
  const distributedData = gs1Data.seasons.map(s => s.distributed);

  const data = {
    labels,
    datasets: [
      {
        label: 'Allocated',
        data: allocatedData,
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
      {
        label: 'Distributed',
        data: distributedData,
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
      },
    ],
  };

  return <Bar data={data} />;
};

export default SeasonBarChart;
