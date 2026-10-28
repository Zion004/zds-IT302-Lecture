import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function MyNavigationBar() {
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Navbar.Brand>Zion D. Scott (zds)</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Item>Check Out</Nav.Item>
        </Nav>
      </Navbar>
    </div>
  );

}

export default MyNavigationBar;