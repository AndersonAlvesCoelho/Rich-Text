import React from "react";
import { Navbar, Nav, ButtonGroup } from "react-bootstrap";
import { FaGithub, FaInstagram, FaLinkedin, FaMedium } from "react-icons/fa";

import { AtaRuinao, ListarRequisito } from "../../helpers/modeloDoct.js";

import RichTextImg from "../../assets/images/rich-text.png";

function Header(props) {
  const { handleDadaModelo } = props;

  //Selecionado o modelo do documento
  const handleTypeModelo = (type) => {
    if (type === "AtaReuniao") {
      handleDadaModelo([
        AtaRuinao.doc,
        AtaRuinao.info,
        AtaRuinao.name,
        AtaRuinao.type,
      ]);
    } else if (type === "ListarRequisito") {
      handleDadaModelo([
        ListarRequisito.doc,
        ListarRequisito.info,
        ListarRequisito.name,
        ListarRequisito.type,
      ]);
    }
  };

  return (
    <Navbar collapseOnSelect expand="lg" bg="light">
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
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />

      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <ButtonGroup aria-label="Basic example">
            <Navbar.Brand
              target="_blank"
              href="https://github.com/AndersonAlvesCoelho"
            >
              <FaGithub />
            </Navbar.Brand>
            <Navbar.Brand
              target="_blank"
              href="https://www.linkedin.com/in/anderson-alves-7b5587133/"
            >
              <FaLinkedin />
            </Navbar.Brand>
            <Navbar.Brand
              target="_blank"
              href="https://www.instagram.com/_anderson_alves/"
            >
              <FaMedium />
            </Navbar.Brand>
            <Navbar.Brand
              target="_blank"
              href="https://medium.com/@a0a0coelho0"
            >
              <FaInstagram />
            </Navbar.Brand>
          </ButtonGroup>
        </Nav>

        <Nav>
          <Navbar.Text>Modelos: </Navbar.Text>
          <Nav.Link
            onClick={() => handleTypeModelo("AtaReuniao")}
            className="text-dark"
          >
            Ata de reunião
          </Nav.Link>
          <Nav.Link
            onClick={() => handleTypeModelo("ListarRequisito")}
            className="text-dark"
          >
            Coleta Requisito
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>

    // </Navbar>
  );
}

export default Header;
