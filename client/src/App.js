import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import Navbar from "./components/Navbar/index";
import SignUp from "./pages/SignUp/signUp";
import Landing from "./pages/Landing/index";
import EventCreation from './pages/EventCreation/EventCreation'
import Activitylist from "./pages/Activity/ActivityList"
import AvailableEvents from "./pages/AvailableEvents/AvailableEvents";
import Footer from './components/Footer/index';

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Landing} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/activity" component={Activitylist} />
        <Route exact path="/eventCreation" component={EventCreation} />
        <Route exact path="/event" component={AvailableEvents} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
