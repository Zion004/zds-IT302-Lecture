import "bootstrap/dist/css/bootstrap.min.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';

function MyNavigationBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand>Zion Scott (zds)</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to={"/"}>Home</Nav.Link>
            <Nav.Link as={NavLink} to={"/bookshelf"}>Bookshelf</Nav.Link>
            <NavDropdown title="External Links" id="basic-nav-dropdown">
              <NavDropdown.Item href="https://www.njit.edu" target="_blank">NJIT</NavDropdown.Item>
              <NavDropdown.Item href="https://njit.instructure.com" target="_blank">Canvas</NavDropdown.Item>
              <NavDropdown.Item href="https://github.com" target="_blank">GitHub</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="https://react-bootstrap.netlify.app" target="_blank">React-Bootstrap</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavigationBar;