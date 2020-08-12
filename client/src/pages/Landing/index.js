import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import Navbar from "../../components/Navbar/index";
import Swipes from "../../components/Swipes/index";
import Jumbo from "../../components/Jumbo/";
import Events from "../../components/Cards/index";

const useStyles = makeStyles((theme) => ({
  main: {
    backgroundImage: "url(https://source.unsplash.com/random)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
}));

export default function Album() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      {/* <Navbar /> */}
      <main className={classes.main}>
        <Swipes />
        <Jumbo />
        <Events />
      </main>
    </React.Fragment>
  );
}
