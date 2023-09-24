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
import TotalShipData from './data/ShipsData/totalShipData';
import RefereeDataComponent from './data/RefereeDataComponent';
import '@rainbow-me/rainbowkit/styles.css';
import { getDefaultWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import { mainnet, polygon, optimism, arbitrum, base, zora, sepolia, goerli, baseGoerli, optimismGoerli } from 'viem/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
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
              <ConnectButton />
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
                  <RefereeDataComponent />
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </ThemeProvider>
      </RainbowKitProvider>
    </WagmiConfig>
  );
};

export default App;
