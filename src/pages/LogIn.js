import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Button, FormGroup, Input } from "reactstrap";

const LogIn = ({ login }) => {
  const formRef = useRef();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    const data = Object.fromEntries(formData);
    const userInfo = {
      user: { email: data.email, password: data.password },
    };
    login(userInfo);
    navigate("/");
    e.target.reset();
  };

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
        <form inline="true" ref={formRef} onSubmit={handleSubmit}>
          <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
            <Input
              type="email"
              name="email"
              id="exampleEmail"
              placeholder="supermariobros@pipeville.com"
              required
            />
          </FormGroup>
          <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
            <Input
              type="password"
              name="password"
              id="examplePassword"
              placeholder="PeachyDaisy123"
              required
            />
          </FormGroup>
          <Button className="pixel-btn" type="submit" value="login">
            Submit
          </Button>
        </form>
      </div>
    </>
  );
};

export default LogIn;
