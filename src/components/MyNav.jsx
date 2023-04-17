import { Navbar, Form, Nav, NavDropdown, Image } from "react-bootstrap";
import { FaHome, FaUserFriends, FaBell } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import { RiMessage3Fill } from "react-icons/ri";
import { IoMdSettings } from "react-icons/io";
import { CgMenuGridR } from "react-icons/cg";
import "../App.css";

function MyNav() {
    return (
        <>

            <Navbar bg="white" expand="lg" className="d-flex justify-content-center p-0 mb-4 flex-sm-nowrap">
                <div className="d-flex justify-content-start align-items-center me-lg-5">
                    <img
                        src="https://static.vecteezy.com/system/resources/previews/018/930/587/non_2x/linkedin-logo-linkedin-icon-transparent-free-png.png"
                        width="60"
                        height="60"
                        className="d-inline-block align-top"
                        alt="logo"
                    />
                    <Form className="d-none ms-1 search d-flex  d-lg-flex me-3 " >
                        <Form.Control
                            type="search"
                            placeholder="Cerca"
                            className="me-lg-5"
                            aria-label="Search"
                            id="firstName"
                            name="firstName"
                        />
                    </Form>
                </div>
                <div
                    className=" d-md-flex flex-column align-items-center justify-content-center text-secondary me-4"
                >
                    <FaHome id="ico" className="icons-navbar " />
                    <Nav.Link   className="d-none d-lg-block text-icons">Home</Nav.Link >
                </div>
                <div className="d-md-flex flex-column align-items-center justify-content-center text-secondary me-4">
                    <FaUserFriends id="ico" className="icons-navbar" />
                    <Nav.Link className="d-none d-lg-block text-icons">Rete</Nav.Link>
                </div>
                <div
                    className=" d-md-flex flex-column align-items-center justify-content-center text-secondary me-4"
                >
                    <MdWork id="ico" className="icons-navbar" />
                    <Nav.Link className="d-none d-lg-block text-icons">Lavoro</Nav.Link>
                </div>
                <div className=" d-md-flex flex-column align-items-center justify-content-center text-secondary me-4">
                    <RiMessage3Fill id="ico" className="icons-navbar" />
                    <Nav.Link className="d-none d-lg-block text-icons">Messaggistica</Nav.Link>
                </div>
                <div className=" d-md-flex flex-column align-items-center justify-content-center text-secondary me-4">
                    <FaBell id="ico" className="icons-navbar" />
                    <Nav.Link className="d-none d-lg-block text-icons">Notifiche</Nav.Link>
                </div>
                <div className=" d-md-flex flex-column align-items-center justify-content-center border-end text-secondary me-4 pe-4">
                    <Image src="" className="rounded-circle" style={{ width: "25px", height: "25px" }} />
                    <NavDropdown title="Tu" id="navbarScrollingDropdown" className="text-icons m-0 p-0">
                        <div className="d-flex ms-3 mt-1 align-items-center">
                            <Image src="" className="rounded-circle" style={{ width: "50px", height: "50px" }} />
                            <div>
                                <NavDropdown.Item className="text-decoration-none bg-transparent">
                                    Nome Utente ? Cognome Utente ?
                                </NavDropdown.Item>
                                <NavDropdown.Item className="text-decoration-none bg-transparent">
                                    <div style={{ width: "200px" }}>
                                        <p className="text-truncate"> Professione ?</p>
                                    </div>
                                </NavDropdown.Item>
                            </div>
                        </div>
                        <NavDropdown.Item className="text-decoration-none bg-transparent">
                            Visualizza profilo
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
                        <NavDropdown.Item className=" bg-transparent">Esci</NavDropdown.Item>
                    </NavDropdown>
                </div>
                <div className="d-none d-md-flex flex-column align-items-center justify-content-center text-secondary me-4">
                    <CgMenuGridR id="ico" className="icons-navbar" />
                    <NavDropdown title="Per le Aziende" id="navbarScrollingDropdown" className="text-icons m-0 p-0"></NavDropdown>
                </div>
                <p className="premium text-decoration-underline d-none d-md-flex fs-6 ms-3 mt-1">
                    Fatti assumere più velocemente. <br />
                    Prova Premium gratis.
                </p>
                <Nav.Link className="d-flex d-md-none">
                    <IoMdSettings className="icons-navbar" />
                </Nav.Link>

            </Navbar>
        </>

    );
}

export default MyNav;