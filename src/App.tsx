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

const App = () => {
  const [darkMode, setDarkMode] = useState(true); // Default to dark mode
  const theme = createMyTheme(darkMode);

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Paper>
          {/* Top Section: Grant Ships Total */}
          <Typography variant="h4">Grant Ships Total</Typography>
          {/* Place your charts and stats here */}
        </Paper>
      </Grid>

      <Grid item xs={12} md={6}>
        <Paper>
          {/* Section 2: Grant Ship 1 */}
          <Typography variant="h5">Grant Ship 1</Typography>
          {/* Place your info, stats, and charts for Grant Ship 1 here */}
        </Paper>
      </Grid>

      <Grid item xs={12} md={6}>
        <Paper>
          {/* Section 3: Grant Ship 2 */}
          <Typography variant="h5">Grant Ship 2</Typography>
          {/* Place your info, stats, and charts for Grant Ship 2 here */}
        </Paper>
      </Grid>

      <Grid item xs={12} md={6}>
        <Paper>
          {/* Section 4: Grant Ship 3 */}
          <Typography variant="h5">Grant Ship 3</Typography>
          {/* Place your info, stats, and charts for Grant Ship 3 here */}
        </Paper>
      </Grid>

      <Grid item xs={12} md={6}>
        <Paper>
          {/* Section 5: Grant Ship 4 */}
          <Typography variant="h5">Grant Ship 4</Typography>
          {/* Place your info, stats, and charts for Grant Ship 4 here */}
        </Paper>
      </Grid>

      <Grid item xs={12}>
        <Paper>
          {/* Section 6: Additional Info/bottom nav bar */}
          <Typography variant="h5">Additional Info</Typography>
          {/* Place your additional info and bottom nav bar here */}
        </Paper>
      </Grid>
    </Grid>
  );
};

export default App;
