import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import LinkedinNotice from "./RightSide/LinedinNotice";
import PosterProfileComponent from "./RightSide/PosterProfileComponent";
import ColFooter from "./RightSide/ColFooter";
const HomeComponent = () => {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={2}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse inventore voluptas, impedit laudantium assumenda accusamus unde soluta et est animi aliquid vitae? Laborum officia animi ipsum labore iste ducimus eum.
        </Col>

        <Col md={7}>
Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus quis officiis eaque dicta quisquam quod explicabo illo rem architecto deserunt excepturi aspernatur soluta esse eligendi aliquam ipsa, magnam eius magni?
        </Col>
        <Col md={3}>
<LinkedinNotice/>
<PosterProfileComponent/>
<ColFooter/>
        </Col>

      </Row>
    </Container>
  );
};

export default HomeComponent;
