import React, { useState, useEffect } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import Events from "../../components/Cards/index"
import Navbar from "../../components/Navbar/index"
import Message from "../../components/Message/index"
import Nav from "../../components/Navbar/navbarLoggedin"

const useStyles = makeStyles((theme) => ({
  main: {
    background: "linear-gradient(blue, white)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center", 
  }
  
}));

export default function AvailableEvents() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <main className={classes.main}>
        <Nav />
        <Message />
        <Events />
      </main>
    </React.Fragment>
  );
}
