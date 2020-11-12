import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  OverlayTrigger,
  Button,
  Popover,
  Badge,
} from "react-bootstrap";

import Header from "./components/header";
import RechText from "./components/rechText";
// import BarraLateral from "./components/barraLateral";

import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App(props) {
  const [modelo, setModelo] = useState();

  const popover = (
    <Popover id="popover-basic">
      <Popover.Title as="h3">{modelo && modelo[2]}</Popover.Title>
      <Popover.Content>{modelo && modelo[1]}</Popover.Content>
    </Popover>
  );

  const InfoModelo = () => (
    <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
      <Button variant="success">
        {modelo && "Informação sobre: " + modelo[2]}
      </Button>
    </OverlayTrigger>
  );

  return (
    <>
      <Header handleDadaModelo={(e) => setModelo(e)} />

      <Container>
        <main>
          <div className="message"></div>
          <Row className="mb-2 ">
            <Col>{modelo && modelo !== " " ? <InfoModelo /> : null}</Col>
            <p>
              Limpar documento:{" "}
              <Badge
                type="button"
                variant="secondary"
                onClick={() => setModelo(" ")}
              >
                clean
              </Badge>
            </p>
          </Row>
          <Row className="mb-5 ">
            <Col>
              <RechText typeModelo={modelo && modelo[0]} />
            </Col>
          </Row>
        </main>
      </Container>
    </>
  );
}

export default App;
