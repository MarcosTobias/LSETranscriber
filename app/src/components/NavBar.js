import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import NavLink from "react-bootstrap/NavLink";
import "../css/NavBar.css";
import Logo from "../img/logo-lse.png";


export default function NavBar() {
    return (
        <Navbar bg="white" expand="lg" className="navBar fixed-top align-items center shadow rounded">
            <Navbar.Brand as={Link} to="/" className="mb-1">
                <img src={Logo} alt="LSE Transcriber logo" className="logo"/>
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                <Nav className="mr-auto">
                    <NavLink as={Link} to="/about" className="nav-links">
                        About
                    </NavLink>
                    <NavLink as={Link} to="/help" className="nav-links">
                        Help
                    </NavLink>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}