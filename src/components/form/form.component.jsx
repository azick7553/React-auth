import React from 'react';
import { Form, Button, InputGroup, FormControl } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export const ReactForm = props => {
  const inputs = props.inputs;
  return (
    <Form onSubmit={event => props.handleSubmit(event, props.state)}>
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
            required={input.required}
          />
        </InputGroup>
      ))}
      <Form.Text style={{ color: "red" }} className="text-danger text-center">
      {props.errorMessage}
      </Form.Text>
      <Button type="submit" style={{ float: "right" }} variant="dark">
        {props.submitButtonText}
      </Button>
    </Form>
  );
};