import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BiLike, BiCommentDots, BiShare } from "react-icons/bi";
import { BsSend } from "react-icons/bs";
import { InputGroup, Form } from "react-bootstrap";
import { useSelector } from "react-redux";
import EditPostComponent from "./EditPostComponent";
import { API_KEY } from "../App";
import { API_POST_URL } from "./AddPostComponent";
import { Link } from "react-router-dom";

const PostComponent = (props) => {
  const editPost = async (formData, post_id) => {
    console.log(JSON.stringify(formData));
    try {
      let resp = await fetch(API_POST_URL + post_id, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: API_KEY,
        },
        body: JSON.stringify(formData),
      });
      if (resp.ok) {
        props.getPost();
        alert("Post modificato!");
      } else {
        alert("Errore nella modifica del post!");
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };

  const deletePost = async (post_id) => {
    try {
      let resp = await fetch(API_POST_URL + post_id, {
        method: "DELETE",
        headers: {
          Authorization: API_KEY,
        },
      });
      let data = await resp.json();

      if (resp.ok) {
        console.log(data);
      }
    } catch (error) {
      console.log("Error:", error);
    }
    props.getPost();
  };
  document.addEventListener('swiped', function(e) {
    console.log(e.target); // the element that was swiped
    console.log(e.detail.dir); // swiped direction
});
  const profile = useSelector((state) => state.data.profile);
  return (
    <Card className="mb-3 pt-2">
      <Row className=" align-items-center">
        <Col xs={2} className=" d-flex flex-row justify-content-end">
          <Card.Img
            variant="top"
            src={props.post.user ? props.post.user.image : "https://placedog.net/500"}
            id="postUserImage"
            alt="Profile image"
            style={{ aspectRatio: "1/1" }}
            className="rounded-circle ms-0 w-50"
            onError={(e) => (e.currentTarget.src = "https://placedog.net/500")}
          />
        </Col>
        <Col xs={8} className="justify-content-start ps-0 ms-0 " >
          <Link to={"/Profile/" + props.post.user._id}>
            <h5 className="postUserName mx-2 mb-0 ms-0 fw-bold">
              {props.post.user ? props.post.user.name + " " + props.post.user.surname : props.post.username}
            </h5>
          </Link>
          <small>Last update: {props.post.updatedAt.slice(0, 10)}</small>
        </Col>
        <Col xs={1}>
          <span className={props.post.username === profile.username ? "d-flex justify-content-end" : "d-none"}>
            <EditPostComponent editPost={editPost} post={props.post} deletePost={deletePost} />
          </span>
        </Col>
      </Row>
      <Card.Body className="bodyCard pb-0">
        <Row className="postContent ms-1">
          <Col className="justify-content-start postImage">
            <p className="postContentText mx-2">{props.post.text}</p>
            {props.post.image && <img className="img-fluid m-0 p-0 imageRandom" src={props.post.image} alt="" />}
            <hr />
            <div className="d-flex justify-content-around justify-content-md-center iconPost">
              <BiLike className="" />
              <span className="mx-1 d-none d-md-flex spanIcon text-secondary">Consiglia</span>
              <BiCommentDots className=" mx-4" />
              <span className="mx-0 d-none d-md-flex spanIcon text-secondary">Commenta</span>
              <BiShare className=" mx-4" />
              <span className="mx-0 d-none d-md-flex spanIcon text-secondary">Diffondi il post</span>
              <BsSend className=" mx-4" />
              <span className="mx-0 d-none d-md-flex spanIcon text-secondary">Invia</span>
            </div>

            <InputGroup className="mb-3">
              <Form.Control
                aria-label="Text input with dropdown button"
                className="rounded-pill mt-3"
                placeholder="Aggiungi un Commento..."
              />
            </InputGroup>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default PostComponent;
