import React, { useEffect } from "react";
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
import { useSelector } from "react-redux";
import { getExps, getProfile } from "./redux/actions";

function App() {
  const profile = useSelector((state) => state.profile)
  const exp = useSelector((state) => state.exp)


  useEffect(() => {
    getProfile()
    console.log(profile)
    //getExps(profile._id)
    //console.log(exp)
  }, [])


  return (
    <>
      <MyNav />
      <Container>
        <Row className="justify-content-center">
          <Col md={8} lg={7}>
            <MyJumbotron />
            <Analisi />
            <Risorse />
          </Col>
          <Col md={4}>
            <LateralComponent></LateralComponent>
          </Col>
        </Row>
        <MyFooter />
      </Container>
    </>
  );
}

export default App;
