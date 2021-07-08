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
      <Navbar transparent />
      <div className="bg-white dark:bg-gray-800">
        <Navbar />
        <h1 mx-40>Welcome to App component</h1>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/registration">Registration</Link>
          </li>
        </ul>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/registration" component={Registration} />
        </Switch>
      </div>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
