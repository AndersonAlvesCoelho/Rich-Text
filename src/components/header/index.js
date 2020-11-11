import React from "react";
import { Navbar } from "react-bootstrap";
// import FaBars from 'react-icons/fa'

import RichTextImg from "../../assets/images/rich-text.png";

const Header = () => {
  return (
    <Navbar bg="light">
      <Navbar.Brand href="#">
        <img
          alt="Rich Text"
          src={RichTextImg}
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{" "}
        Rich Text
      </Navbar.Brand>
    </Navbar>
  );
};

export default Header;
