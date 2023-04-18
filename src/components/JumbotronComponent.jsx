import { useState, useEffect } from "react";
import { RiSendPlaneFill } from "react-icons/ri";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BsPencil } from "react-icons/bs";
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
        <Row>
          <Col xs={3}>
            <img
              style={{ width: "100%" }}
              id="profilePicImg"
              className="rounded-circle"
              src={profile.image}
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
            <span>
              {profile.title} <br />
              {experience.length > 0
                ? experience[experience.length - 1].role + " - " + experience[experience.length - 1].company
                : null}
            </span>
            <br />
            <small>{profile.area}</small>
          </Col>
          <Col xs={3}>
            <img
              id="logoLastExp"
              src={
                experience.length > 0 ? experience[experience.length - 1].description : "https://placedog.net/500/280"
              }
              alt="logo"
            />
          </Col>
        </Row>
        <Row className="my-2 cardBtns">
          <Col>
            <Button variant="primary" size="sm" className="messaggioButton rounded-pill px-3">
              {" "}
              Disponibile per
            </Button>
            <Button variant="outline-dark" size="sm" className="altroButton rounded-pill px-3 ms-3">
              Altro
            </Button>
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

export default JumbotronComponent;
