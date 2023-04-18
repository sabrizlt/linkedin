import image from "./src/image/hiring.png";
import { FaQuestionCircle } from "react-icons/fa";
import { Container } from "react-bootstrap";
import { FaAngleDown, FaLinkedin } from "react-icons/fa";
import { Card, Button } from "react-bootstrap";
import { BsFillPersonPlusFill } from "react-icons/bs";

const RightSideComponent = () => {
  return (
    <>
      {/*prima parte della lateral bar, */}
      <div id="lateral" className="border border-2 rounded-3 mb-3 p-2 bg-white ColorTextGrey">
        <div className="ms-2 d-flex justify-content-between me-2">
          <p>modifica il profilo pubblico e L'URL</p>
          <i>
            <FaQuestionCircle></FaQuestionCircle>
          </i>
        </div>
        <hr className="mx-2"></hr>
        <div className="ms-2 d-flex justify-content-between me-2 mb-3 ColorTextGrey">
          aggiungi il tuo profilo in un'altra lingua
          <i>
            <FaQuestionCircle></FaQuestionCircle>
          </i>
        </div>
      </div>
      {/*fine prima parte della lateral bar, */}

      {/*seconda parte della lateral bar,contenente un banner ! */}
      <div className="">
        <img src={image} alt="" className="rounded-3 img-fluid mb-3" />
      </div>
      {/*seconda parte della lateral bar,contenente un banner ! */}

      {/*terza parte della lateral bar,contenente una lista di persone che puoi conoscere ! */}
      <Card className="fw-bold mt-3">
        <Card.Body className="pb-0 fs-5">Persone che potresti conoscere</Card.Body>
        <Card.Body>
          <div className="d-flex align-item-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/219/219986.png"
              alt=""
              style={{ width: "50px", height: "50px" }}
            />
            <p className="ms-3">
              Luca Eliseo
              <br /> <span className="fw-lighter">Epicode Student</span>{" "}
            </p>
          </div>
          <Button variant="outline-secondary" size="sm" className="altroButton rounded-pill px-3">
            <BsFillPersonPlusFill /> Collegati
          </Button>
        </Card.Body>
        <hr className="m-0 mx-3" />
        <Card.Body>
          <div className="d-flex align-item-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/219/219986.png"
              alt=""
              style={{ width: "50px", height: "50px" }}
            />
            <p className="ms-3">
              Tiberiu Cujba <br /> <span className="fw-lighter">Epicode Student</span>{" "}
            </p>
          </div>
          <Button variant="outline-secondary" size="sm" className="altroButton rounded-pill px-3">
            <BsFillPersonPlusFill /> Collegati
          </Button>
        </Card.Body>
        <hr className="m-0 mx-3" />
        <Card.Body>
          <div className="d-flex align-item-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/219/219986.png"
              alt=""
              style={{ width: "50px", height: "50px" }}
            />
            <p className="ms-3">
              Sabri Zatnli
              <br /> <span className="fw-lighter">Epicode Student</span>{" "}
            </p>
          </div>
          <Button variant="outline-secondary" size="sm" className="altroButton rounded-pill px-3">
            <BsFillPersonPlusFill /> Collegati
          </Button>
        </Card.Body>
        <hr className="m-0 mx-3" />
        <Card.Body>
          <div className="d-flex align-item-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/219/219986.png"
              alt=""
              style={{ width: "50px", height: "50px" }}
            />
            <p className="ms-3">
              Emanuele
              <br /> <span className="fw-lighter">Epicode Student</span>{" "}
            </p>
          </div>
          <Button variant="outline-secondary" size="sm" className="altroButton rounded-pill px-3">
            <BsFillPersonPlusFill /> Collegati
          </Button>
        </Card.Body>
      </Card>

      <Card className="mt-3">
        <Card.Img
          src="https://media.licdn.com/media/AAYQAgTPAAgAAQAAAAAAADVuOvKzTF-3RD6j-qFPqhubBQ.png"
          alt="Card image"
        />
      </Card>

      {/*fine terza parte della lateral bar,contenente una lista di persone che puoi conoscere ! */}

      {/*inzio 4 parte della lateral bar,contenente una lista di corsi da poter seguire! */}

      <div>
        <Container className="border border-2 rounded-3 mt-3 p-0 bg-white">
          <div className="px-2 mt-2 ">
            <p className="mb-0 d-flex align-items-center">
              <FaLinkedin className="Linkedin" />
              Learning
            </p>
            <p>Aggiungi nuove competenze con questi corsi, gratuiti per 24 ore</p>
          </div>

          <div className="d-flex p-2 ">
            <div>
              <img src="https://medusajs.com/images/video-game-cover-min.jpg" alt="" width={100} />
            </div>
            <div className="ms-2">
              <p>Formazione essenziale su javascript</p>
            </div>
          </div>
          <div className="p-0">
            <button className="v-altro bg-white btn mx-0 rounded-0">
              Visualizza altro
              <FaAngleDown />
            </button>
          </div>
        </Container>
      </div>
      {/*fine 4 parte della lateral bar,contenente una lista di corsi da poter seguire! */}

      {/*inzio 5 parte della lateral bar,contenente la stesso banner al punto 2* */}
      <div className="my-3 sticky-top">
        <img src={image} alt="" className="rounded-3 img-fluid" />
      </div>
    </>
  );
};

export default RightSideComponent;
