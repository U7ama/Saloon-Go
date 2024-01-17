import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../images/logo/logo.png";
import { Button, Dropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./navbar.css";

function NavBar() {
  return (
    <>
      <Navbar expand="lg" className="py-3">
        <Container>
          <Navbar.Brand href="#" className="me-lg-5"></Navbar.Brand>

          <div className="d-flex align-items-center order">
            {/* <Navbar.Toggle aria-controls="navbarScroll" /> */}
            <Navbar.Collapse id="navbarScroll">
              <Nav.Link className="px-lg-3">Get Your Free Listing</Nav.Link>

              <Nav.Link className="px-lg-3">Book Now</Nav.Link>

              <Nav.Link className="px-lg-3">
                <i className="fa-brands fa-rocketchat"></i> Chat Now
              </Nav.Link>
              <Button
                variant="primary"
                className="custom-btn-color d-none d-lg-inline-block"
              >
                <i className="fa-solid fa-right-to-bracket"></i> Login
              </Button>
            </Navbar.Collapse>
          </div>
        </Container>
      </Navbar>
      <Navbar expand="lg" className="py-3">
        <Container>
          <Navbar.Brand href="#" className="me-lg-5">
            <img className="logo w-25" src={logo} alt="logo" />
          </Navbar.Brand>

          <div className="d-flex align-items-center order">
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav className="me-auto my-2 my-lg-0" navbarScroll>
                <Nav.Link>Why Saloon Go</Nav.Link>
                <Dropdown as={Nav.Item} className="px-lg-3">
                  <Dropdown.Toggle as={Nav.Link}>Free Tools</Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="#action/3.1">
                      Register as User
                    </Dropdown.Item>
                    <Dropdown.Item href="#action/3.2">
                      Register as Seller
                    </Dropdown.Item>
                    <Dropdown.Item href="#action/3.3">
                      Get you free listing
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <Nav.Link>Contact Us</Nav.Link>
                <Nav.Link>Blogs</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
