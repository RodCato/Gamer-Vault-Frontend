import React from "react";
import { Link } from "react-router-dom";
import { Navbar, NavbarBrand } from "reactstrap";

const Footer = () => {
  return (
    <div style={{ display: "block" }}>
      <Navbar className="footer" fixed="bottom">
        <NavbarBrand style={{ color: "rgb(26, 25, 25)" }}>
          &copy; <Link to="/">JVC</Link> | 2023{" "}
        </NavbarBrand>
      </Navbar>
    </div>
  );
};

export default Footer;
