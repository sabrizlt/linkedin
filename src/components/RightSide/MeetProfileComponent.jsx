
import { FaQuestionCircle } from "react-icons/fa";
import { Container } from "react-bootstrap";
import { FaAngleDown, FaLinkedin } from "react-icons/fa";
import { BsFillPersonPlusFill } from "react-icons/bs";
import { Card, Button } from "react-bootstrap";
const MeetProfileComponent = ()=>{
    return(
        <Card className="fw-bold mt-3 "id="myNav">
        <Card.Body className="pb-0 fs-5" id="myNav">Persone che potresti conoscere</Card.Body>
        <Card.Body>
          <div className="d-flex align-item-center" id="myNav">
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
          <span className="d-flex justify-content-center w-75">
            <Button variant="outline-secondary" size="sm" className="altroButton rounded-pill px-3">
              <BsFillPersonPlusFill /> Collegati
            </Button>
          </span>
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
          <span className="d-flex justify-content-center w-75">
            <Button variant="outline-secondary" size="sm" className="altroButton rounded-pill px-3">
              <BsFillPersonPlusFill /> Collegati
            </Button>
          </span>
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
          <span className="d-flex justify-content-center w-75">
            <Button variant="outline-secondary" size="sm" className="altroButton rounded-pill px-3">
              <BsFillPersonPlusFill /> Collegati
            </Button>
          </span>
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
          <span className="d-flex justify-content-center w-75">
            <Button variant="outline-secondary" size="sm" className="altroButton rounded-pill px-3">
              <BsFillPersonPlusFill /> Collegati
            </Button>
          </span>
        </Card.Body>
      </Card>
    )
}

export default MeetProfileComponent