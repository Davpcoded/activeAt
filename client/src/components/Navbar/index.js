import React from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

function Nav() {
  return (

<AppBar position="static">
  <Toolbar>
    <Typography variant="h6" color="inherit" wrap='true'>
    ActiveAt
    </Typography>
    <Button href="/login" color="inherit">Login</Button>
    <Button href="/signup" color="inherit">SignUp</Button>
    <Button href="/eventCreation" color="inherit">Create Event</Button>
    <Button href="/event" color="inherit">Events</Button>
  </Toolbar>
</AppBar>

  );
}

export default Nav;
