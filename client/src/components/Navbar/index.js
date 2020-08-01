import React from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

function Nav() {
  return (
    // <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    //   <a className="navbar-brand" href="/">
    //     React Reading List<Button color="inherit">Login</Button>
    //   </a>
    // </nav>
  //   <AppBar position="relative">
  //   <Toolbar>
  //     {/* <CameraIcon className={classes.icon} /> */}
  //     <Typography variant="h6" color="inherit" noWrap>
  //       ActiveAt
  //     </Typography>
  //     <Button color="inherit">Login</Button>
  //     <Button color="inherit">SignUp</Button>
  //   </Toolbar>
  // </AppBar>

  <AppBar position="static">
  <Toolbar>
    <Typography variant="h6" color="inherit" Wrap>
    ActiveAt
    </Typography>
    <Button color="inherit">Login</Button>
    <Button color="inherit">SignUp</Button>
  </Toolbar>
</AppBar>


  );
}

export default Nav;
