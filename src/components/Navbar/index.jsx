
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CardWidget from '../CartWidget';

import './index.css';
const NavbarComponent = () =>{
    return (
    <>
        <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
        <Navbar.Brand href="#home">Gyrokinesis</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
        <Nav.Link href="#home">Inicio</Nav.Link>

        <Nav.Link href="#home"><CardWidget /></Nav.Link>
            <NavDropdown title="Productos..." id="collasible-nav-dropdown">
                <NavDropdown.Item href="#categoria1">categoria1</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#categoria2">categoria2</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#categoria3">categoria3</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#contactos">Contactos</Nav.Link>
        </Nav>
    </Navbar.Collapse>
    </Navbar>
    </>
);
}

export default NavbarComponent;