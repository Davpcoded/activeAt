import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/Login/Login";
import Navbar from "./components/Navbar/index";

function App() {
    return (
        <Router>
            <div>
                <Navbar />
                <Switch>
                    <Route exact path="/login" component={Login} />
                </Switch>
            </div>
        </Router>
    )
}

export default App;