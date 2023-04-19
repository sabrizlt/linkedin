import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import LinkedinNotice from "./RightSide/LinedinNotice";
import { API_KEY } from "../App";
import { useEffect, useState } from "react";
import PostComponent from "./PostComponent";
const HomeComponent = () => {
  const [post, setPost] = useState([]);
  const getPosts = async () => {
    try {
      let response = await fetch("https://striveschool-api.herokuapp.com/api/posts/", {
        method: "GET",
        headers: {
          Authorization: API_KEY,
        },
      });
      if (response.ok) {
        let data = await response.json();
        setPost(data);
        console.log(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);
  return (
    <Container id="home">
      <Row className="justify-content-center pt-4">
        <Col md={2}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus quis officiis eaque dicta quisquam quod
          explicabo illo rem architecto deserunt excepturi aspernatur soluta esse eligendi aliquam ipsa, magnam eius
          magni?
        </Col>

        <Col md={7}>
          {post.map((p) => {
            return <PostComponent post={p} key={p._id} />;
          })}
        </Col>
        <Col md={3}>
          <LinkedinNotice />
        </Col>
      </Row>
    </Container>
  );
};

export default HomeComponent;
