import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { BsPencil } from "react-icons/bs";
import { useSelector } from "react-redux";

const MyJumbotron = () => {
  const profile = useSelector((state) => {
    return state.data.profile;
  });
  const experience = useSelector((state) => {
    return state.data.experience;
  });
  return (
    <Card>
      <Card.Img
        variant="top"
        src="https://placedog.net/900/400"
        id="profileCoverImg"
        alt="Profile cover"
        style={{ width: "100%" }}
      />
      <Card.Body>
        <Row>
          <Col xs={3}>
            <img
              style={{ width: "100%" }}
              id="profilePicImg"
              className="rounded-circle"
              src="https://placedog.net/600/600"
              alt="Profile pic"
            />
          </Col>
        </Row>
        <Row className="mb-2">
          <Col className="text-end me-2 fs-3 iconWithHoverEffect">
            <span className="rounded-circle p-3 ">
              <BsPencil className="m-1" />
            </span>
          </Col>
        </Row>
        <Row>
          <Col xs={9} className="justify-content-start">
            <h2>
              {profile.name} {profile.surname}
            </h2>
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
