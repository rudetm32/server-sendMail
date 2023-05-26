import * as React from 'react';
import {Link} from "react-router-dom"
import {AppBar} from '@mui/material';
import {Box} from '@mui/material';
import { Toolbar } from '@mui/material';
import {Typography} from '@mui/material';
import {IconButton} from '@mui/material';
import LinkIcon from '@mui/icons-material/Link';


export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky">
        <Toolbar variant="dense">
          <IconButton edge="start" color="secondary" aria-label="menu" sx={{ mr: 2 }}>
          <Link to="/notify" >
            <LinkIcon  fontSize="large"/>
          </Link>
          </IconButton>
          <Typography variant="h6" color="inherit" component="div">
            Zona admin
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
