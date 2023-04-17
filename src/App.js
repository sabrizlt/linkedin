import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaBeer } from 'react-icons/fa';
import MyFooter from "./components/MyFooter";
import MyJumbotron from "./components/MyJumbotron";
import MyNav from './components/MyNav';
import { Row } from 'react-bootstrap';
import LateralComponent from './components/LateralComponent';
import { Col } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import Analisi from './components/Analisi'
import Risorse from './components/Risorse'


function App() {
  return (
    <>
      <Container>
      <MyNav/>
        <Row>
          <Col md={8}>
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

  )



}


export default App;
