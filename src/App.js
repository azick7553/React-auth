import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./Pages/homepage/homepage.component";
import Auth from "./components/Auth/auth.component";
import { Nav } from "./components/Nav/nav.component";

class App extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/Login" component={Auth} />
      </Switch>
    );
  }
}

export default App;
