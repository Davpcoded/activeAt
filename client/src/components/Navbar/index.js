import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  typography: {
    fontSize: 20,
    fontFamily: "Baloo Tamma 2",
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>

      <AppBar position="static">
        <Toolbar>
          <Typography className={classes.title}>
            <Button
              href="/activity"
              className={classes.typography}
              color="inherit"
            >
              Active@
            </Button>
          </Typography>
          <Button href="/login" color="inherit">
            Login
          </Button>
          <Button href="/signup" color="inherit">
            Sign Up
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
