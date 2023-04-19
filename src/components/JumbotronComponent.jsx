import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { FaPen } from "react-icons/fa";
import { useSelector } from "react-redux";

const JumbotronComponent = () => {
  const profile = useSelector((state) => {
    return state.data.profile;
  });
  const experience = useSelector((state) => {
    return state.data.exp;
  });
  return (
    <Card id="jumbotron">
      <Card.Img
        variant="top"
        src="https://placedog.net/900/400"
        id="profileCoverImg"
        alt="Profile cover"
        style={{ width: "100%" }}
      />
      <Card.Body>
      <div className="d-flex">
        <Row>
          
          <Col xs={3}>
            <img
              style={{ width: "100%" }}
              id="profilePicImg"
              className="rounded-circle mx-2"
              src={profile.image}
              alt="Profile pic"
            />
          </Col>
        </Row>
        <Row className="">
          <Col className="text-end fs-3 iconWithHoverEffect">
            <span className="rounded-circle p-3 ">
            <FaPen className="fs-5 ColorTextGrey " />
            </span>
          </Col>
          
        </Row>
        </div>
        <Row>
          <Col xs={9} className="justify-content-start">
            <h2 className="profileName mx-2 mb-0">
              {profile.name} {profile.surname}
            </h2>
            <span className="profileTitle mx-2">
              {profile.title} 
              </span>
              <br />
              <span className="mx-2">
              {experience.length > 0
                ? experience[experience.length - 1].role + " - " + experience[experience.length - 1].company
                : null}
            </span>
            <br />
            <small className="text-secondary mx-2">{profile.area}</small>
          </Col>
          <Col xs={3}>
            <img
              id="logoLastExp"
              src={experience.length > 0 ? experience[experience.length - 1].image : "https://placedog.net/500/280"}
              alt="logo"
            />
          </Col>
        </Row>
        <Row className="my-2 cardBtns">
          <Col>
            <Button variant="primary" size="sm" className="messaggioButton rounded-pill px-3 mx-2 Profile mb-3">
              {" "}
              Disponibile per
            </Button>
            <Button variant="outline-primary" size="sm" className="messaggioButton rounded-pill px-3 mx-1 Profile mb-3">
              {" "}
              Aggiungi sezione del profilo

            </Button>
            <Button variant="outline-secondary" size="sm" className="altroButton rounded-pill px-3 mx-1 Profile mb-3">
              Altro
            </Button>
          </Col>
        </Row>

        <div className="">
          <Row className="profileBanner w-75 rounded py-3 mx-2">
            <Col xs={9} className="ms-2 ">
              <b>Disponibile a lavorare</b>
              <br />
              Ruoli di Sviluppatore Web, Sviluppatore front-end, Sviluppatore back-end e Sviluppatore Javascript
              <br />
              <a href="#" className="text-primary">Mostra dettagli</a>
            </Col>
            <Col xs={2} className=" text-end iconWithHoverEffect">
              <span className="rounded-circle p-2 ">
              <FaPen className="fs-6 ColorTextGrey " />
              </span>
            </Col>
          </Row>
        </div>
      </Card.Body>
    </Card>
  );
};

export default JumbotronComponent;
