import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { FaPen } from "react-icons/fa";

function EditSingleExperience(props) {
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({
    role: props.content.role,
    company: props.content.company,
    startDate: props.content.startDate.slice(0, 10),
    endDate: props.content.endDate ? props.content.endDate.slice(0, 10) : "",
    description: props.content.description,
    area: props.content.area,
    image: props.content.image,
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleDelete = () => {
    props.deleteExperience(props.content._id);
    handleClose();
  };

  const handleClick = () => {
    const formattedData = {
      ...formData,
      startDate: formData.startDate.slice(0, 10),
      endDate: formData.endDate.slice(0, 10),
    };
    props.editExperience(formattedData, props.content._id);
    handleClose();
  };

  return (
    <>
      <div className="d-flex align-items-center">
        <Button variant="" onClick={handleShow} className="edit_icon d-none">
          <FaPen className="fs-6 ColorTextGrey " />
        </Button>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit experience</Modal.Title>
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
            <Form.Group className="mb-3" controlId="imageLink">
              <Form.Label>Image link</Form.Label>
              <Form.Control
                type="text"
                placeholder="Add company logo link"
                autoFocus
                value={formData.image}
                onChange={(e) => setFormData({ ...formData, image: e.target.value })}
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
          <Button variant="outline-danger" className="rounded-pill" onClick={handleDelete}>
            Delete experience
          </Button>
          <Button variant="outline-primary" onClick={handleClick} className="rounded-pill">
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default EditSingleExperience;
