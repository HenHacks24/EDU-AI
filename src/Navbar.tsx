import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
//import NavDropdown from "react-bootstrap/NavDropdown";
import React from "react";

function NavbarFunction() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">EDU-AI</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        {/* <Nav.Link href="#home">Home</Nav.Link> */}
                        <Nav.Link href="#link">Kindergarten</Nav.Link>
                        <Nav.Link href="#link">Grade 1</Nav.Link>
                        <Nav.Link href="#link">Grade 2</Nav.Link>
                        <Nav.Link href="#link">Grade 3</Nav.Link>
                        <Nav.Link href="#link">Grade 4</Nav.Link>
                        <Nav.Link href="#link">Grade 5</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavbarFunction;
