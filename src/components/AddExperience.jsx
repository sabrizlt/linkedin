import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { FaPlus, FaPen } from "react-icons/fa";

function AddExperience({ addExperience }) {
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({
    role: "",
    company: "",
    startDate: "",
    endDate: "",
    description: "",
    area: "",
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const hideIcons = () => {
    let icons = document.querySelectorAll(".edit_icon");
    icons.forEach((icon) => {
      icon.classList.toggle("d-none");
    });
  };
  const handleClick = () => {
    const formattedData = {
      ...formData,
      startDate: formData.startDate.slice(0, 10),
      endDate: formData.endDate.slice(0, 10),
    };
    addExperience(formattedData);
    handleClose();
  };

  return (
    <>
      <div className="d-flex align-items-center">
        <Button variant="" onClick={handleShow}>
          <FaPlus className="fs-6 ColorTextGrey" />
        </Button>
        <Button
          variant=""
          onClick={() => {
            hideIcons();
          }}
        >
          <FaPen className="fs-6 ColorTextGrey" />
        </Button>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add experience</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="role">
              <Form.Label>Role</Form.Label>
              <Form.Control
                type="text"
                placeholder="Add Role"
                autoFocus
                value={formData.role}
                onChange={(e) => setFormData({ ...formData, role: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="company">
              <Form.Label>Company</Form.Label>
              <Form.Control
                type="text"
                placeholder="Add company"
                autoFocus
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="startDate">
              <Form.Label>Start date</Form.Label>
              <Form.Control
                type="date"
                placeholder="insert start date"
                autoFocus
                value={formData.startDate}
                onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
              />
              <Form.Label>End date</Form.Label>
              <Form.Control
                type="date"
                placeholder="insert end date"
                autoFocus
                value={formData.endDate}
                onChange={(e) => setFormData({ ...formData, endDate: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="description">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Add a description"
                style={{ height: "100px" }}
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="area">
              <Form.Label>Area</Form.Label>
              <Form.Control
                type="text"
                placeholder="Add area"
                autoFocus
                value={formData.area}
                onChange={(e) => setFormData({ ...formData, area: e.target.value })}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClick} className="rounded-pill">
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default AddExperience;
