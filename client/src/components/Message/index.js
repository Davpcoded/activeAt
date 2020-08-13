import React from "react";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import ButtonGroup from "@material-ui/core/ButtonGroup";

const styles = {
  main: {
    color: "#fff",
    fontSize: 64,
    fontWeight: "bold",
  },
  letter: {
    //background: "black",
    margin: 30,
  },
  letter2: {
    //background: "black"
  },
};

const Jumbo = () => {
  return (
    <Container align="center" style={Object.assign({}, styles.main)}>
      <Grid>
        <div style={Object.assign({}, styles.letter)} align="center">
          Don't just sit there! Join an event! Get Active@
        </div>
      </Grid>
    </Container>
  );
};

export default Jumbo;
