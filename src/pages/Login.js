import Button from "@restart/ui/esm/Button"
import { useContext } from "react"
import { Col, Form, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import ProductContext from "../utils/ProductContext"

function Login() {
  const { login } = useContext(ProductContext)
  return (
    <Form onSubmit={login}>
      <h1 className="Myheader">Login</h1>
      <p className="pLogin1">Please enter your e-mail and password:</p>
      <Row sm="3" className=" d-flex justify-content-center">
        <Form.Group as={Row} controlId="formGridEmail" sm="7">
          <Form.Control type="email" name="email" required placeholder="Email" />
        </Form.Group>
      </Row>
      <Row sm="3" className=" mt-3  d-flex justify-content-center ">
        <Form.Group as={Row} controlId="formGridPassword" sm="7">
          <Form.Control type="password" name="password" required placeholder="Password" />
        </Form.Group>
      </Row>
      <Row>
        <Col md="4" className="mx-auto mt-3">
          <Button variant="primary" type="submit" className="butLogin">
            LOGIN
          </Button>
        </Col>
      </Row>

      <p className="unLogin">
        Don't have an account? <Link to="/signup">Create one</Link>
      </p>
    </Form>
  )
}

export default Login
