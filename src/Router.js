import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./App";
import ContactMe from "./components/ContactMe";
import Resume from "./components/Resume";
import AboutMe from "./components/AboutMe";

class Router extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={App} />
            <Route path="/#contact" component={ContactMe} />
            <Route path="/#resume" component={Resume} />
            <Route path="/#about" component={AboutMe} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default Router;
