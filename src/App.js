import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./Pages/homepage/homepage.component";
import Auth from "./components/Auth/auth.component";
import { Redirect } from "react-router-dom";
import { Transactions } from "./components/transaction/transaction.component";
import Portfolio from './components/portfolio/portfolio.component';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: null
    };

    this.setUser = props => (()=>
        {},this.setState({ user: props }));
  }
  componentWillMount() {
    //console.log('test')
    if (localStorage.getItem("currentUserToken")) {
      //console.log(localStorage.getItem('currentUserToken'))

      fetch("http://localhost:3000/auth", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("currentUserToken")}`
        }
      })
        .then(res => res.json())
        .then(user => {
          this.setState({ user: user.user.data });
          localStorage.clear();
          localStorage.setItem("currentUserToken", user.jwt)
          console.log(this.state.user);
        })
        .catch(console.log);
      //return { Authorization: `Bearer ${currentUser.token}` };
    } else {
      // return <UserContainer onChangeSelectHendler={this.onChangeSelectHendler} handleSubmit={this.handleSubmit} handleChange={this.handleChange} editEventNull={this.editEventNull} updateEventHendler={this.updateEventHendler} ref={this.createEventFormElement} createEventFormState={this.state.createEventFormState} addEventHendler={this.addEventHendler} popUpFavoriteHendler={this.popUpFavoriteHendler} favorits={this.state.favorits} userEvents={this.state.userEvents} currentUser={this.state.currentUser} setCurrentUser={this.setCurrentUser} categories={this.state.categories} setUserEvents={this.setUserEvents} />
    }
  }
  render() {
    return (
      <Switch>
        <Route
          exact
          path="/"
          render={props =>
            !this.state.user ? (
              <Redirect to="/login" />
            ) : (
              <Portfolio user={this.state.user} {...props} />
            )
          }
        />
        {/* <Route exact path="/" user={this.state} setUser={this.setUser} component={HomePage} /> */}
        <Route
          exact
          path="/Transactions"
          render={props =>
            !this.state.user ? (
              <Redirect to="/login" />
            ) : (
              <Transactions {...props} />
            )
          }
        />
         <Route
          exact
          path="/Login"
          render={props =>
            !this.state.user ? (
              <Auth {...props} setUser={this.setUser}/>
            ) : (
              <Redirect to="/" />
            )
          }
        />
        } />
      </Switch>
    );
  }
}

export default App;
