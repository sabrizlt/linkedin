import image from "./src/image/hiring.png";
import { FaQuestionCircle } from "react-icons/fa";
import { Container } from "react-bootstrap";
import { FaAngleDown, FaLinkedin } from "react-icons/fa";
import { Card, Button } from "react-bootstrap";
import { BsFillPersonPlusFill } from "react-icons/bs";
import ModifyProfileComponent from "./RightSide/ModifyProfileComponent";
import PosterProfileComponent from "./RightSide/PosterProfileComponent";
import MeetProfileComponent from "./RightSide/MeetProfileComponent";
import CoursesProfileComponent from "./RightSide/CoursesProfileComponent";
const RightSideComponent = () => {
  return (
    <>
      {/*prima parte della lateral bar, */}
    <ModifyProfileComponent/>
      {/*fine prima parte della lateral bar, */}

      {/*seconda parte della lateral bar,contenente un banner ! */}
      <div className="">
        <img src="https://media.licdn.com/media/AAYQAgTPAAgAAQAAAAAAADVuOvKzTF-3RD6j-qFPqhubBQ.png" alt="" className="rounded-3 img-fluid mb-3 w-100" />
      </div>
      {/*seconda parte della lateral bar,contenente un banner ! */}

      {/*terza parte della lateral bar,contenente una lista di persone che puoi conoscere ! */}
     <MeetProfileComponent/>

      {/*fine terza parte della lateral bar,contenente una lista di persone che puoi conoscere ! */}

      {/*inzio 4 parte della lateral bar,contenente una lista di corsi da poter seguire! */}
<CoursesProfileComponent/>

      {/*fine 4 parte della lateral bar,contenente una lista di corsi da poter seguire! */}

      {/*inzio 5 parte della lateral bar,contenente la stesso banner al punto 2* */}
      <div className="sticky-top top-50">
        <img src="https://media.licdn.com/media/AAYQAgTPAAgAAQAAAAAAADVuOvKzTF-3RD6j-qFPqhubBQ.png" alt="" className="rounded-3 img-fluid mb-3 w-100" />
      </div>
    </>
  );
};

export default RightSideComponent;
