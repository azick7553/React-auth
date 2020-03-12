import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./Pages/homepage/homepage.component";
import Auth from "./components/Auth/auth.component";
import { Transactions } from "./components/transaction/transaction.component";

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/Login" component={Auth} />
        <Route exact path="/Transactions" component={Transactions} />
      </Switch>
    );
  }
}

export default App;
