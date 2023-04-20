import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { FaRegClock } from "react-icons/fa";
import {
  FaPhotoVideo,
  FaYoutube,
  FaNewspaper,
  FaCommentDots,
} from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
import { API_KEY } from "../App";
import AddPhotoModalComponent from "./AddPhotoModalComponent";
export const API_POST_URL = `https://striveschool-api.herokuapp.com/api/posts/`;

function AddPostComponent(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [formData, setFormData] = useState({
    text: "",
  });

  const addPost = async (formData) => {
    try {
      let resp = await fetch(API_POST_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: API_KEY,
        },
        body: JSON.stringify(formData),
      });
      if (resp.ok) {
        const postData = await resp.json();
        setFormData({ ...formData, _id: postData._id });
        props.getPosts();
        //setFormData("");
        alert("Post inviato con successo!");
      } else {
        return new Error("Errore durante la pubblicazione!");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <Button
        variant="light"
        className="rounded-pill w-100 border-secondary fw-bolder text-secondary"
        onClick={handleShow}
      >
        Avvia un post
      </Button>

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
              <AddPhotoModalComponent
                id={formData._id}
                getPosts={props.getPosts}
                addPost={addPost}
              />
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
                variant="primary"
                className="rounded-pill fw-bolder mx-2"
                onClick={() => {
                  addPost(formData);
                  handleClose();
                }}
              >
                Pubblica
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default AddPostComponent;
