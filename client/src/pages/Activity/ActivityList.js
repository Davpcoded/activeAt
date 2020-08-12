import React, { useState, useEffect } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import Events from "../../components/Cards/index"
import Navbar from "../../components/Navbar/index"

const useStyles = makeStyles((theme) => ({
  main: {
    background: "linear-gradient(black, grey)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center", 
  }
  
}));


export default function Album() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />

      <main className={classes.main}>
        <Navbar />
        <Events />
        
      </main>

    </React.Fragment>
  );
}
