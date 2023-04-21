import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { Link } from "react-router-dom";
import DarkMode from "./DarkModeButton";

function Welcome() {
  const [password, setPassword] = useState(localStorage.getItem("APY_KEY"));

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Password: ${password}`);
    localStorage.setItem("APY_KEY", "Bearer" + " " + password);
  };

  const handleChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div className="modal show my-5" style={{ display: "block", height: "100vh", vhposition: "initial" }}>
      <Modal.Dialog>
        <Modal.Header closeButton className="bg-primary text-light">
          <Modal.Title className="">
            {" "}
            <img
              src="https://static.vecteezy.com/system/resources/previews/018/930/587/non_2x/linkedin-logo-linkedin-icon-transparent-free-png.png"
              style={{ width: "80px" }}
            ></img>
            Welcome on LinkedIn
          </Modal.Title>
        </Modal.Header>

        <Modal.Body className="">
          <form onSubmit={handleSubmit} className="d-flex flex-column">
            <InputGroup.Text
              id="inputGroup-sizing-default"
              className="bg-light border border-primary text-dark"
              value={password}
              onChange={handleChange}
              placeholder="insert your ApiKey "
            >
              Bearer
              <Form.Control
                className="ms-2"
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default wthitout Bearer"
                placeholder="Insert your ApiKey"
              />
            </InputGroup.Text>
            <span className="d-flex justify-content-around mt-3">
              <button
                type="submit"
                className="btn btn-outline-primary my-2 w-25 "
                onClick={() => {
                  window.location.replace("/profile");
                }}
              >
                Login
              </button>

              <Link
                to="https://strive.school/linkedin-registration"
                target="_blank"
                className="btn btn-primary text-light w-25 my-2"
              >
                Register and get <br />
                your apikey!
              </Link>
            </span>
          </form>
        </Modal.Body>
      </Modal.Dialog>
    </div>
  );
}
export default Welcome;
