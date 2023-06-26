import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

class SignUp extends React.Component {
  state = {
    email: "",
    password: "",
    confirmPassword: "",
  };

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { email, password, confirmPassword } = this.state;
    if (password === confirmPassword) {
      console.log("Form submitted:", email, password);
    } else {
      console.log("Passwords don't match");
    }
  };

  render() {
    const { email, password, confirmPassword } = this.state;

    return (
      <>
        <div className="sign-up-title">
          <img src={require("../assets/Signup.gif")} alt="bubble" />
        </div>
        <div className="sign-up">
          <Form inline="true" onSubmit={this.handleSubmit}>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
              <Input
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="Enter your email"
                value={email}
                onChange={this.handleInputChange}
              />
            </FormGroup>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
              <Input
                type="password"
                name="password"
                id="examplePassword"
                placeholder="Choose a password"
                value={password}
                onChange={this.handleInputChange}
              />
            </FormGroup>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
              <Input
                type="password"
                name="confirmPassword"
                id="exampleConfirmPassword"
                placeholder="Confirm password"
                value={confirmPassword}
                onChange={this.handleInputChange}
              />
            </FormGroup>
            <Button className="pixel-btn" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </>
    );
  }
}

export default SignUp;
