import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const PostComponent = (props) => {
  return (
    <Card className="mb-2">
      <Row className="mt-2 align-items-center">
        <Col xs={2} className=" d-flex flex-row justify-content-end">
          <Card.Img
            variant="top"
            src={props.post.user ? props.post.user.image : "https://placedog.net/500"}
            id="postUserImage"
            alt="Profile image"
            style={{ aspectRatio: "1/1" }}
            className="rounded-circle ms-0 w-50"
          />
        </Col>
        <Col xs={8} className="justify-content-start ps-0 ms-0 ">
          <h5 className="postUserName mx-2 mb-0 ms-0 fw-bold">
            {props.post.user ? props.post.user.name + " " + props.post.user.surname : props.post.username}
          </h5>
          <small>Last update: {props.post.updatedAt.slice(0, 10)}</small>
        </Col>
      </Row>
      <Card.Body>
        <Row className="postContent ms-1">
          <Col className="justify-content-start">
            <p className="postContentText mx-2">{props.post.text}</p>
            <img src={`https://picsum.photos/seed/${Math.floor(Math.random() * 20)}/465`} alt="" />
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default PostComponent;
