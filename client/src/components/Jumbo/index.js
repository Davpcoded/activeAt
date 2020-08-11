import React from "react";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Hiking from "../../assets/Adventure.jpg";
import ButtonGroup from "@material-ui/core/ButtonGroup"

const styles = {
  main: {
    padding: 30,
    minHeight: 100,
    color: "#fff",
    fontSize: 32,
    backgroundImage: `url(${Hiking})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
  button: {},
};

const Jumbo = () => {
  return (
    <Container align="center" style={Object.assign({}, styles.main)}>
      <Grid sm={6}>
        <div align="center">Active@</div>
        <div align="center">
          Active@ is the app that we are currently creating, we'll put something
          dope here.
        </div>
        </Grid>
        <Grid>
          <ButtonGroup size="large" variant="contained" aria-label="small outlined button group">
            <Button href="/login">Login</Button>
            <Button href="/signup">Sign Up</Button>
          </ButtonGroup>
      </Grid>
    </Container>
  );
};

export default Jumbo;
