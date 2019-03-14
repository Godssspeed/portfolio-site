import React from "react";

import { Switch, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Projects from "./components/Projects/Projects";

export default (
  <Switch>
    <Route exact path="/" component={Dashboard} />
    <Route path="/about" component={About} />
    <Route path="/contact" component={Contact} />
    <Route path="/projects" component={Projects} />
  </Switch>
);
