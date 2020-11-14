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
  Card,
  Form,
  Spinner,
} from "react-bootstrap";

import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

import Header from "./components/header";

import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App(props) {
  const [dataText, setDataText] = useState([]);
  const [docText, setDocText] = useState(" ");
  const [msg, setMsg] = useState(false);
  const [erroName, setErroName] = useState(false);

  const [keyDocAtual, setKeyDocAtual] = useState();
  const [nomeDocAtual, setNomeDocAtual] = useState();

  const ordena = Object.keys(localStorage).sort(function compararNumeros(a, b) {
    return a - b;
  });

  const popover = (
    <Popover id="popover-basic">
      <Popover.Title as="h3">
        {dataText.length !== 0 && dataText[2]}
      </Popover.Title>
      <Popover.Content>{dataText.length !== 0 && dataText[1]}</Popover.Content>
    </Popover>
  );

  const InfoModelo = () => (
    <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
      <Button variant="info">
        {dataText.length !== 0 && "Informação sobre: " + dataText[2]}
      </Button>
    </OverlayTrigger>
  );

  //Cadastrando ou editando documento
  const handleSubmit = (e) => {
    e.preventDefault();

    const nome = e.target.elements.name.value.trim();
    const text = docText;

    if (Object.keys(localStorage).length !== 0) {
      //atualizando um documento
      if (localStorage.getItem(keyDocAtual)) {
        localStorage.setItem(keyDocAtual, JSON.stringify({ nome, text }));
        setKeyDocAtual(keyDocAtual);

        //cadastrando um novo documento
      } else {
        //verifica se ja tem o documento com esse nome
        const aux = Object.keys(localStorage).filter((i) => {
          return nome === JSON.parse(localStorage.getItem(i)).nome;
        });

        if (nome !== JSON.parse(localStorage.getItem(aux)).nome) {
          const newKey = parseInt(ordena[ordena.length - 1]) + 1;
          localStorage.setItem(newKey, JSON.stringify({ nome, text }));
          setKeyDocAtual(newKey);
        } else {
          setErroName(true);
        }
      }
      //Cadastrando primeiro documento
    } else {
      localStorage.setItem(0, JSON.stringify({ nome, text }));
      setKeyDocAtual(0);
    }

    Sleep();
  };

  // Inserir o modelo selecionado
  function handleSetModelo(e) {
    setDocText(e[0]);
    setKeyDocAtual(Object.keys(localStorage).length);
    setNomeDocAtual(e[2]);
    setDataText(e);
  }

  // lista documentos salvos
  function DocListe() {
    const listItems = Object.keys(localStorage).map((key) => (
      <Button
        key={key}
        variant="outline-success"
        className="mb-1"
        onClick={() => getDocumento(key)}
      >
        {JSON.parse(localStorage.getItem(key)).nome}
      </Button>
    ));

    return listItems;
  }

  //get docmento selecionado
  function getDocumento(e) {
    setDataText([]);
    setKeyDocAtual(e);
    setNomeDocAtual(JSON.parse(localStorage.getItem(e)).nome);
    setDocText(JSON.parse(localStorage.getItem(e)).text);
  }

  //deletar documento
  function handleDelete(key) {
    localStorage.removeItem(key);
    handleClear();
    Sleep();
  }

  //limpar documento
  function handleClear() {
    setDocText(" ");
    setDataText([]);
    setNomeDocAtual("");
    setKeyDocAtual("");

    Sleep();
  }

  function Sleep() {
    setMsg(true);
    setTimeout(function () {
      setMsg(false);
    }, 1000);
  }

  return (
    <>
      <Header handleDadaModelo={(e) => handleSetModelo(e)} />

      <Container fluid>
        <main>
          <div className="message"></div>
          <Row className="mb-5 ">
            {Object.keys(localStorage).length !== 0 && (
              <Col xs lg="3" className="mb-1">
                <>
                  <Card style={{ width: "18rem" }}>
                    <Card.Header>Documentos salvos: </Card.Header>
                    <DocListe />
                  </Card>
                </>
              </Col>
            )}
            <Col>
              <Form onSubmit={handleSubmit}>
                <Form.Control type="hidden" name="key" value={keyDocAtual} />

                {docText && docText !== " " && (
                  <Row className="mb-2">
                    <Col className="col-auto mr-auto">
                      {dataText && dataText.length !== 0 ? (
                        <InfoModelo />
                      ) : null}
                    </Col>
                    <Col md={4} className="col-auto mt-1 text-dark">
                      <Form.Control
                        className="doc"
                        type="text"
                        name="name"
                        placeholder="Nome do documento"
                        required
                        value={nomeDocAtual}
                        onChange={(e) => {
                          setNomeDocAtual(e.target.value);
                          setErroName(false);
                        }}
                      />
                      {erroName && (<p className="text-danger">Esse nome de documento ja existe!</p>)}
                    </Col>
                    <Col className="col-auto mt-1">
                      <ButtonToolbar aria-label="Toolbar with button groups justify-content-end">
                        <ButtonGroup className="mr-2">
                          <Button type="submit" variant="success">
                            {msg ? (
                              <Spinner animation="border" size="sm" />
                            ) : (
                              "Salvar"
                            )}
                          </Button>
                        </ButtonGroup>

                        <ButtonGroup className="mr-2" a>
                          {keyDocAtual && (
                            <Button
                              type="button"
                              variant="danger"
                              onClick={() => handleDelete(keyDocAtual)}
                            >
                              {msg ? (
                                <Spinner animation="border" size="sm" />
                              ) : (
                                "Deletar"
                              )}
                            </Button>
                          )}
                        </ButtonGroup>

                        <ButtonGroup>
                          <Button variant="light" onClick={() => handleClear()}>
                            {msg ? (
                              <Spinner animation="border" size="sm" />
                            ) : (
                              "Limpar"
                            )}
                          </Button>
                        </ButtonGroup>
                      </ButtonToolbar>
                    </Col>
                  </Row>
                )}

                {/* <RechText
                  handleDadaDoc={(e) => setNewDoc(e)}
                  typeModelo={modelo && modelo[0]}
                /> */}

                <CKEditor
                  editor={ClassicEditor}
                  onChange={(event, editor) => {
                    setDocText(editor.getData());
                  }}
                  data={docText}
                />
              </Form>
            </Col>
          </Row>
        </main>
      </Container>
    </>
  );
}

export default App;
