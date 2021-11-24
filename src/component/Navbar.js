import { useContext } from "react"
import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap"
import { Link } from "react-router-dom"
import ProductContext from "../utils/ProductContext"

function NavbarItem() {
  const { logout } = useContext(ProductContext)
  return (
    <Navbar bg="light" expand={false}>
      <Container fluid>
        <h1 className="logo">MAKEUP</h1>

        <Navbar.Toggle aria-controls="offcanvasNavbar" />
        <Navbar.Offcanvas id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" placement="end">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel"></Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Link className="navbar-brand" to="/">
                HOME
              </Link>
              <Link className="navbar-brand" to="/makeup">
                MAKEUP
              </Link>
              {localStorage.tokenProduct ? (
                <Link className="navbar-brand" to="/profile">
                  PROFILE
                </Link>
              ) : null}

              {localStorage.tokenProduct ? (
                <Link className="navbar-brand" to="/" onClick={logout}>
                  LOGOUT
                </Link>
              ) : (
                <>
                  <Link className="navbar-brand" to="/signup">
                    SIGNUP
                  </Link>
                  <Link className="navbar-brand" to="/login">
                    LOGIN
                  </Link>
                </>
              )}
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  )
}

export default NavbarItem
