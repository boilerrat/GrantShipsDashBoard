import React, { useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Switch from '@mui/material/Switch';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { createMyTheme } from './theme';
import GrantShip1Data from './data/ShipsData/GrantShip1Data';
import GrantShip2Data from './data/ShipsData/GrantShip2Data';
import GrantShip3Data from './data/ShipsData/GrantShip3Data';
import GrantShip4Data from './data/ShipsData/GrantShip4Data';
import RefData from './data/ShipsData/refData';
import TotalShipData from './data/ShipsData/totalShipData';

const App = () => {
  const [darkMode, setDarkMode] = useState(true); // Default to dark mode
  const theme = createMyTheme(darkMode);

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static">
        <Toolbar>
          <Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
          {/* Wallet connection button will go here */}
        </Toolbar>
      </AppBar>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper>
              <TotalShipData />
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper>
              <GrantShip1Data />
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper>
              <GrantShip2Data />
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper>
              <GrantShip3Data />
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper>
              <GrantShip4Data />
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper>
              <RefData />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
};

export default App;
