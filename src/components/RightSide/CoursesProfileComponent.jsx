import { FaQuestionCircle } from "react-icons/fa";
import { Container } from "react-bootstrap";
import { FaAngleDown, FaLinkedin } from "react-icons/fa";
import { BsFillPersonPlusFill } from "react-icons/bs";
import { Card, Button } from "react-bootstrap";
const CoursesProfileComponent = ()=>{
    return(
        <div>
        <Container className="border border-2 rounded-3 mt-3 p-0 bg-white " >
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
    )
}

export default CoursesProfileComponent