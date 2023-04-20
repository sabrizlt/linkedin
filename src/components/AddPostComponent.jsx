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
export const API_POST_URL = `https://striveschool-api.herokuapp.com/api/posts/`;

function AddPostComponent(props) {
  const [showPostModal, setShowPostModal] = useState(false);
  const [showPhotoModal, setShowPhotoModal] = useState(false);
  const [id, setId] = useState("");
  const newData = new FormData();

  const handleShowPostModal = (value) => {
    setShowPostModal(value);
  };

  const handleShowPhotoModal = (value) => {
    setShowPhotoModal(value);
  };

  const handleSaveChanges = () => {
    setShowPhotoModal(false);
  };

  const onChange = (e) => {
    const file = e.target.files[0];
    newData.append("post", file);
    console.log(newData.get("post"));
  };

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
        console.log(postData);
        setId(postData);
        console.log(id);
        //if (newData.get("post")) {
        addPostPhoto();

        props.getPosts();
        setFormData("");
        alert("Post inviato con successo!");
      } else {
        return new Error("Errore durante la pubblicazione!");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const API_POST_PHOTO_URL = `https://striveschool-api.herokuapp.com/api/posts/${
    id?._id || ""
  } `;

  const addPostPhoto = async () => {
    try {
      let resp = await fetch(API_POST_PHOTO_URL, {
        method: "POST",
        headers: {
          Authorization: API_KEY,
        },
        body: newData,
      });
      if (resp.ok) {
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
        onClick={handleShowPostModal}
      >
        Avvia un post
      </Button>

      <Modal show={showPostModal} onHide={() => handleShowPostModal(false)}>
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
              <>
                <FaPhotoVideo
                  className="fs-4 text-primary"
                  onClick={() => handleShowPhotoModal(true)}
                />

                <Modal
                  show={showPhotoModal}
                  onHide={() => handleShowPhotoModal(false)}
                >
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
                          onChange={onChange}
                        />
                      </Form.Group>
                    </Form>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button
                      variant="secondary"
                      onClick={() => handleShowPhotoModal(false)}
                    >
                      Close
                    </Button>
                    <Button
                      variant="primary"
                      onClick={() => {
                        handleSaveChanges();
                        const formElem = document.getElementById("formElem");
                        formElem.dispatchEvent(new Event("submit"));
                      }}
                    >
                      Save Changes
                    </Button>
                  </Modal.Footer>
                </Modal>
              </>
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
                  handleShowPostModal(false);
                  handleShowPhotoModal(false);
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
