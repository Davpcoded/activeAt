import React from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typogsraphy';
import Button from '@material-ui/core/Button';

function Nav() {
  return (

<AppBar position="static">
  <Toolbar>
    <Button href="/activity" color="inherit" size="large">Active@</Button>
    <Button href="/eventCreation" color="inherit">Create Event</Button>
    <Button href="/event" color="inherit">Events</Button>
  </Toolbar>
</AppBar>

  );
}

export default Nav;