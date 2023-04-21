import { BsFillPersonPlusFill } from "react-icons/bs";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const MeetProfileComponent = ({ profile }) => {
  return (
    <Card className="fw-bold mt-3" id="myNav">
      <Card.Body className="pb-0 fs-5" ></Card.Body>
      <Card.Body>
        <div className="d-flex align-item-center "  id="myNav">
          <img
            className="prof__icon rounded-circle"
            src={profile?.image ? profile?.image : profile.user?.image}
            alt=""
            style={{ width: "50px", height: "50px" }}
            onError={(e)=>e.currentTarget.src = "https://www.comune.alzano.bg.it/export/sites/default/.galleries/immagini/foto/A-Barbagianni.jpg"}
          />

          <p className="ms-3">
            <Link to={"/Profile/" + profile._id}>
              {profile.name} {profile.surname}
              <br /> <span className="fw-lighter">{profile.title}</span> <br />
              <Button
                variant="outline-secondary"
                size="sm"
                className="altroButton rounded-pill px-3"
              >
                <BsFillPersonPlusFill /> Collegati
              </Button>
            </Link>
          </p>
        </div>
        {/*<span className="d-flex justify-content-center w-75"></span>*/}
      </Card.Body>
    </Card>
  );
};

export default MeetProfileComponent;
