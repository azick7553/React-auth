import React from "react";

import LoginForm from "../LoginForm/loginForm.component";

class Auth extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errorMessage: null
    };

    this.handleSubmit = (event, data) => {
      event.preventDefault();
      const { email, password } = data;
      fetch("http://localhost:3000/login", {
        method: "POST",
        body: JSON.stringify({
          email: email,
          password: password
        }),
        headers: { "content-type": "application/json" }
      })
        .then(response => response.json())
        .then(data => {
          const { error } = data;
          if (error) {
            this.setState({
              errorMessage: error,
              email: email,
              password: password
            });
          } else {
            const { history } = this.props;
            const { user, jwt } = data;
            localStorage.setItem("currentUserToken", jwt);
            this.props.setUser(user.data);
            history.push("/");
          }
          //   users.push(data);
          //   this.setState({ users: users });
        })
        .catch(alert);
    };
  }
  render() {
    return <LoginForm errorMessage={this.state.errorMessage} handleSubmit={this.handleSubmit} submitButtonText={"Log In"}/>;
  }
}
export default Auth;
