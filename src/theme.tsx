import { createTheme } from '@mui/material/styles';

// Function to create a theme based on the mode
export const createMyTheme = (darkMode: boolean) => {
  return createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
    },
    // Add any other theme customization here
  });
};
