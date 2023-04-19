import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const HomeComponent = () => {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={3}></Col>
        <Col md={5}></Col>
        <Col md={4}></Col>
      </Row>
    </Container>
  );
};

export default HomeComponent;
