import { createTheme } from '@mui/material/styles';

// Function to create a theme based on the mode
export const createMyTheme = (darkMode: boolean) => {
  return createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      background: {
        // Set the background color for dark mode to a very dark grey
        default: darkMode ? '#00042a' : '#ffffff', // Replace '#121212' with your desired dark grey color
      },
    },
    // Add any other theme customization here
  });
};
