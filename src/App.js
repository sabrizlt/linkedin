import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import MyFooter from "./components/MyFooter";
import MyJumbotron from "./components/MyJumbotron";
import MyNav from "./components/MyNav";
import LateralComponent from "./components/LateralComponent";
import Analisi from "./components/Analisi";
import Risorse from "./components/Risorse";

import Experiences from "./components/Experiences";
function App() {
  return (
    <>
      <MyNav />
      <Container>
        <Row className="justify-content-center">
          <Col md={8} lg={7}>
            <MyJumbotron />
            <Analisi />
            <Risorse />
            <Experiences />
           
          </Col>
          <Col md={4}>
            <LateralComponent/>

          </Col>
        </Row>
        <MyFooter />
      </Container>
    </>
  );
}

export default App;
