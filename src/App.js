import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import Header from "./components/header";
import RechText from "./components/rechText";

import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <>
      <Header />

      <Container fluid className="mt-2">
        <Row className="justify-content-md-center">
          <Col>1 of 3</Col>
          <Col md={6}>
            <RechText />
          </Col>
          <Col>3 of 3</Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
