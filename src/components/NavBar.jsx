import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./NavBar.css";

const NavBar = () => {
  return (
    <Navbar expand="xl" className="navbar" variant="dark">
      <Container>
        <Navbar.Brand className="ms-3 fw-bold" href="/">
          Xpander
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="d-flex ms-auto gap-3">
            <Nav.Link href="/">Home</Nav.Link>
            <NavDropdown title="Research Groups" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Citations" id="basic-nav-dropdown">
              {/* ... (keep the same dropdown items) ... */}
            </NavDropdown>
            <NavDropdown title="Credits" id="basic-nav-dropdown">
              {/* ... (keep the same dropdown items) ... */}
            </NavDropdown>
            <NavDropdown title="Repositories" id="basic-nav-dropdown">
              {/* ... (keep the same dropdown items) ... */}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;