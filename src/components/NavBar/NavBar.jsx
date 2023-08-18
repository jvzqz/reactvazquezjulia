import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../CartWidget/CartWidget';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={NavLink} to='/'href="#home">Uva y cuajo - Eventos y vinos</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to='/'> Inicio </Nav.Link>
            <Nav.Link as={NavLink} to='/category/tintos'>Tintos</Nav.Link>
            <Nav.Link as={NavLink} to='/category/blancos'>Blancos</Nav.Link>
            <Nav.Link as={NavLink} to='/category/rosados'>Rosados</Nav.Link>
            <Nav.Link to='/cart'><CartWidget/></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;