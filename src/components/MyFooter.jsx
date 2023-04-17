import { Container, Row, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { AiTwotoneSetting, AiFillQuestionCircle, AiTwotoneSafetyCertificate } from "react-icons/ai";

function Footer() {
  const date = () => {
    let today = new Date();
    return today.getFullYear();
  };

  return (
    <Container className="w-100 pb-5" id="footer">
      <Row className="d-flex mt-5">
        <Col md={2} xs={6} className="text-md-start mb-3 mb-md-0 col-sm-6">
          {/* Prima colonna */}
          <div className="d-flex flex-column align-items-center justify-content-center justify-content-md-start">
            <div className="me-md-3 mb-3 mb-md-0">
              <ul className="list-unstyled text-md-start  ">
                <a href="">
                  <li className="mb-3">Informazioni</li>
                </a>
                <a href="">
                  <li className="mb-3">Linee guida della community</li>
                </a>
                <Form.Select aria-label="Default select example" className=" formPrivacy">
                  <option>Privacy e condizioni</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
                <a href="">
                  <li className="mb-3 mt-4">Sales Solutions</li>
                </a>{" "}
                <a href="">
                  <li className="mb-md-5">Centro sicurezza</li>
                </a>
              </ul>
            </div>
          </div>
        </Col>
        <Col md={2} xs={6} className=" text-md-start mb-3 mb-md-0 col-sm-6">
          {/* Seconda colonna */}
          <div className="d-flex flex-column align-items-center justify-content-center justify-content-md-start">
            <ul className="list-unstyled text-md-start">
              <a href="">
                <li className="mb-3">Accessibilità</li>
              </a>
              <a href="">
                <li className="mb-3">Carriera</li>
              </a>
              <a href="">
                <li className="mb-3">Opzioni per gli annunci pubblicitari</li>
              </a>
              <a href="">
                <li className="mb-md-3">Mobile</li>
              </a>
            </ul>
          </div>
        </Col>

        <Col md={2} xs={6} className=" text-md-start mb-3 mb-md-0 col-sm-6">
          {/* Terza colonna */}
          <div className="d-flex flex-column align-items-center justify-content-center justify-content-md-start">
            <ul className="list-unstyled text-md-start">
              <a href="">
                <li className="mb-3">Talent Solutions</li>
              </a>
              <a href="">
                <li className="mb-3">Soluzioni di marketing</li>
              </a>
              <a href="">
                <li className="mb-4">Pubblicità</li>
              </a>
              <a href="">
                <li>Piccole imprese</li>
              </a>
            </ul>
          </div>
        </Col>

        <Col md={2} xs={8} className="text-md-start mb-3 mb-md-0 mx-2 domande">
          <div className="d-flex flex-column align-items-center justify-content-center justify-content-md-start">
            <ul className="list-unstyled text-xs-start helpList">
              <li>
                <AiFillQuestionCircle />
                <a href="" className="fs-6">
                  Domande?
                </a>{" "}
              </li>
              <span style={{ whiteSpace: "nowrap" }}>Visita il nostro Centro assistenza.</span>
              <li>
                <AiTwotoneSetting />
                <a href="" className="fs-6">
                  Gestisci il tuo account e la tua privacy
                </a>{" "}
              </li>
              <span style={{ whiteSpace: "nowrap" }}>Vai alle impostazioni</span>
              <li>
                <AiTwotoneSafetyCertificate />
                <a href="" className="fs-6">
                  {" "}
                  Trasparenza sui contenuti consigliati
                </a>
              </li>
              <span style={{ whiteSpace: "nowrap" }}>Scopri di più sui contenuti consigliati.</span>
            </ul>
          </div>
        </Col>

        <Col md={3} className="text-md-start mb-3 mb-md-0">
          <div className="d-flex flex-column justify-content-center justify-content-md-start">
            <span>Seleziona lingua</span>
            <Form.Select aria-label="Default select example" className="formLanguage">
              <option>Italiano (Italiano)</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
          </div>
        </Col>
      </Row>
      <Row>
        <span className="copyright">LinkedIn Corporation &copy; {date()}</span>
      </Row>
    </Container>
  );
}

export default Footer;
