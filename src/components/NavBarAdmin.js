import React from "react";
import "../css/App.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavBarAdmin = () => {
    return (
        <Navbar expand="lg" bg="dark" data-bs-theme="dark" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="/registerEmployee">
                    <img
                        alt=""
                        src="./logo.png"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{" "}
                    SafeDriver
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/registerEmployee">
                            Registrar empleado
                        </Nav.Link>
                        
                    </Nav>
                    <Nav.Link href="/BuyPolicy">Comprar poliza</Nav.Link>
                    <Nav.Link href="/AssignAdjuster">AsignacionSiniestros</Nav.Link>
                    <Nav.Link href="/UserPolicies">Ver póliza</Nav.Link>
                </Navbar.Collapse>
                <Nav pullRight>
                    <Nav.Link href="/">Salir</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default NavBarAdmin;
