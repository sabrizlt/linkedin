import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { API_KEY } from "../App";
import { FaPen } from "react-icons/fa";

const NewProfileImageComponent = ({ profile }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [formData, setFormData] = useState(new FormData());

  const addProfileImg = async (_id) => {
    try {
      let response = await fetch(`https://striveschool-api.herokuapp.com/api/profile/${_id}/picture`, {
        method: "POST",
        headers: {
          Authorization: API_KEY,
        },
        body: formData,
      });
      if (response.ok) {
        alert("Immgagine inserita!");
      } else {
        alert("Errore nel caricamento dell'immagine");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleFile = (ev) => {
    setFormData((prev) => {
      prev.delete("profile"); //ricordatevi di svuotare il FormData prima :)
      prev.append("profile", ev.target.files[0]); //L'API richiede un "nome" diverso per ogni rotta, per caricare un'immagine ad un post, nel form data andra' inserito un valore con nome "post"
      return prev;
    });
  };

  return (
    <>
      <FaPen className="fs-5 ColorTextGrey" onClick={handleShow} />

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Change profile image!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              addProfileImg(profile._id);
              handleClose();
            }}
          >
            <input type="file" onChange={handleFile} />
            <button className="btn btn-success">SEND</button>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default NewProfileImageComponent;
