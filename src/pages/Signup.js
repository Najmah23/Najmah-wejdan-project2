import Button from "@restart/ui/esm/Button"
import { useContext } from "react"
import { Col, Form, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import ProductContext from "../utils/ProductContext"
function Signup() {
  const { signup } = useContext(ProductContext)
  return (
    <Form onSubmit={signup}>
      <h1 className="Myheader">Register</h1>
      <p className="pLogin1">Please fill in the information below:</p>
      <Row sm="3" className=" p-1 d-flex justify-content-center">
        <Form.Group as={Row} controlId="formGridEmail" sm="7">
          <Form.Control type="text" name="firstName" required placeholder="first name" />
        </Form.Group>
      </Row>
      <Row sm="3" className="p-1 d-flex justify-content-center">
        <Form.Group as={Row} controlId="formGridEmail" sm="7">
          <Form.Control type="text" name="lastName" required placeholder="Last name" />
        </Form.Group>
      </Row>
      <Row sm="3" className="  p-1  d-flex justify-content-center">
        <Form.Group as={Row} controlId="formGridEmail" sm="7">
          <Form.Control type="email" name="email" required placeholder="Email" />
        </Form.Group>
      </Row>
      <Row sm="3" className=" p-1  d-flex justify-content-center">
        <Form.Group as={Row} controlId="formGridPassword" sm="7">
          <Form.Control type="password" name="password" required placeholder="Password" />
        </Form.Group>
      </Row>
      <Row sm="3" className="  p-1 d-flex justify-content-center">
        <Form.Group as={Row} controlId="formGridEmail" sm="7">
          <Form.Control type="url" name="photo" required placeholder="photo" />
        </Form.Group>
      </Row>
      <Row>
        <Col md="4" className="mx-auto mt-3">
          <Button type="submit" className="butSignup">
            CREATE MY ACCOUNT
          </Button>
        </Col>
      </Row>
      <p className="unLogin">
        Already have an account? <Link to="/login">Sign In</Link>
      </p>
    </Form>
  )
}
export default Signup
