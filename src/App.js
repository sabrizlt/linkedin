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
import { useDispatch, useSelector } from "react-redux";
//import { useParams } from "react-router-dom";

function App() {
  //const params = useParams();
  const profile = useSelector((state) => state.profile);
  const exp = useSelector((state) => state.exp);
  const dispatch = useDispatch();

  const fetchMyProfile = async () => {
    try {
      let resp = await fetch(`https://striveschool-api.herokuapp.com/api/profile/me`, {
        method: "GET",
        headers: {
          Authorization:
            "Bearer  eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDNjZjQ5NzE4NmE4NzAwMTQzODY3YmEiLCJpYXQiOjE2ODE3MTYzNzYsImV4cCI6MTY4MjkyNTk3Nn0.SdhIh7dribLHrf1riCtsWZwyVeNfC8nypDfm-4ZnVo8",
        },
      });
      if (resp.ok) {
        let profile = await resp.json();
        dispatch({ type: "GET_PROFILE", payload: profile });
        console.log(profile);
        fetchExp(profile._id);
      } else {
        alert("errore nella chiamata (recupero profilo)");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchExp = async (id) => {
    try {
      let response = await fetch(`http://striveschool-api.herokuapp.com/api/profile/${id}/experiences`, {
        method: "GET",
        headers: {
          Authorization:
            "Bearer  eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDNjZjQ5NzE4NmE4NzAwMTQzODY3YmEiLCJpYXQiOjE2ODE3MTYzNzYsImV4cCI6MTY4MjkyNTk3Nn0.SdhIh7dribLHrf1riCtsWZwyVeNfC8nypDfm-4ZnVo8",
        },
      });
      if (response.ok) {
        let exp = await response.json();
        console.log(exp);
        dispatch({ type: "GET_EXPS", payload: exp });
      } else {
        alert("errore nella chiamata (recupero esperienze)");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMyProfile();
    console.log(profile);
    console.log(exp);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <MyNav />
      <Container>
        <Row className="justify-content-center">
          <Col md={8} lg={7}>
            <MyJumbotron profile={profile} />
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
