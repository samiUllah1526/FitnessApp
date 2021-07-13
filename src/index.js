import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Home } from "./components/homePage";
import { Login } from "./components/loginPage";
import { Registration } from "./components/registrationPage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Navbar } from "./components/navbar";
const App = () => {
  // const [token, setToken] = useState();
  // if (!token) {
  //   return <Login setToken={setToken} />;
  // }
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/registration" component={Registration} />
      </Switch>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
