import Card from "react-bootstrap/Card";
import AddPostComponent from "./AddPostComponent";
import { FaPhotoVideo, FaYoutube, FaCalendarAlt, FaNewspaper } from "react-icons/fa";

function NewPostContainer({ getPosts }) {
  return (
    <Card className="mb-3 postContainer">
      <Card.Body>
        <AddPostComponent getPosts={getPosts} />
        <div className="d-flex justify-content-center mt-3 iconAddPost">
          <FaPhotoVideo className="fs-4 text-primary iconAddPost" /> <span className="mx-2 spanPost">Foto</span>
          <FaYoutube className="fs-4 rounded-0 text-success ms-3 iconAddPost" /> <span className="mx-2 spanPost">Video</span>
          <FaCalendarAlt className="fs-5 rounded-0 text-warning ms-3 iconAddPost" /> <span className="mx-2 spanPost">Evento</span>
          <FaNewspaper className="fs-4 rounded-0 text-danger ms-3 iconAddPost" /> <span className="mx-2 spanPost">Scrivi un articolo</span>
        </div>
      </Card.Body>
    </Card>
  );
}

export default NewPostContainer;
