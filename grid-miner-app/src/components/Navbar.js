import React from "react"
import {Navbar, Nav, NavDropdown, Container, Button} from 'react-bootstrap';

export default function NavComponent() {
    return (
        <>
        <Navbar bg="light" expand="lg">
            <Container>               
                <Navbar.Brand href="#home">
                                            Crypto Grid
                                            <img src="./airbnb-logo.png" className="nav--logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link href="#home">Guides</Nav.Link>
                    <Nav.Link href="#link">Community</Nav.Link>
                    <Nav.Link href="#link">Governance</Nav.Link>
                    <Nav.Link href="#link">Blog</Nav.Link>
                    <Nav.Link href="#link">FAQ</Nav.Link>
                    <Button className="rounded-3">Launch App</Button>
                    {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown> */}
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        {/* <nav>
            
        </nav> */}
        </>
    )
}