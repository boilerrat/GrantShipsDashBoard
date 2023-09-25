import React from 'react';
import { Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { seasonData } from '../seasonData';
import hatData from '../hatData';

// Define TypeScript interfaces for the data shapes
interface Season {
  season: number;
  allocated: number;
  distributed: number;
  grants: number;
  impact: {
    [key: string]: number;
  };
}

interface GrantShip {
  id: string;
  name: string;
  isActive: boolean;
  wearer: string | "NAN";
  cards?: {
    yellowCard1: boolean;
    yellowCard2: boolean;
    redCard: boolean;
    greenCard: boolean;
  };
  captain?: {
    id: string;
    isActive: boolean;
    wearer: string | "NAN";
  };
  crew?: {
    id: string;
    isActive: boolean;
    wearer: string | "NAN";
  };
}

// Extracting Grant Ship 4 data from seasonData
const grantShip4SeasonData: Season[] = seasonData.find(ship => ship.name === 'Grant Ship 4')?.seasons || [];

// Define a default GrantShip object
const defaultGrantShip: GrantShip = {
  id: '',
  name: '',
  isActive: false,
  wearer: 'NAN',
  cards: {
    yellowCard1: false,
    yellowCard2: false,
    redCard: false,
    greenCard: false,
  },
  captain: {
    id: '',
    isActive: false,
    wearer: 'NAN',
  },
  crew: {
    id: '',
    isActive: false,
    wearer: 'NAN',
  },
};

// Extracting Grant Ship 4 data from hatData
const grantShip4HatData: GrantShip = hatData.grantShips.find(ship => ship.name === 'Grant Ship 4') || defaultGrantShip;

const GrantShip4Data = () => {
  return (
    <div>
      <Typography variant="h5">Grant Ship 4</Typography>

      {/* Displaying Season Data */}
      <Typography variant="subtitle1">Season Data</Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Season</TableCell>
              <TableCell>Allocated</TableCell>
              <TableCell>Distributed</TableCell>
              <TableCell>Grants</TableCell>
              <TableCell>Total Impact</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {grantShip4SeasonData.map((season, index) => (
              <TableRow key={index}>
                <TableCell>{season.season}</TableCell>
                <TableCell>{season.allocated}</TableCell>
                <TableCell>{season.distributed}</TableCell>
                <TableCell>{season.grants}</TableCell>
                <TableCell>{Object.values(season.impact).reduce((a, b) => a + b, 0)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Displaying Hat Data */}
      <Typography variant="subtitle1">Hat Data</Typography>
      <Typography variant="body2">Wearer: {grantShip4HatData.id}</Typography>
      <Typography variant="body2">Captain: {grantShip4HatData.captain?.id}</Typography>
      <Typography variant="body2">Crew Memeber Hat ID: {grantShip4HatData.crew?.id}</Typography>
      <Typography variant="body2">Green Card: {grantShip4HatData.cards?.greenCard ? 'Yes' : 'No'}</Typography>
    </div>
  );
};

export default GrantShip4Data;
