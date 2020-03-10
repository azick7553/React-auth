import React from "react";

import { Form, Button, InputGroup, FormControl } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./loginForm.css";
import { User, Key } from "react-feather";

class LoginForm extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errorMessage: null
    };
    this.inputChangeHandler = e => {
      e.preventDefault();
      this.setState({ [e.target.id]: e.target.value });
    };
  }

  render() {
    const inputs = [
      {
        id: "email",
        placeholder: "Enter email",
        type: "email",
        divClassName: "col-md-3",
        inputGroupAddon: "loginInput-addon",
        inputIcon: <User color="white" />,
        onChange: this.inputChangeHandler,
        required: "required",
        ariaLabel: "Email"
      },
      {
        id: "password",
        placeholder: "Enter password",
        type: "password",
        divClassName: "col-md-3",
        inputGroupAddon: "password-addon",
        inputIcon: <User color="white" />,
        onChange: this.inputChangeHandler,
        required: "required",
        ariaLabel: "Password"
      }
    ];
    return (
      <div className="container">
        <div className="Absolute-Center is-Responsive">
          <Form onSubmit={event => this.props.handleSubmit(event, this.state)}>
            {inputs.map(input => (
              <InputGroup key={input.id} className="mb-3">
                <InputGroup.Prepend>
                  <InputGroup.Text
                    style={{ backgroundColor: "black" }}
                    id={input.inputGroupAddon}
                  >
                    {input.inputIcon}
                  </InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                  id={input.id}
                  name={input.id}
                  type={input.type}
                  placeholder={input.placeholder}
                  aria-label={input.ariaLabel}
                  aria-describedby={input.inputGroupAddon}
                  onChange={input.onChange}
                />
              </InputGroup>
            ))}
            <Button type="submit" style={{ float: "right" }} variant="dark">
              Log in
            </Button>
          </Form>
        </div>
      </div>
    );
  }
}
export default LoginForm;
