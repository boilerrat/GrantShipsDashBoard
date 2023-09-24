// src/components/RefereeDataComponent.tsx

import React from 'react';
import { Typography, Paper } from '@mui/material';
import refereeData from './ShipsData/refData'; // Import refereeData


const RefereeDataComponent: React.FC = () => {
  return (
    <div>
      <Typography variant="h5">Referee Data</Typography>
      <Typography variant="body1">ID: {refereeData.id}</Typography>
      <Typography variant="body1">Is Active: {refereeData.isActive ? 'Yes' : 'No'}</Typography>
      <Typography variant="body1">Head Referee Wearer: {refereeData.headReferee.wearer}</Typography>
      <Typography variant="body1">Referee Wearers: {refereeData.referees.wearers.join(', ')}</Typography>
    </div>
  );
};

export default RefereeDataComponent;
