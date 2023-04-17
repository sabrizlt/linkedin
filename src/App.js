import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaBeer } from 'react-icons/fa';
import MyFooter from "./components/MyFooter";
import MyJumbotron from "./components/MyJumbotron";

import { Row } from'react-bootstrap';
import LateralComponent from './components/LateralComponent';
import { Col } from'react-bootstrap';
import { Container } from'react-bootstrap';

function App() {
  return (
 <>
 <Container>
 <Row>
<Col md={8}>
  lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt lorem ipsum dolor sit amet, consectetur adip
</Col>
<Col md={4}>
<LateralComponent></LateralComponent>
</Col>
 </Row>
 </Container>
 </>

  )
}


export default App;
