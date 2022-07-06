import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import NavLink from "react-bootstrap/NavLink";
import "../css/NavBar.css";
import Logo from "../img/logo-lse.png";
import { useTranslation } from 'react-i18next';
import { NavDropdown } from "react-bootstrap";
import i18n from '../i18n';


export default function NavBar() {
    const { t } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    }

    return (
        <Navbar bg="white" expand="lg" className="navBar fixed-top align-items center shadow rounded">
            <Navbar.Brand as={Link} to="/" className="mb-1">
                <img src={Logo} alt="LSE Transcriber logo" className="logo"/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                <Nav className="mr-auto">
                    <NavDropdown title={t('nav.language')} className="nav-links  nav-buttons dd">
                        <NavDropdown.Item onClick={() => changeLanguage('en')}>
                            {t('nav.english')}
                        </NavDropdown.Item>
                        <NavDropdown.Item onClick={() => changeLanguage('es')}>
                            {t('nav.spanish')}
                        </NavDropdown.Item>
                    </NavDropdown>
                    <NavLink as={Link} to="/about" className="nav-links nav-buttons" id="about">
                        {t('nav.about')}
                    </NavLink>
                    <NavLink as={Link} to="/help" className="nav-links  nav-buttons" id="help">
                        {t('nav.help')}
                    </NavLink>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}