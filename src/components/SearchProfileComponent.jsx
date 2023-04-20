import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const SearchProfileComponent = (props) => {
  return (
    <div>
      <Container id="queryResult" className="d-none">
        <Row>
          <h2>Search result:</h2>
        </Row>
        {props.queryResult.map((p, i) => {
          return (
            <Row key={i} className="mb-2 pt-2 bg-light border border-solid-dark rounded">
              <Link to={"profile/" + p._id}>
                <Col xs={2}>
                  <img
                    src={p.image}
                    alt="Profile pic"
                    style={{ aspectRatio: "1/1" }}
                    className="rounded-circle ms-0 w-50"
                    onError={(e) => (e.currentTarget.src = "https://placedog.net/500")}
                  />
                </Col>
                <Col xs={5}>
                  <h4>{p.username}</h4>
                </Col>
              </Link>
            </Row>
          );
        })}
      </Container>
      <button
        className="v-altro bg-white btn border border-solid-dark rounded"
        onClick={() => {
          document.querySelector("#queryResult").classList.toggle("d-none");
          document.querySelector("#arrowDown2").classList.toggle("d-none");
          document.querySelector("#arrowUp2").classList.toggle("d-none");
          document.querySelector("#hide2").classList.toggle("d-none");
        }}
      >
        <span id="hide2">Visualizza meno</span>
        <FaAngleUp id="arrowDown2" className="" />
        <FaAngleDown id="arrowUp2" className="d-none" />
      </button>
    </div>
  );
};
export default SearchProfileComponent;
