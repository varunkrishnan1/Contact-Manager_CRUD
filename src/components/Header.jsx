import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FcContacts } from "react-icons/fc";


const Header = () => {
  return (
    <div>
    <Navbar expand="lg" className="bg-dark">
      <Container>
        <div className='fs-3'><FcContacts /></div>  <Navbar.Brand className='mt-2 fw-bold text-light' href="#home">Contact Manager CRUD Web App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Header