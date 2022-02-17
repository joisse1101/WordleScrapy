import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import { ThemeProvider } from '@mui/material/styles';
import { lightTheme, darkTheme } from './common/theme';
import Theme from './common/theme';

function App() {
  return (
    <ThemeProvider theme={Theme()}>
      <Container maxWidth="sm">
        <Box sx={{ my: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Create React App example with TypeScript
        </Typography>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default App;
