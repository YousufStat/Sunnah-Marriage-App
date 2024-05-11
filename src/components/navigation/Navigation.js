import React from 'react';
import Container from 'react-bootstrap/Container';
import "../../assest/css/custom.css";
import "../../assest/css/responsive.css";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <Navbar className="navimain" collapseOnSelect expand="lg">
      <Container>
        <Navbar.Brand to="home"><Nav.Link><NavLink to="/home">সুন্নাহ মেরেজ</NavLink></Nav.Link></Navbar.Brand>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
        
          </Nav>
          <Nav>
            <Nav.Link><NavLink to="/question">প্রশ্ন ও উত্তর</NavLink></Nav.Link>
            <Nav.Link><NavLink to="/about">আমাদের সম্পর্কে</NavLink></Nav.Link>
            <Nav.Link><NavLink to="/contact">যোগাযোগ</NavLink></Nav.Link>

            <Nav.Link> <NavLink eventKey={2} to="/login">
            লগইন করুন
            </NavLink></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;