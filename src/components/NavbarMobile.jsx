import { Navbar, Form, Nav, NavDropdown, Image, Container } from "react-bootstrap";
import { FaHome, FaUserFriends, FaBell } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import { RiMessage3Fill } from "react-icons/ri";
import { IoMdSettings } from "react-icons/io";
import { CgMenuGridR } from "react-icons/cg";
import { useSelector } from "react-redux";
import "../App.css";
import { Link } from "react-router-dom";

function NavbarComponent() {
  const profile = useSelector((state) => state.data.profile);

  return (
    <>
      <Container id="navbarMobile" >
        <Navbar
        id="myNav"
          bg="white"
          expand="lg"
          className="d-flex justify-content-center p-0  flex-sm-nowrap fixed-bottom"
          style={{
            boxShadow: "1px 1px 5px grey",
          }}
        >
          <div className="d-flex justify-content-start align-items-center me-lg-5">
            <img
              src="https://static.vecteezy.com/system/resources/previews/018/930/587/non_2x/linkedin-logo-linkedin-icon-transparent-free-png.png"
              width="60"
              height="60"
              className="d-inline-block align-top linkedinImage"
              alt="logo"
            />
            <Form className="d-none ms-1 search d-flex  d-lg-flex me-3 align-items-center my-2 ">
              <Form.Control
                type="search"
                placeholder="Cerca"
                className="me-lg-5 ColorbackGrey"
                aria-label="Search"
                id="firstName"
                name="firstName"
              />
            </Form>
          </div>

          <div id="icon" className="d-flex align-items-center mt-2 mb-2">
            <div className=" d-md-flex flex-column text-center align-items-center justify-content-center text-secondary ms-5 mx-4">
              <Link to="/" className="fs-5">
                <FaHome id="ico" className="icons-navbar fs-1" />
              </Link>
              <Nav.Link className="d-none d-lg-block text-icons"></Nav.Link>
              <p className="iconValue">home</p>
            </div>
            <div className="d-md-flex flex-column text-center align-items-center justify-content-center text-secondary mx-3 ">
              <FaUserFriends id="ico" className="icons-navbar fs-1" />
              <Nav.Link className="d-none d-lg-block text-icons"></Nav.Link>
              <p className="iconValue">Rete</p>
            </div>
            <div className=" d-md-flex flex-column text-center align-items-center justify-content-center text-secondary mx-3 ">
              <MdWork id="ico" className="icons-navbar fs-1" />
              <Nav.Link className="d-none d-lg-block text-icons"></Nav.Link>
              <p className="iconValue">pubblica</p>
            </div>
            <div className=" d-md-flex flex-column text-center align-items-center justify-content-center text-secondary mx-3 ">
              <RiMessage3Fill id="ico" className="icons-navbar fs-1" />
              <Nav.Link className="d-none d-lg-block text-icons"></Nav.Link>
              <p className="iconValue">Messaggistica</p>
            </div>
            <div className=" d-md-flex flex-column text-center align-items-center justify-content-center text-secondary mx-3 ">
              <FaBell id="ico" className="icons-navbar fs-1" />
              <Nav.Link className="d-none d-lg-block text-icons"></Nav.Link>
              <p className="iconValue">Notifiche</p>
            </div>
          </div>
          <div className=" d-md-flex flex-column align-items-center justify-content-center border-end text-secondary me-4 pe-4 leftSidebar">
            <Image src={profile.image} className="rounded-circle" style={{ width: "25px", height: "25px" }} />
            <NavDropdown title="Tu" id="navbarScrollingDropdown" className="text-icons m-0 p-0">
              <div className="d-flex ms-3 mt-1 align-items-center leftSidebar">
                <Image src={profile.image} className="rounded-circle" style={{ width: "50px", height: "50px" }} />
                <div>
                  <NavDropdown.Item className="text-decoration-none bg-transparent">
                    {profile.name} {profile.surname}
                  </NavDropdown.Item>
                  <NavDropdown.Item className="text-decoration-none bg-transparent">
                    <div style={{ width: "200px" }}>
                      <p className="text-truncate"> {profile.title}</p>
                    </div>
                  </NavDropdown.Item>
                </div>
              </div>
              <NavDropdown.Item className="text-decoration-none bg-transparent ">Visualizza profilo</NavDropdown.Item>
              <NavDropdown.Divider />
              <p className="fw-bold text-black ms-3 mb-0 titolo-nav">Account</p>
              <NavDropdown.Item className="text-decoration-none link3 fw-bold  bg-transparent">
                Prova Premium gratis
              </NavDropdown.Item>
              <NavDropdown.Item className=" bg-transparent">Impostazioni e privacy</NavDropdown.Item>
              <NavDropdown.Item className=" bg-transparent">Guida</NavDropdown.Item>
              <NavDropdown.Item className=" bg-transparent">Lingua</NavDropdown.Item>
              <NavDropdown.Divider />
              <p className="fw-bold text-black ms-3 mb-0 titolo-nav">Gestisci</p>
              <NavDropdown.Item className="bg-transparent">Post e attività</NavDropdown.Item>
              <NavDropdown.Item className="bg-transparent">Account per la pubblicità</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item className=" bg-transparent"  >Esci</NavDropdown.Item>
            </NavDropdown>
          </div>
          <div className="d-none d-md-flex flex-column align-items-center justify-content-center text-secondary me-4">
            <CgMenuGridR id="icon" className="icons-navbar fs-4" />
            <NavDropdown
              title="Per le Aziende"
              id="navbarScrollingDropdown leftSidebar"
              className="text-icons m-0 p-0"
            ></NavDropdown>
          </div>
          <p className="premium text-decoration-underline ms-3 mt-1 premium">
            Fatti assumere più velocemente. <br />
            Prova Premium gratis.
          </p>
          <Nav.Link className="d-flex d-md-none">
            <IoMdSettings id="icon" className="icons-navbar leftSidebar" />
          </Nav.Link>
        </Navbar>
      </Container>
    </>
  );
}

export default NavbarComponent;
