import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/Login/Login";
import Navbar from "./components/Navbar/index";
import SignUp from "./pages/SignUp/signUp";
//import Home from './components/Home/Home'
import Landing from "./pages/Landing/index";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Route exact path="/" component={Landing} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />
        {/* <Home /> */}
      </div>
    </Router>
  );
}

export default App;
