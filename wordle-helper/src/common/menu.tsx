import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import MenuIcon from '@mui/icons-material/Menu';
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';
import ExtensionIcon from '@mui/icons-material/Extension';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import LightbulbIcon from '@mui/icons-material/Lightbulb';

export default function Menu() {
  const [state, setState] = React.useState({ left: false });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem disablePadding><ListItemButton component="a" href="https://www.nytimes.com/games/wordle/index.html">
          <ListItemIcon><VideogameAssetIcon /></ListItemIcon>
          <ListItemText primary="The Real Game" />
        </ListItemButton></ListItem>
        <ListItem disablePadding><ListItemButton>
          <ListItemIcon><ExtensionIcon /></ListItemIcon>
          <ListItemText primary="The Game" />
        </ListItemButton></ListItem>
        <ListItem disablePadding><ListItemButton>
          <ListItemIcon><FitnessCenterIcon /></ListItemIcon>
          <ListItemText primary="Solver: Brute Algorithm" />
        </ListItemButton></ListItem>
        <ListItem disablePadding><ListItemButton>
          <ListItemIcon><LightbulbIcon /></ListItemIcon>
          <ListItemText primary="Solver: Information Theory Algorithm" />
        </ListItemButton></ListItem>
        <ListItem disablePadding><ListItemButton>
          <ListItemIcon><MenuBookIcon /></ListItemIcon>
          <ListItemText primary="Dictionary" />
        </ListItemButton></ListItem>
      </List>
      <Divider />
    </Box>
  );

  return (
    <div>
      <React.Fragment key={'menu'}>
        <Button onClick={toggleDrawer('left', true)}><MenuIcon /></Button>
        <Drawer
          anchor={'left'}
          open={state['left']}
          onClose={toggleDrawer('left', false)}
        >
          {list('left')}
        </Drawer>
      </React.Fragment>
    </div>
  );
}
