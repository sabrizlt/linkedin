import { Container, Row, Col } from "react-bootstrap";
import { Card } from "react-bootstrap";
const HomeRsFirst = () => {
  return (
    <Container>
      <Row>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
        <Col></Col>
      </Row>
    </Container>
  );
};

export default HomeRsFirst;
