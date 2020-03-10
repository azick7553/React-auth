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
        .then(response=> response.json())
        .then(data => {
          console.log(data);
          //   users.push(data);
          //   this.setState({ users: users });
        })
        .catch(alert);
    };
  }
  render() {
    return <LoginForm handleSubmit={this.handleSubmit} />;
  }
}
export default Auth;
