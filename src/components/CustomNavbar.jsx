import React, { Component } from 'react'
import {Navbar,Nav,NavItem,Form,NavDropdown,Button,FormControl} from 'react-bootstrap';
import {Link } from 'react-router-dom';
import './CustomNavbar.css'

export default class CustomNavbar extends Component {
    render() {
        return (
         

            <Navbar expand="lg" collapseOnSelect>
            <Navbar.Brand href="#home">Sereal Koding</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav ">
              <Nav className="mr-auto">
                <Nav.Link eventKey={1} componentClass={Link} href="/"  to="/">Home</Nav.Link>
                <Nav.Link eventKey={2} componentClass={Link}  href="/about" to="/about">About</Nav.Link>
                <Nav.Link  eventKey={3} componentClass={Link}  href="/news" to="/news" >News</Nav.Link>
              </Nav>
              {/* <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-success">Search</Button>
              </Form> */}
            </Navbar.Collapse>
          </Navbar>
           
        )
    }
}
