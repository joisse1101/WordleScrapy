import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Menu from './common/menu'

import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { lightTheme, darkTheme } from './common/theme';
import Theme from './common/theme';

function App() {
  return (
    <ThemeProvider theme={Theme()}>
    <CssBaseline/>
      <Box sx={{
        display: 'flex',
        justifyContent: 'space-between',
        p: 1,
        m: 1,
        borderRadius: 1,

        bgcolor: 'background.default',
        color: 'text.primary'
      }}>
        <Menu />
        <Typography variant="h4" component="h1">
          Wordle - the other one
        </Typography>
      </Box>
    </ThemeProvider>
  );
}

export default App;
