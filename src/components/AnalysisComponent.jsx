import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { AiFillEye } from "react-icons/ai";
import { BsFillPeopleFill } from "react-icons/bs";
import { VscGraph } from "react-icons/vsc";
import { GoSearch } from "react-icons/go";

const AnalysisComponent = () => {
  return (
    <Container className="border border-1 my-1 rounded bg-white mt-3 p-4" fluid>
      <Row className="mx-auto">
        <Col className="d-flex flex-column ms-2">
          <h2 className="text-start mb-3">Analisi</h2>
          <div className="d-flex align-items-start under__title">
            <AiFillEye className="fs-4" />
            <p>Solo per te</p>
          </div>
        </Col>
      </Row>
      <Row className="d-flex ms-1 my-2">
        <Col xs={12} md={4} className="d-flex">
          <BsFillPeopleFill className="fs-2" />
          <div className="ms-2 para__divs">
            <p className="text-start ">
              {" "}
              <span className="fw-bold">16 visualizzazioni del profilo</span>
              <br />
              Scopri chi ha visitato il tuo profilo
            </p>
          </div>
        </Col>

        <Col xs={12} md={4} className="d-flex">
          <VscGraph className="fs-2" />
          <div className="ms-2 para__divs">
            <p className="text-start">
              <span className="fw-bold">4 impressioni del post</span>
              <br />
              Scopri chi sta interagendo con i tuoi post
            </p>
          </div>
        </Col>

        <Col xs={12} md={4} className="d-flex">
          <GoSearch className="fs-2" />
          <div className="ms-2 para__divs">
            <p className="text-start">
              <span className="fw-bold">5 comparse nei motori di ricerca</span>
              <br />
              Vedi quante volte compari nei risultati di ricerca.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default AnalysisComponent;
