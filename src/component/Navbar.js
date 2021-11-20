import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap"
import { Link } from "react-router-dom"
import styles from "./Goble.module.css"

function NavbarItem() {
  return (
    <Navbar bg="light" expand={false}>
      <Container fluid>
        <div>
          <h1 className={styles.logo}>MAKEUP</h1>
        </div>
        <Navbar.Toggle aria-controls="offcanvasNavbar" />
        <Navbar.Offcanvas id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" placement="end">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel">MAKEUP</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Link className="navbar-brand" to="/">
                HOME
              </Link>
              <Link className="navbar-brand" to="/">
                PROFILE
              </Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  )
}

export default NavbarItem
