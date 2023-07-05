import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Button, FormGroup, Input } from "reactstrap";

const SignUp = ({ signup }) => {
  const formRef = useRef();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    const data = Object.fromEntries(formData);
    const userInfo = {
      user: { email: data.email, password: data.password },
    };
    signup(userInfo);
    navigate("/");
    e.target.reset();
  };
  return (
    <>
      <div className="sign-up-title">
        <img src={require("../assets/Signup.gif")} alt="bubble" />
      </div>
      <div className="sign-up">
        <form inline="true" ref={formRef} onSubmit={handleSubmit}>
          <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
            <Input
              type="email"
              name="email"
              id="exampleEmail"
              placeholder="Enter your email"
              required
            />
          </FormGroup>
          <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
            <Input
              type="password"
              name="password"
              id="examplePassword"
              placeholder="Choose a password"
              required
            />
          </FormGroup>
          <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
            <Input
              type="password"
              name="confirmPassword"
              id="exampleConfirmPassword"
              placeholder="Confirm password"
              required
            />
          </FormGroup>
          <Button className="pixel-btn" type="submit">
            Submit
          </Button>
        </form>
      </div>
    </>
  );
};

export default SignUp;
