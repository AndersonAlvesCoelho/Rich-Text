import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  OverlayTrigger,
  Button,
  Popover,
  ButtonToolbar,
  ButtonGroup,
  Accordion,
  Card,
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
      <Button variant="info">
        {modelo && "Informação sobre: " + modelo[2]}
      </Button>
    </OverlayTrigger>
  );

  return (
    <>
      <Header handleDadaModelo={(e) => setModelo(e)} />

      <Container fluid>
        <main>
          <div className="message"></div>

          <Row className="mb-5 ">
            <Col xs lg="3" className="mb-2">
              <Accordion defaultActiveKey="0">
                <Card>
                  <Card.Header> Documentos salvos </Card.Header>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </Col>
            <Col>
              <Row className="mb-2">
                <Col className="col-auto mr-auto">
                  {modelo && modelo !== " " ? <InfoModelo /> : null}
                </Col>
                <Col className="col-auto">
                  <ButtonToolbar aria-label="Toolbar with button groups justify-content-end">
                    <ButtonGroup className="mr-2" aria-label="Second group">
                      <Button variant="success">Salvar</Button>
                    </ButtonGroup>
                    <ButtonGroup aria-label="Third group">
                      <Button variant="light" onClick={() => setModelo(" ")}>
                        Limpar
                      </Button>
                    </ButtonGroup>
                  </ButtonToolbar>
                </Col>
              </Row>
              <RechText typeModelo={modelo && modelo[0]} />
            </Col>
          </Row>
        </main>
      </Container>
    </>
  );
}

export default App;
