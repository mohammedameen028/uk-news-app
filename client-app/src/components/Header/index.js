import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import {
  AppBar, Button, IconButton, Typography, Toolbar,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingBottom: '10px',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    paddingLeft: '80px',
  },
}));

//Reusable Header component
const Header = () => {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar style={{ background: '#5ea3efad', height: '75px' }}>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          United Kingdom News App
        </Typography>
        <Link to="/display" style={{ backgroundColor: 'aliceblue' }}>
          <Button variant="outlined">Latest News</Button>
        </Link>
        <Link to="/search" style={{ marginLeft: '1em', backgroundColor: 'aliceblue' }}>
          <Button variant="outlined">Search</Button>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
