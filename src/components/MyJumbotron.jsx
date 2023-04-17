import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { BsPencil } from "react-icons/bs";

const MyJumbotron = () => {
  return (
    <Card>
      <Card.Img
        variant="top"
        src="https://placedog.net/500"
        id="profileCoverImg"
        alt="Profile cover"
        style={{ width: "100%" }}
      />
      <Card.Body>
        <Row>
          <Col xs={3}>
            <img id="profilePicImg" className="rounded-circle" src="https://placedog.net/500/500" alt="Profile pic" />
          </Col>
        </Row>
        <Row>
          <Col className="text-end me-2 fs-3 iconWithHoverEffect">
            <span className="rounded-circle p-3 ">
              <BsPencil className="m-1" />
            </span>
          </Col>
        </Row>
        <Row>
          <Col xs={9} className="justify-content-start">
            <h2>NOME E COGNOME</h2>
            <span>posizione lavorativa</span>
            <br />
            <small>informazioni di contatto</small>
          </Col>
          <Col xs={3}>logo posizione lavorativa</Col>
        </Row>
        <Row className="my-2 cardBtns">
          <Col>
            <span className="btn btn-primary rounded-pill me-1">Disponibile per:</span>
            <span className="btn btn-outline-primary rounded-pill me-1">Aggiungi sezione del profilo</span>
            <span className="btn btn-outline-secondary rounded-pill">Altro</span>
          </Col>
        </Row>

        <div className="">
          <Row className="profileBanner w-75 rounded py-3 ">
            <Col xs={9} className="ms-2 ">
              <b>Disponibile a lavorare</b>
              <br />
              Ruoli di Sviluppatore Web, Sviluppatore front-end, Sviluppatore back-end e Sviluppatore Javascript
              <br />
              <a href="#">Mostra dettagli</a>
            </Col>
            <Col xs={2} className=" text-end iconWithHoverEffect">
              <span className="rounded-circle p-2 ">
                <BsPencil className="m-1" />
              </span>
            </Col>
          </Row>
        </div>
      </Card.Body>
    </Card>
  );
};
export default MyJumbotron;
