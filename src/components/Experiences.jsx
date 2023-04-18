import { Col } from'react-bootstrap';
import { Container } from'react-bootstrap';
import { FaAngleDown } from 'react-icons/fa'
import { Row } from'react-bootstrap';
import { useState } from'react';
import ModalModify from './ModalModify';

const API_URL = "https://striveschool-api.herokuapp.com/api/profile/:userId/experiences";
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDNjZjc2ZTE4NmE4NzAwMTQzODY3YzIiLCJpYXQiOjE2ODE3MTcxMDMsImV4cCI6MTY4MjkyNjcwM30.WhoGuX5E4a9cAnSoZgHW7QkdyUl7K5ySRV2ZNAZoUzY ";

function Experiences() {
  const [experiences, setExperiences] = useState([]);

  const addExperience = (formData) => {
    fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${API_KEY}` // aggiungi la tua API key come header Authorization
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
          <h2 className="ms-2">Esperienze</h2>
          <ModalModify addExperience={addExperience} updateExperiences />        </div>
        <div>
          <Container className="p-0 mb-3">
            {experiences.map((experience, index) => (
              <Row className="mx-2" key={index}>
                <Col md={3} className="d-flex align-items-center mb-3">
                  <img
                    src="https://cultivatedculture.com/wp-content/uploads/2019/12/LinkedIn-Profile-Picture-Example-Rachel-Montan%CC%83ez.jpeg"
                    alt=""
                    width={30}
                    className="rounded-5"
                  />
                  <p className="mb-1 mx-2">{experience.role}</p>
                </Col>
                <hr className="mx-1 mt-1 mb-3"></hr>
              </Row>
            ))}
            <div className="">
              <button className="v-altro bg-white btn mx-0 rounded-0">
                Visualizza altro<FaAngleDown />
              </button>
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
}

export default Experiences