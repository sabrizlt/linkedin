import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { FaPen } from "react-icons/fa";
import { useParams } from "react-router-dom";
import NewProfileImageComponent from "./NewProfileImageComponent";

const JumbotronComponent = ({ profile, exp }) => {
  const params = useParams();
  return (
    <Card id="jumbotron" >
      <Card.Img
        variant="top"
        src="https://placedog.net/900/400"
        id="profileCoverImg"
        alt="Profile cover"
        style={{ width: "100%" }}
      />
      <Card.Body className="position-relative" id="myNav">
        <div className="d-flex">
          <Row>
            <Col xs={3}>
              <img
                style={{ width: "100%" }}
                id="profilePicImg"
                className="rounded-circle mx-2"
                src={profile.image ? profile.image : profile.user.image}
                alt="Profile pic"
              />
            </Col>
          </Row>

          <Row className="justify-content-end">
            <Col className="text-end fs-3 iconWithHoverEffect ">
              <span className={params.id ? "d-none" : "rounded-circle p-3 position-absolute end-0 top-2"}>
                <NewProfileImageComponent profile={profile}></NewProfileImageComponent>
              </span>
            </Col>
          </Row>
        </div>
        <Row>
          <Col xs={9} className="justify-content-start">
            <h2 className="profileName mx-2 mb-0">
              {profile.name} {profile.surname}
            </h2>
            <span className="profileTitle mx-2">{profile.title}</span>
            <br />
            <span className="mx-2">
              {exp.length > 0 ? exp[exp.length - 1].role + " - " + exp[exp.length - 1].company : null}
            </span>
            <br />
            <small className="text-secondary mx-2">{profile.area}</small>
          </Col>
          <Col xs={3}>
            <img
              id="logoLastExp"
              src={exp.length > 0 ? exp[exp.length - 1].image : "https://placedog.net/500/280"}
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
          <Row className="profileBanner w-75 rounded py-3 mx-2" id="disponibile">
            <Col xs={9} className="ms-2 " >
              <b>Disponibile a lavorare</b>
              <br />
              Ruoli di Sviluppatore Web, Sviluppatore front-end, Sviluppatore back-end e Sviluppatore Javascript
              <br />
              <a href="#" className="text-primary">
                Mostra dettagli
              </a>
            </Col>
            <Col xs={2} className=" text-end iconWithHoverEffect">
              <span className={params.id ? "d-none" : "rounded-circle p-2 fs-6"}>
                <FaPen className=" ColorTextGrey " />
              </span>
            </Col>
          </Row>
        </div>
      </Card.Body>
    </Card>
  );
};

export default JumbotronComponent;
