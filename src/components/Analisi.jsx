import { Col, Container, Row } from "react-bootstrap";
import { AiFillEye } from "react-icons/ai";
import { BsFillPeopleFill } from "react-icons/bs";
import { VscGraph } from "react-icons/vsc";
import { GoSearch } from "react-icons/go";

const Analisi = () => {
  return (
    <Container className="border border-1 my-1" fluid>
      <Row className="mx-auto">
        <Col className="d-flex flex-column ms-2">
          <h2 className="text-start ">Analisi</h2>
          <div className="d-flex align-items-start">
            <AiFillEye className="fs-4" />
            <p>Solo per te</p>
          </div>
        </Col>
      </Row>
      <Row className="d-flex mx-auto ">
        <Col xs={12} md={4} className="d-flex">
          <BsFillPeopleFill className="fs-2" />
          <div className="ms-2 para__divs">
            <p className="fw-bold text-start ">
              {" "}
              16 visualizzazioni del profilo{" "}
            </p>
            <p className="text-start ">Scopri chi ha visitato il tuo profilo</p>
          </div>
        </Col>

        <Col xs={12} md={4} className="d-flex">
          <VscGraph className="fs-2" />
          <div className="ms-2 para__divs">
            <p className="fw-bold text-start">4 impressioni del post</p>
            <p className="text-start">
              Scopri chi sta interagendo con i tuoi post
            </p>
          </div>
        </Col>

        <Col xs={12} md={4} className="d-flex">
          <GoSearch className="fs-2" />
          <div className="ms-2 para__divs">
            <p className="fw-bold text-start">
              5 comparse nei motori di ricerca
            </p>
            <p className="text-start">
              Vedi quante volte compari nei risultati di ricerca.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Analisi;
