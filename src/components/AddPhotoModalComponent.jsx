import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { FaPhotoVideo } from "react-icons/fa";
import { API_KEY } from "../App";

function AddPhotoModalComponent({ details, getPosts, addPost }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  console.log(details);

  const API_POST_PHOTO_URL = `https://striveschool-api.herokuapp.com/api/posts/${
    details?._id || ""
  } `;

  const formData = new FormData();

  const addPostPhoto = async (formElem) => {
    try {
      let resp = await fetch(API_POST_PHOTO_URL, {
        method: "POST",
        headers: {
          Authorization: API_KEY,
        },
        body: formData,
      });
      if (resp.ok) {
        addPost();
        getPosts();
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
      <FaPhotoVideo className="fs-4 text-primary" onClick={handleShow} />

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Carica una foto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              addPostPhoto(e.currentTarget);
            }}
          >
            <Form.Group className="mb-3">
              <Form.Label>Default file input example</Form.Label>
              <Form.Control
                type="file"
                id="formElem"
                onChange={(e) => {
                  formData.append("post", e.target.files[0]);
                }}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              handleClose();
              const formElem = document.getElementById("formElem");
              formElem.dispatchEvent(new Event("submit"));
            }}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddPhotoModalComponent;