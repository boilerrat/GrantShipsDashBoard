// src/data/ShipsData/totalShipData.tsx

import React, { useEffect, useState } from 'react';
import { Typography } from '@mui/material';
import { calculateAllImpacts } from '../functions/service'; // Import the function

/**
 * @component TotalShipData
 * 
 * This component displays the total impact data for all Grant Ships.
 * It uses the calculateAllImpacts function from the service.tsx file to get the data.
 */
const TotalShipData: React.FC = () => {
  // State to hold the aggregate total impact data
  const [aggregateData, setAggregateData] = useState<any[]>([]);

  useEffect(() => {
    // Call the calculateAllImpacts function and set the state
    const data = calculateAllImpacts();
    setAggregateData(data);
  }, []);

  return (
    <div>
      <Typography variant="h5">Total Ship Data</Typography>
      
      {/* Display calculated data */}
      {aggregateData.map((ship, index) => (
        <Typography key={index} variant="body1">
          Aggregate Total Impact for {ship.name}: {ship.aggregateTotalImpact}
        </Typography>
      ))}

      {/* Placeholders for other categories */}
      <Typography variant="body1">Placeholder for Other Category 1</Typography>
      <Typography variant="body1">Placeholder for Other Category 2</Typography>
    </div>
  );
};

export default TotalShipData;
