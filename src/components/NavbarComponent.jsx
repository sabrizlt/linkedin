import { Navbar, Form, Nav, NavDropdown, Image, Row, Card } from "react-bootstrap";
import { FaHome, FaUserFriends, FaBell } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import { RiMessage3Fill } from "react-icons/ri";
import { IoMdSettings } from "react-icons/io";
import { CgMenuGridR } from "react-icons/cg";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import DarkMode from "./DarkModeButton";
import { useState } from "react";
import "../App.css";

function NavbarComponent() {
  const profile = useSelector((state) => state.data.profile);
  const allProfile = useSelector((state) => state.data.allProfiles);
  const [query, setQuery] = useState("");
  const [queryResult, setQueryResult] = useState([]);

  const SearchFunction = () => {
    setQueryResult(null);
    let found = [];
    console.log("Query: ", query);
    allProfile &&
      allProfile.filter((p) => {
        if (
          p.username.toLowerCase().includes(query.toLowerCase()) ||
          (p.name && p.name.toLowerCase().includes(query.toLowerCase())) ||
          (p.surname && p.surname.toLowerCase().includes(query.toLowerCase()))
        ) {
          found.push(p);
        }

        return found;
      });
    setQueryResult(found);
    console.log("Risultati: ", found);
    console.log("queryResult: ", queryResult);
    document.querySelector("#queryResult").click();
  };
  return (
    <>
      <Navbar
        id="myNav"
        bg="white"
        expand="lg"
        className="d-flex justify-content-center p-0  flex-sm-nowrap fixed-top"
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
          <NavDropdown title="" id="queryResult" className="text-icons m-0 p-0 youNav" style={{}}>
            {queryResult.length > 0 &&
              queryResult.map((p, i) => (
                <NavDropdown.Item key={i} className="text-decoration-none bg-transparent ">
                  <Link to={"/profile/" + p._id}>
                    <Card className="fw-bold ">
                      <Card.Body>
                        <div className="d-flex align-item-center">
                          <img
                            src={p.image}
                            alt="Profile pic"
                            style={{ width: "30px", height: "30px" }}
                            className="rounded-circle ms-0 me-2"
                            onError={(e) => (e.currentTarget.src = "https://placedog.net/500")}
                          />
                          <h6>
                            {p.name.charAt(0).toUpperCase() +
                              p.name.slice(1) +
                              " " +
                              p.surname.charAt(0).toUpperCase() +
                              p.surname.slice(1)}
                          </h6>
                        </div>
                      </Card.Body>
                    </Card>
                  </Link>
                </NavDropdown.Item>
              ))}
          </NavDropdown>
          <Form
            className="d-none ms-1 search d-flex  d-lg-flex me-3 align-items-center my-2 formSearch"
            onSubmit={(e) => {
              e.preventDefault();
              SearchFunction();
            }}
          >
            <input
              value={query}
              type="text"
              placeholder="Cerca"
              className="me-lg-5 ColorbackGrey"
              id="query"
              name="query"
              onChange={(e) => {
                setQuery(e.target.value);
              }}
            />
          </Form>
        </div>

        <div id="icon" className="d-flex iconNavbar iconDesktop">
          <div className=" d-md-flex flex-column align-items-center justify-content-center text-secondary me-5">
            <Link to="/home" className="fs-5">
              <FaHome id="ico" className="icons-navbar " />
            </Link>
            <Nav.Link className="d-none d-lg-block text-icons">Home</Nav.Link>
          </div>

          <div className="d-md-flex flex-column align-items-center justify-content-center text-secondary me-5">
            <Link to="/gianni" className="fs-5">
              <FaUserFriends id="ico" className="icons-navbar" />
            </Link>
            <Nav.Link className="d-none d-lg-block text-icons">Rete</Nav.Link>
          </div>
          <div className=" d-md-flex flex-column align-items-center justify-content-center text-secondary me-4">
            <Link to="/gianni" className="fs-5">
              <MdWork id="ico" className="icons-navbar" />
            </Link>
            <Nav.Link className="d-none d-lg-block text-icons">Lavoro</Nav.Link>
          </div>
          <div className=" d-md-flex flex-column align-items-center justify-content-center text-secondary me-4">
            <Link to="/gianni" className="fs-5">
              <RiMessage3Fill id="ico" className="icons-navbar" />
            </Link>
            <Nav.Link className="d-none d-lg-block text-icons">Messaggistica</Nav.Link>
          </div>
          <div className=" d-md-flex flex-column align-items-center justify-content-center text-secondary me-4">
            <Link to="/gianni" className="fs-5">
              <FaBell id="ico" className="icons-navbar" />
            </Link>
            <Nav.Link className="d-none d-lg-block text-icons">Notifiche</Nav.Link>
          </div>
        </div>
        <div className=" d-md-flex flex-column align-items-center justify-content-center border-end text-secondary me-4 pe-4">
          <Image src={profile.image} className="rounded-circle navImage" style={{ width: "25px", height: "25px" }} />
          <NavDropdown title="Tu" id="navbarScrollingDropdown" className="text-icons m-0 p-0 youNav">
            <div className="d-flex ms-3 mt-1 align-items-center">
              <Image src={profile.image} className="rounded-circle" style={{ width: "50px", height: "50px" }} />
              <div>
                <NavDropdown.Item className="text-decoration-none bg-transparent ">
                  {profile.name} {profile.surname}
                </NavDropdown.Item>
                <NavDropdown.Item className="text-decoration-none bg-transparent">
                  <div style={{ width: "200px" }}>
                    <p className="text-truncate"> {profile.title}</p>
                  </div>
                </NavDropdown.Item>
              </div>
            </div>

            <NavDropdown.Item className="text-decoration-none bg-transparent">
              <Link to="/Profile" className="fs-6">
                Visualizza profilo{" "}
              </Link>
            </NavDropdown.Item>

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
            <NavDropdown.Item className=" bg-transparent">
              <Link to={"/"}>Esci</Link>
            </NavDropdown.Item>
          </NavDropdown>
        </div>
        <DarkMode></DarkMode>
        <div className="d-none d-md-flex flex-column align-items-center justify-content-center text-secondary me-4">
          <CgMenuGridR id="icon" className="icons-navbar fs-4" />
          <NavDropdown title="Per le Aziende" id="navbarScrollingDropdown" className="text-icons m-0 p-0"></NavDropdown>
        </div>

        <p className="premium text-decoration-underline ms-3 mt-1 premium">Prova Premium gratis.</p>
        <Nav.Link className="d-flex d-md-none">
          <IoMdSettings id="icon" className="icons-navbar iconDesktop" />
        </Nav.Link>
      </Navbar>
    </>
  );
}

export default NavbarComponent;
