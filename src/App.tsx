// React imports
import React, { useState } from 'react';

// Material-UI imports
import { ThemeProvider } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Switch from '@mui/material/Switch';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';


// Custom component and theme imports
import { createMyTheme } from './theme';
import GrantShip1Data from './data/ShipsData/GrantShip1Data';
import GrantShip2Data from './data/ShipsData/GrantShip2Data';
import GrantShip3Data from './data/ShipsData/GrantShip3Data';
import GrantShip4Data from './data/ShipsData/GrantShip4Data';
import TotalShipData from './data/ShipsData/totalShipData';
import RefereeDataComponent from './data/RefereeDataComponent';

// Charts

import SeasonBarChartGS1 from './data/charts/GS1Charts/SeasonBarChart';
import ErrorBoundary from './components/errorBoundry';

// RainbowKit and Wagmi imports
import '@rainbow-me/rainbowkit/styles.css';
import { getDefaultWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';

// Chain and provider imports
import { mainnet, polygon, optimism, arbitrum, base, zora, sepolia, goerli, baseGoerli, optimismGoerli } from 'viem/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';

// RainbowKit UI components
import { ConnectButton } from '@rainbow-me/rainbowkit';


  // Wallet connection setup
  const { chains, publicClient } = configureChains(
    [mainnet, polygon, optimism, arbitrum, base, zora, sepolia, goerli, baseGoerli, optimismGoerli],
    [
      alchemyProvider({ apiKey: import.meta.env.VITE_ALCHEMY_ID }),
      publicProvider()
    ]
  );

  const { connectors } = getDefaultWallets({
    appName: 'Dashboard',
    projectId: '42d4d2f61efab42ee68c5777f1ab5a85',
    chains
  });

  const wagmiConfig = createConfig({
    autoConnect: true,
    connectors,
    publicClient
  });

const App = () => {
  const [darkMode, setDarkMode] = useState(true); // Default to dark mode
  const theme = createMyTheme(darkMode);

  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={chains}>
        <ThemeProvider theme={theme}>
          <AppBar position="static">
            <Toolbar>
              <Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
              <Box flexGrow={1}></Box>
              <ConnectButton />
            </Toolbar>
          </AppBar>
          <Container style={{ maxWidth: '100%' }}>
            <Grid container spacing={3}>
              {/* Total Ship Data */}
              <Grid item xs={12} md={4}>
                <Paper sx={{ padding: 2, minHeight: '500px', marginTop: '20px' }}>
                  <TotalShipData />
                </Paper>
              </Grid>
              <Grid item xs={12} md={8}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Paper sx={{ padding: 2, minHeight: '225px', marginTop: '20px' }}>
                      {/* Totals Chart content will go here */}
                    </Paper>
                  </Grid>
                  <Grid item xs={12}>
                    <Paper sx={{ padding: 2, minHeight: '225px' }}>
                      {/* Another Totals Chart content will go here */}
                    </Paper>
                  </Grid>
                </Grid>
              </Grid>
              {/* Grant Ship 1 */}
              <Grid item xs={12} md={4}>
                <Paper sx={{ padding: 2, minHeight: '500px' }}>
                  <GrantShip1Data />
                </Paper>
              </Grid>
              <Grid item xs={12} md={8}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Paper sx={{ padding: 2, minHeight: '225px' }}>
                      {/* Grant Ship 1 Seasonal Charts */}
                      <ErrorBoundary>
                      <SeasonBarChartGS1 />
                      </ErrorBoundary>
                    </Paper>
                  </Grid>
                  <Grid item xs={12}>
                    <Paper sx={{ padding: 2, minHeight: '225px' }}>
                      {/* Grant Ship 1 Overall Charts */}
                    </Paper>
                  </Grid>
                </Grid>
              </Grid>
              {/* Grant Ship 2 */}
              <Grid item xs={12} md={4}>
                <Paper sx={{ padding: 2, minHeight: '500px' }}>
                  <GrantShip2Data />
                </Paper>
              </Grid>
              <Grid item xs={12} md={8}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Paper sx={{ padding: 2, minHeight: '225px' }}>
                      {/* Grant Ship 2 Seasonal Charts */}
                    </Paper>
                  </Grid>
                  <Grid item xs={12}>
                    <Paper sx={{ padding: 2, minHeight: '225px' }}>
                      {/* Grant Ship 2 Overall Charts */}
                    </Paper>
                  </Grid>
                </Grid>
              </Grid>
              {/* Grant Ship 3 */}
              <Grid item xs={12} md={4}>
                <Paper sx={{ padding: 2, minHeight: '500px' }}>
                  <GrantShip3Data />
                </Paper>
              </Grid>
              <Grid item xs={12} md={8}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Paper sx={{ padding: 2, minHeight: '225px' }}>
                      {/* Grant Ship 3 Seasonal Charts */}
                    </Paper>
                  </Grid>
                  <Grid item xs={12}>
                    <Paper sx={{ padding: 2, minHeight: '225px' }}>
                      {/* Grant Ship 3 Overall Charts */}
                    </Paper>
                  </Grid>
                </Grid>
              </Grid>
              {/* Grant Ship 4 */}
              <Grid item xs={12} md={4}>
                <Paper sx={{ padding: 2, minHeight: '500px' }}>
                  <GrantShip4Data />
                </Paper>
              </Grid>
              <Grid item xs={12} md={8}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Paper sx={{ padding: 2, minHeight: '225px' }}>
                      {/* Grant Ship 4 Seasonal Charts */}
                    </Paper>
                  </Grid>
                  <Grid item xs={12}>
                    <Paper sx={{ padding: 2, minHeight: '225px' }}>
                      {/* Grant Ship 4 Overall Charts */}
                    </Paper>
                  </Grid>
                </Grid>
              </Grid>
              {/* Referee Data */}
              <Grid item xs={12} md={4}>
                <Paper sx={{ padding: 2, minHeight: '500px' }}>
                  <RefereeDataComponent />
                </Paper>
              </Grid>
              <Grid item xs={12} md={8}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Paper sx={{ padding: 2, minHeight: '225px' }}>
                      {/* Referee Charts content will go here */}
                    </Paper>
                  </Grid>
                  <Grid item xs={12}>
                    <Paper sx={{ padding: 2, minHeight: '225px' }}>
                      {/* Another Referee Charts content will go here */}
                    </Paper>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Container>
        </ThemeProvider>
      </RainbowKitProvider>
    </WagmiConfig>
  );
};

export default App;

