import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import JumbotronComponent from "./JumbotronComponent";
import AnalysisComponent from "./AnalysisComponent";
import ResourcesComponent from "./ResourcesComponent";
import ExperiencesComponent from "./ExperiencesComponent";
import RightSideComponent from "./RightSideComponent";
import FooterComponent from "./FooterComponent";
import { useSelector } from "react-redux";

const ProfileComponent = () => {
  const profile = useSelector((state) => state.data.profile);

  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={9} lg={7}>
          <JumbotronComponent profile={profile} />
          <AnalysisComponent />
          <ResourcesComponent />
          <ExperiencesComponent />
        </Col>
        <Col md={3}>
          <RightSideComponent />
        </Col>
      </Row>
      <FooterComponent />
    </Container>
  );
};
export default ProfileComponent;
