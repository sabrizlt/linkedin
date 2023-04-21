import React from "react";
import { Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
import { FaEdit } from "react-icons/fa";
import { useSelector } from "react-redux";

const MessagingDropdown = () => {
  const profile = useSelector((state) => state.data.profile);

  return (
    <Dropdown className="fixed-bottom dropMessage d-flex justify-content-end message" >
      <Dropdown.Toggle
        variant="secondary"
        className="bg-light border-dark text-black d-flex align-items-center "
      >
        <div >
          <img
            style={{ width: "27px" }}
            className="rounded-circle"
            src={profile.image}
            alt="Profile pic"
          ></img>

          <span
            className="mr-auto fw-bolder mx-2"
            style={{ fontSize: "0.9em" }}
            
          >
            Messaggistica
          </span>
        </div>
        <div className="mx-5">
          <BsThreeDots className="mx-2 text-secondary" />
          <FaEdit className="mx-2 text-secondary " />
          <FaAngleUp id="arrowDown2" className="ml-auto mx-2 text-secondary " />
          <FaAngleDown
            id="arrowUp2"
            className="ml-auto d-none mx-2 text-secondary "
          />
        </div>
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item as={Link} to="/messaging">
          Apri la messaggistica
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default MessagingDropdown;
