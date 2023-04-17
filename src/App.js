import './App.css';
import Analisi from './components/Analisi';
import { Col, Container, Row } from "react-bootstrap";
import Risorse from './components/Risorse';
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  return (
    <div className="App">

      <Container>
        <Analisi />
        <Risorse />
      </Container>

    </div>
  );
}

export default App;
