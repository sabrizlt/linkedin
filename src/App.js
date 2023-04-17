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
 <MyJumbotron/>
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
