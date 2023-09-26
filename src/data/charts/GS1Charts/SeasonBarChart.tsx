import React from 'react';
import { Bar } from 'react-chartjs-2';
import { seasonData } from '../../seasonData';

const SeasonBarChartGS1 = () => {
  const gs1Data = seasonData.find(ship => ship.name === "Grant Ship 1");

  const labels = gs1Data?.seasons.map(s => `Season ${s.season}`);
  const allocatedData = gs1Data?.seasons.map(s => s.allocated);
  const distributedData = gs1Data?.seasons.map(s => s.distributed);

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

export default SeasonBarChartGS1;
