import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Home } from "./home";
import { Login } from "./loginPage";
import { Registration } from "./registrationPage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Navbar } from "./navbar";
const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/registration" component={Registration} />
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
