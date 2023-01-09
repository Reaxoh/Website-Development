import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css'

function NavBarList() {
    return (
        <div>
            <Navbar collapseOnSelect fixed="top" expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Brand>Close</Navbar.Brand>
                    <Navbar.Toggle aria-controls='responsive-navbar' />
                    <Navbar.Collapse id='responsive-navbar'>
                        <Nav className='me-auto'>
                            <NavDropdown id='nav-man-dropdown' title='Man' className='m-2'>
                                <NavDropdown.Item href="">上衣</NavDropdown.Item>
                                <NavDropdown.Item href="">下身</NavDropdown.Item>
                            </NavDropdown>
            
                            <NavDropdown id='nav-man-dropdown' title='Women' className='m-2'>
                                <NavDropdown.Item href="">上衣</NavDropdown.Item>
                                <NavDropdown.Item href="">下身</NavDropdown.Item>
                            </NavDropdown>

                            <NavDropdown id='nav-man-dropdown' title='Baby' className='m-2'>
                                <NavDropdown.Item href="">上衣</NavDropdown.Item>
                                <NavDropdown.Item href="">下身</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        
                        <Nav>
                            <Nav.Link href="">我的最愛</Nav.Link>
                            <Nav.Link href="">購物車</Nav.Link>
                            <Nav.Link href="">登入</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default NavBarList