import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

class SignIn extends React.Component {
  state = {
    email: "",
    password: "",
  };

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = this.state;

    const mockUser = {
      email: "supermariobros@pipeville.com",
      password: "PeachyDaisy123",
    };

    if (email === mockUser.email && password === mockUser.password) {
      console.log("Login successful!");
      this.setState({ email: "", password: "" });
    } else {
      console.log("User doesn't exist..");
    }
  };

  render() {
    const { email, password } = this.state;

    return (
      <>
        <div className="center">
          <h1>
            <span>Login</span>
            <span>Login</span>
            <span>Login</span>
          </h1>
        </div>
        <div className="login">
          <Form inline="true" onSubmit={this.handleSubmit}>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
              <Input
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="supermariobros@pipeville.com"
                value={email}
                onChange={this.handleInputChange}
              />
            </FormGroup>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
              <Input
                type="password"
                name="password"
                id="examplePassword"
                placeholder="PeachyDaisy123"
                value={password}
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

export default SignIn;
