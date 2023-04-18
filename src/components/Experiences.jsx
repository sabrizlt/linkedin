import { Col } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { FaAngleDown } from "react-icons/fa";
import { Row } from "react-bootstrap";
import { useState } from "react";
import { useSelector } from "react-redux";
import ModalModify from "./ModalModify";
import { API_KEY } from "../App";

const API_URL = "https://striveschool-api.herokuapp.com/api/profile/:userId/experiences";
function Experiences() {
  const [experiences, setExperiences] = useState([]);

  const exp = useSelector((state) => state.data.exp);
  const reversedEpx = exp;
  reversedEpx.reverse();

  const addExperience = (formData) => {
    fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: API_KEY,
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        setExperiences([...experiences, data]);
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    const updateExperiences = (newExperience) => {
      setExperiences([...experiences, newExperience]);
    };
  };
  return (
    <div className="border border-2 rounded-3 my-2  p-2 bg-white">
      <div>
        <div className="d-flex justify-content-between">
          <h2 className="mt-2 mx-3">Esperienze</h2>
          <ModalModify addExperience={addExperience} updateExperiences />{" "}
        </div>
        <div>
          <Container className="p-0 mb-3">
            {reversedEpx.slice(0, 5).map((experience, index) => (
              <Row className="mx-2" key={index}>
                <Col className="align-items-center mb-1">
                  <h5 className="mb-1 mx-2">{experience.role}</h5>

                  <p className="mb-1 mx-2 ">{experience.company} • Full-time</p>
                  <span className="mb-1 mx-2 text-secondary">
                    {new Date(experience.startDate).toLocaleDateString("en-US", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}{" "}
                    -{" "}
                    {new Date(experience.endDate).toLocaleDateString("en-US", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </span>
                </Col>
                <hr className="mx-1 mt-1"></hr>
              </Row>
            ))}
            <span className="d-none" id="ShowMore">
              {reversedEpx.slice(5, -1).map((experience, index) => (
                <Row className="mx-2" key={index}>
                  <Col className="align-items-center mb-1">
                    <h5 className="mb-1 mx-2">{experience.role}</h5>
                    <p className="mb-1 mx-2 ">{experience.company} • Full-time</p>
                    <span className="mb-1 mx-2 text-secondary">
                      {new Date(experience.startDate).toLocaleDateString("en-US", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}{" "}
                      -{" "}
                      {new Date(experience.endDate).toLocaleDateString("en-US", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </span>
                  </Col>
                  <hr className="mx-1 mt-1"></hr>
                </Row>
              ))}
            </span>

            <div className="">
              <button
                className="v-altro bg-white btn"
                onClick={() => {
                  document.querySelector("#ShowMore").classList.remove("d-none");
                }}
              >
                Visualizza altro
                <FaAngleDown />
              </button>
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
}

export default Experiences;
