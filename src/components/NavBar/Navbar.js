import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import {Link} from "react-router-dom";

export default function NavBar() {
    return (
        <Navbar expand="lg" variant="light" bg="light">
            <Container>
                <Navbar.Brand href="/">Databases</Navbar.Brand>
                <Nav className="mr-auto">
                    <Link to="/endpoints">Endpoints</Link>
                    {/*<Link to="/tables">Tables</Link>*/}
                    {/*<Link to="/items">Items</Link>*/}
                </Nav>
            </Container>
        </Navbar>
    );
}