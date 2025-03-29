import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavbarBs from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './navbar.css';

function Navbar() {
  return (
 
    <NavbarBs bg="dark" data-bs-theme="dark">
      <Container>
        <NavbarBs.Brand href="#home">Tienda</NavbarBs.Brand>
        <Nav className="nav-container justify-content-evenly">
          <Nav.Item>
            {/* Link es un componente de react-router-dom que sirve para poder crear enlaces */}
            {/* aca se esta creando un enlace a la ruta / que es la ruta principal */}
            <Link to="/" className="nav-link">Home</Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="/create" className="nav-link">Crear</Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="/show" className="nav-link"> Listar</Link>
          </Nav.Item>
        </Nav>
      </Container>
    </NavbarBs>

  );
}

export default Navbar
