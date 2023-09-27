// SeasonBarChart.tsx
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { GrantShip } from '../../data/hatData'

interface Props {
  grantShip: GrantShip;
}

const data = {
  labels: ['Season 1', 'Season 2', 'Season 3'], // Replace with actual labels
  datasets: [
    {
      label: 'Allocated',
      data: [50000, 30000, 40000], // Replace with actual data
      backgroundColor: 'rgba(75,192,192,0.4)',
    },
    {
      label: 'Distributed',
      data: [10000, 28000, 29000], // Replace with actual data
      backgroundColor: 'rgba(255,99,132,0.4)',
    },
  ],
};

const SeasonBarChart: React.FC<Props> = ({ grantShip }) => {
  // Extract data from grantShip here...

  return <Bar data={data} />;
};

export default SeasonBarChart;
