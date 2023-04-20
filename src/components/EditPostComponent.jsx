import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { FaPen, FaRegClock } from "react-icons/fa";
import {
  FaPhotoVideo,
  FaYoutube,
  FaNewspaper,
  FaCommentDots,
} from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
import { useState } from "react";

const EditPostComponent = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [formData, setFormData] = useState({
    text: props.post.text,
  });

  return (
    <>
      <span
        className="rounded-pill border-secondary fw-bolder text-secondary me-2"
        onClick={handleShow}
      >
        <FaPen />
      </span>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Crea un post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Control
                as="textarea"
                rows={3}
                className="border-light modalArea"
                placeholder="Di cosa vorresti parlare?"
                value={formData.text}
                onChange={(e) =>
                  setFormData({ ...formData, text: e.target.value })
                }
              />
            </Form.Group>
          </Form>
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <FaPhotoVideo className="fs-4 mx-2 text-secondary" />
              <FaYoutube className="fs-4 mx-2 text-secondary" />
              <FaNewspaper className="fs-4 mx-2 text-secondary" />
              <BsThreeDots className="fs-4 mx-2 text-secondary" />
              <span className="mx-2">|</span>
              <FaCommentDots className="fs-6 mx-2 text-secondary" />
              <span>Tutti</span>
            </div>
            <div className="d-flex align-items-center">
              <FaRegClock className="text-secondary fs-4" />
              <Button
                variant="outline-primary"
                className="rounded-pill fw-bolder mx-2"
                onClick={() => {
                  props.editPost(formData, props.post._id);
                  handleClose();
                }}
              >
                Modifica post
              </Button>
              <Button
                variant="outline-danger"
                className="rounded-pill fw-bolder mx-2"
                onClick={() => {
                  props.deletePost(props.post._id);
                  handleClose();
                }}
              >
                Elimina post
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default EditPostComponent;
