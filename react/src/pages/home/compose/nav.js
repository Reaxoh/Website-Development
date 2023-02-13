import React from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css'

import { HandbagFill} from "react-bootstrap-icons";
import { HeartFill } from "react-bootstrap-icons";
import { CartFill } from "react-bootstrap-icons";
import { PersonFill } from "react-bootstrap-icons"

import { Link } from "react-router-dom";

function NavBarList() {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Brand>
                        <Link to="/">
                            <HandbagFill  className='pb-2' size={30}/> Clothes
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls='responsive-navbar' />
                    <Navbar.Collapse id='responsive-navbar'>
                        <Nav className='me-auto'>
                            <NavDropdown id='nav-man-dropdown' title='Man' className='m-2'>
                                <NavDropdown.Item href="">上身</NavDropdown.Item>
                                <NavDropdown.Item href="">下身</NavDropdown.Item>
                            </NavDropdown>
            
                            <NavDropdown id='nav-man-dropdown' title='Women' className='m-2'>
                                <NavDropdown.Item href="">上身</NavDropdown.Item>
                                <NavDropdown.Item href="">下身</NavDropdown.Item>
                            </NavDropdown>

                            <NavDropdown id='nav-man-dropdown' title='Baby' className='m-2'>
                                <NavDropdown.Item href="">上身</NavDropdown.Item>
                                <NavDropdown.Item href="">下身</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        
                        <Nav> 
                            <Nav.Link href='' className='m-2'>
                                <HeartFill size={30} className='mb-2'/>
                            </Nav.Link>
                            <Nav.Link href='' className='m-2'>
                                <CartFill size={30} className='mb-2'/>
                            </Nav.Link>
                            <Nav.Link  href='' className='m-2'>
                                <Link to="/auth">
                                    <PersonFill size={30} className='mb-2'/>
                                </Link>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default NavBarList