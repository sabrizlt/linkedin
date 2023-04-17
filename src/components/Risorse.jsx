import { Container, Row, Col } from "react-bootstrap";
import { AiFillEye } from "react-icons/ai";
import { FaSatelliteDish } from "react-icons/fa";
import Badge from "react-bootstrap/Badge";
import { BsFillPeopleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";

const Risorse = () => {
  return (
    <Container className="border border-1 my-1" fluid>
      <Container className="border-bottom border-1">
        <Row>
          <Col className="d-flex flex-column ms-2">
            <h2 className="text-start ">Risorse</h2>
            <div className="d-flex align-items-start">
              <AiFillEye className="fs-4" />
              <p>Solo per te</p>
            </div>
          </Col>
        </Row>
        <Row className="border-bottom border-1">
          <Col className="d-flex">
            <FaSatelliteDish className="fs-2 me-2" />
            <p>
              <span className="fw-bold">
                Modalità creazione dei contenuti{" "}
                <Badge bg="secondary">No</Badge>
              </span>
              <br />
              Fatti scoprire, metti in risalto i contenuti sul tuo profilo e
              accedi agli strumenti di creazione
            </p>
          </Col>
        </Row>
        <Row>
          <Col className="d-flex">
            <BsFillPeopleFill className="fs-2 me-2" />
            <p>
              <span className="fw-bold">La mia rete</span>
              <br />
              Salva e gestisci i tuoi collegamenti e interessi
            </p>
          </Col>
        </Row>
      </Container>

      <Row>
        <Col className="text-center fw-bold">
          <a className="text-dark text-decoration-none" href="#">
            Mostra tutte le risorse (5) <BsArrowRight />
          </a>
        </Col>
      </Row>
    </Container>
  );
};

export default Risorse;
