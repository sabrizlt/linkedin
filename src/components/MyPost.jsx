import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ModalPost from "./ModalPost";
import {
  FaPhotoVideo,
  FaYoutube,
  FaCalendarAlt,
  FaNewspaper,
} from "react-icons/fa";

function WithHeaderExample({ getPosts }) {
  return (
    <Card className='mb-3'>
      <Card.Body>
        <ModalPost getPosts={getPosts} />
        <div className="d-flex justify-content-center mt-3">
          <FaPhotoVideo className="fs-4 text-primary" />{" "}
          <span className="mx-2">Foto</span>
          <FaYoutube className="fs-4 rounded-0 text-success ms-3" />{" "}
          <span className="mx-2">Video</span>
          <FaCalendarAlt className="fs-5 rounded-0 text-warning ms-3" />{" "}
          <span className="mx-2">Evento</span>
          <FaNewspaper className="fs-4 rounded-0 text-danger ms-3" />{" "}
          <span className="mx-2">Scrivi un articolo</span>
        </div>
      </Card.Body>
    </Card>
  );
}

export default WithHeaderExample;
