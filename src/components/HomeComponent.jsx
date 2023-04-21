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
import NewPostContainer from "./NewPostContainer";
import NavbarMobile from "./NavbarMobile";
import SearchProfileComponent from "./SearchProfileComponent";
import Messaggistica from "./Messaggistica";
import SideLeftMobile from "./SideLeftMobile";
import { queryResult } from "./NavbarComponent";

const HomeComponent = () => {
  const [post, setPost] = useState([]);
  const reversedPost = post;
  reversedPost.reverse();
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
        <Col md={3}>
        <SearchProfileComponent queryResult={queryResult} />

          <HomeLeftSide />
        </Col>

        <Col xs={12} md={5}>
          <NewPostContainer getPosts={getPosts} />
          <hr className="text-black" />
          {reversedPost.slice(0, 50).map((p) => {
            return <PostComponent post={p} key={p._id} getPost={getPosts} />;
          })}
        </Col>
        <Col md={3}>
          <LinkedinNotice />
          <SideLeftMobile />
          <PosterProfileComponent />
          <ColFooter />
          <NavbarMobile />
          <Messaggistica />
        </Col>
      </Row>
    </Container>
  );
};

export default HomeComponent;
