import { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
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
import { useSelector } from "react-redux";
export const API_POST_URL = `https://striveschool-api.herokuapp.com/api/posts/`;

function AddPostComponent(props) {
  const profile = useSelector((state) => state.data.profile);
  const [showPostModal, setShowPostModal] = useState(false);
  const [showPhotoModal, setShowPhotoModal] = useState(false);
  const [id, setId] = useState("");
  const [newData] = useState(new FormData());

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
        if (newData.get("post")) {
          addPostPhoto(postData._id);
        }

        setFormData("");
        alert("Post inviato con successo!");
      } else {
        return new Error("Errore durante la pubblicazione!");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const addPostPhoto = async (id) => {
    const API_POST_PHOTO_URL = `https://striveschool-api.herokuapp.com/api/posts/${id} `;
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
        props.getPosts();
      } else {
        return new Error("Errore durante la pubblicazione!");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="d-flex">
      <img
        className="rounded-circle mx-2 prof__icon"
        src={profile.image ? profile.image : profile.user.image}
        alt="Profile pic"
      />
      <Button
        variant="light"
        className="rounded-pill w-100 border-secondary fw-bolder text-secondary"
        onClick={handleShowPostModal}
      >
        Avvia un post
      </Button>

      <Modal show={showPostModal} onHide={() => handleShowPostModal(false)}>
        <Modal.Header closeButton>
          <Dropdown className="d-inline mx-2" autoClose="inside">
            <Dropdown.Toggle
              id="dropdown-autoclose-inside"
              className="d-flex align-items-center bg-white text-dark"
            >
              <img
                className="rounded-circle mx-2 prof__icon__modal"
                src={profile.image ? profile.image : profile.user.image}
                alt="Profile pic"
              />
              <div className="d-flex flex-column">
                <h2>
                  {profile.name} {profile.surname}
                </h2>
                <p className="me-5">Pubblica: Chiunque</p>
              </div>
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#">Chiunque</Dropdown.Item>
              <Dropdown.Item href="#">Solo Collegamenti</Dropdown.Item>
              <Dropdown.Item href="#">Gruppo</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
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
    </div>
  );
}

export default AddPostComponent;
