import { Container, Row, Col } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { useSelector } from "react-redux";
import { BsSquareHalf, BsFillBookmarkFill } from "react-icons/bs";

const HomeRsFirst = () => {
  const profile = useSelector((state) => state.data.profile);
  const exp = useSelector((state) => state.data.exp);

  return (
    <Container className="card__container">
      <Row>
        <Col>
          <Card style={{ width: "100%" }}>
            <Row>
              <Col>
                <Card.Img
                  variant="top"
                  src=" https://placedog.net/150/100"
                  style={{ width: "100%" }}
                  className="prof__img"
                />
              </Col>
            </Row>
            <Card.Body>
              <Row>
                <Col xs={4} sm={3} md={6} className="mx-auto">
                  <img
                    style={{ width: "100%" }}
                    id="profilePicImg"
                    className="rounded-circle"
                    src={profile.image}
                    alt="Profile pic"
                  />
                </Col>
              </Row>
              <Row>
                <Col className="text-center">
                  <p className="fs-4">
                    {profile.name} {profile.surname}
                  </p>
                </Col>
              </Row>
              <Row>
                <Col className="text-center">
                  <p className="text-secondary">{profile.title}</p>
                </Col>
              </Row>
              <Row className="border-top">
                <Col className="d-flex justify-content-between mt-2">
                  <p className="">
                    <span className="text-secondary">Collegamenti</span>
                    <br />
                    <span className="fw-bold">Espandi la tua rete</span>
                  </p>
                  <p className="text-primary fw-bold">17</p>
                </Col>
              </Row>
              <Row className="border-top">
                <Col className="mt-2">
                  <p>
                    <span className="text-secondary">
                      Accedi a strumenti e informazioni in esclusiva
                    </span>
                    <br />
                    <a href="#" target="_blank">
                      <span className="text-dark text-decoration-underline">
                        <BsSquareHalf className="text-warning" /> Prova Premium
                        gratis
                      </span>
                    </a>
                  </p>
                </Col>
              </Row>
              <Row className="border-top">
                <Col className="mt-2">
                  <p className="m__bottom">
                    <BsFillBookmarkFill />I miei elementi{" "}
                  </p>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default HomeRsFirst;
