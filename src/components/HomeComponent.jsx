import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import LinkedinNotice from "./RightSide/LinkedinNotice";
import PosterProfileComponent from "./RightSide/PosterProfileComponent";
import ColFooter from "./RightSide/ColFooter";
import HomeLeftSide from "./HomeLeftSide";
import { API_KEY } from "../App";
import { useEffect, useState } from "react";
import PostComponent from "./PostComponent";
import MyPost from "./MyPost";
import NavbarMobile from "./NavbarMobile";

const HomeComponent = () => {
  const [post, setPost] = useState([]);
  const getPosts = async () => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/posts/",
        {
          method: "GET",
          headers: {
            Authorization: API_KEY,
          },
        }
      );
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
    <Container id="home" fluid>
      <Row className="justify-content-center pt-4">
        <Col md={3}>
          <HomeLeftSide />
        </Col>

        <Col xs={12} md={5}>
          <MyPost />
          <hr className="text-black" />
          {post.map((p) => {
            return <PostComponent post={p} key={p._id} />;
          })}
        </Col>
        <Col md={3}>
          <LinkedinNotice />
          <PosterProfileComponent />
          <ColFooter />
          <NavbarMobile />
        </Col>
      </Row>
    </Container>
  );
};

export default HomeComponent;