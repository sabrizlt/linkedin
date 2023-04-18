import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { FaPlus, FaPen } from "react-icons/fa";

function ModalModify() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="d-flex align-items-center" >
      

        <Button variant="" onClick={handleShow}>
          <FaPlus className="fs-4 ColorTextGrey"/>
        </Button>
  <Button variant="" onClick={handleShow}>
          <FaPen className="fs-4 ColorTextGrey"/>
        </Button>

      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add experience</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Role</Form.Label>
              <Form.Control
                type="text"
                placeholder="Add Role"
                autoFocus
              />
                <Form.Label>Company</Form.Label>
              <Form.Control
                type="text"
                placeholder="Add company"
                autoFocus
              />
                <Form.Label>Start date</Form.Label>
              <Form.Control
                type="date"
                placeholder="insert start date"
                autoFocus
              />
                <Form.Label>End date</Form.Label>
              <Form.Control
                type="date"
                placeholder="insert end date"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" rows={3} />
              <Form.Label>Area</Form.Label>
              <Form.Control
                type="text"
                placeholder="Example Area: Roma"
                autoFocus
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button className="btn btn-primary rounded-pill" onClick={handleClose}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default ModalModify;
