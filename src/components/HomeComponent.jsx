import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import LinkedinNotice from "./RightSide/LinedinNotice";
import HomeRightSide from "./HomeRightSide";
const HomeComponent = () => {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={3}>
          <HomeRightSide />
        </Col>

        <Col md={6}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus quis
          officiis eaque dicta quisquam quod explicabo illo rem architecto
          deserunt excepturi aspernatur soluta esse eligendi aliquam ipsa,
          magnam eius magni?
        </Col>
        <Col md={3}>
          <LinkedinNotice />
        </Col>
      </Row>
    </Container>
  );
};

export default HomeComponent;
