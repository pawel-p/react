import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./views/homeViews/HomeViews";
import About from "./views/aboutViews/AboutViews";
import Catalog from "./views/catalogViews/catalogViews";

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/catalog" component={Catalog} />
      <Route path="/about" component={About} />
    </Switch>
  </Router>
);

export default App;
