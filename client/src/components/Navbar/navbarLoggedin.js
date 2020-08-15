import React from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  toolbarButtons: {
    marginLeft: "auto",
    marginRight: -12
  },
  typography: {
    fontSize: 20,
    fontFamily:
      "Baloo Tamma 2",
  },
}));


function Nav() {
  const classes = useStyles();
  return (

<div className={classes.root}>
<AppBar position="static">
  <Toolbar >
  <Typography className={classes.title} >
    <Button href="/activity" className={classes.typography} color="inherit" size="large">Active@</Button>
    </Typography>
    <Button href="/eventCreation" color="inherit">Create Event</Button>
    <Button href="/event" color="inherit">Events</Button>
    <Button className={classes.toolbarButtons} color="inherit" >  </Button>
    <Button href="/login" color="inherit">Logout</Button>
  </Toolbar>
</AppBar>
</div>

  );
}

export default Nav;