import { Container, Row, Col } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { BsFillPeopleFill } from "react-icons/bs";
import { GoPlus } from "react-icons/go";

const HomeLsSecond = () => {
  return (
    <Container className="card__container leftSidebar">
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <Row>
                <Col>
                  <p>Recenti</p>
                  <p>
                    <BsFillPeopleFill /> React Js & ..
                  </p>
                </Col>
              </Row>
              <Row>
                <Col>
                  <p className="text-primary">Gruppi</p>
                  <div className="d-flex">
                    <BsFillPeopleFill className="me-1" />
                    <p>
                      <span>Bootstrap & ..</span>
                      <br />
                      <span>Vedi tutti</span>
                    </p>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col className="d-flex justify-content-between">
                  <p className="text-primary">Eventi</p>
                  <GoPlus className="fw-bold" />
                </Col>
              </Row>
              <Row>
                <Col>
                  <p className="text-primary">Hashtag seguiti</p>
                </Col>
              </Row>
              <Row className="border-top">
                <Col className="text-center mt-2 ">
                  <p className="m__bottom">Scopri di più</p>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default HomeLsSecond;
