import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import JumbotronComponent from "./JumbotronComponent";
import AnalysisComponent from "./AnalysisComponent";
import ResourcesComponent from "./ResourcesComponent";
import ExperiencesComponent from "./ExperiencesComponent";
import RightSideComponent from "./RightSideComponent";
import FooterComponent from "./FooterComponent";
import NavbarMobile from "./NavbarMobile";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { API_KEY } from "../App";
import { useEffect, useState } from "react";

const ProfileComponent = () => {
  const profile = useSelector((state) => state.data.profile);
  const exp = useSelector((state) => state.data?.exp);
  const params = useParams();
  const [thisProfileExps, setThisProfileExps] = useState([]);
  const [thisProfile, setThisProfile] = useState({
    area: "",
    bio: "",
    email: "",
    image: "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png",
    name: "",
    surname: "",
    title: "",
    username: "",
  });

  const fetchProfile = async (id) => {
    try {
      let resp = await fetch(`https://striveschool-api.herokuapp.com/api/profile/${id}`, {
        method: "GET",
        headers: {
          Authorization: API_KEY,
        },
      });
      if (resp.ok) {
        let otherProfile = await resp.json();
        console.log(otherProfile);
        setThisProfile(otherProfile);
        fetchExp(otherProfile._id);
      } else {
        alert("errore nella chiamata (recupero profilo)");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const fetchExp = async (id) => {
    try {
      let response = await fetch(`https://striveschool-api.herokuapp.com/api/profile/${id}/experiences`, {
        method: "GET",
        headers: {
          Authorization: API_KEY,
        },
      });
      if (response.ok) {
        let exp = await response.json();
        console.log(exp);
        setThisProfileExps(exp);
      } else {
        alert("errore nella chiamata (recupero esperienze)");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    params.id && fetchProfile(params.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={9} lg={7} id="profile">
          <JumbotronComponent profile={params.id ? thisProfile : profile} exp={params.id ? thisProfileExps : exp} />
          <AnalysisComponent />
          <ResourcesComponent />
          <ExperiencesComponent exp={params.id ? thisProfileExps : exp} />
        </Col>
        <Col md={3}>
          <RightSideComponent />
        </Col>
      </Row>
      <NavbarMobile />

      <FooterComponent />
    </Container>
  );
};
export default ProfileComponent;
