import React from "react";
import { Navbar, NavbarBrand } from "reactstrap"


const Footer = () => {
  return (
    <div
      style={{
        display: "block",
      }}
    >
      <Navbar className="footer" fixed="bottom">
        <NavbarBrand href="/" style={{ color: "rgb(26, 25, 25)" }}>
          {" "}
          &copy; JVC | 2023{" "}
        </NavbarBrand>
      </Navbar>
    </div>
  );
};

export default Footer;
