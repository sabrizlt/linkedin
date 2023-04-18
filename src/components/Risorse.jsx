import { Container, Row, Col } from "react-bootstrap";
import { AiFillEye } from "react-icons/ai";
import { FaSatelliteDish } from "react-icons/fa";
import Badge from "react-bootstrap/Badge";
import { BsFillPeopleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";

const Risorse = () => {
  return (
    <Container className="border border-1 my-1 rounded bg-white mt-3 p-3" fluid>
      <Container>
        <Row>
          <Col className="d-flex flex-column ">
            <h2 className="text-start mt-2 mb-3">Risorse</h2>
            <div className="d-flex align-items-start under__title">
              <AiFillEye className="fs-5 me-2" />
              <p>Solo per te</p>
            </div>
          </Col>
        </Row>
        <Row className="border-bottom border-1 my-2">
          <Col className="d-flex  text-start">
            <FaSatelliteDish className="fs-2 me-2 " />
            <p>
              <span className="fw-bold mt-2">
                Modalità creazione dei contenuti{" "}
                <Badge className="ms-2" bg="secondary">
                  No
                </Badge>
              </span>
              <br />
              Fatti scoprire, metti in risalto i contenuti sul tuo profilo e accedi agli strumenti di creazione
            </p>
          </Col>
        </Row>
      </Container>

      <Row className="border-bottom border-1">
        <Col className="d-flex  to__align">
          <BsFillPeopleFill className="fs-2 me-2" />
          <p>
            <span className="fw-bold">La mia rete</span>
            <br />
            Salva e gestisci i tuoi collegamenti e interessi
          </p>
        </Col>
      </Row>

      <Row>
        <Col className="text-center fw-bold my-2">
          <a className="text-dark text-decoration-none mt-2" href="#">
            Mostra tutte le risorse (5) <BsArrowRight />
          </a>
        </Col>
      </Row>
    </Container>
  );
};

export default Risorse;
