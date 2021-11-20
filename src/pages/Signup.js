import Button from "@restart/ui/esm/Button"
import { useContext } from "react"
import { Form, Row } from "react-bootstrap"
import ProductContext from "../utils/ProductContext"

function Signup() {
  const { signup } = useContext(ProductContext)

  return (
    <Form onSubmit={signup}>
      <h1 className="Myheader">Register</h1>
      <p className="pLogin1">Please fill in the information below:</p>
      <Row sm="3" className="  p-3 ms-5 me-1  d-flex justify-content-center">
        <Form.Group as={Row} controlId="formGridEmail" sm="7">
          <Form.Control type="text" name="firstName" required placeholder="first name" />
        </Form.Group>
      </Row>
      <Row sm="3" className="  p-3 ms-5 me-1   d-flex justify-content-center">
        <Form.Group as={Row} controlId="formGridEmail" sm="7">
          <Form.Control type="text" name="lastName" required placeholder="Last name" />
        </Form.Group>
      </Row>
      <Row sm="3" className="  p-3 ms-5 me-1  d-flex justify-content-center">
        <Form.Group as={Row} controlId="formGridEmail" sm="7">
          <Form.Control type="email" name="email" required placeholder="Email" />
        </Form.Group>
      </Row>
      <Row sm="3" className=" p-3 ms-5 me-1  d-flex justify-content-center">
        <Form.Group as={Row} controlId="formGridPassword" sm="7">
          <Form.Control type="password" name="password" required placeholder="Password" />
        </Form.Group>
      </Row>
      <Row sm="3" className="  p-3 ms-5 me-1  d-flex justify-content-center">
        <Form.Group as={Row} controlId="formGridEmail" sm="7">
          <Form.Control type="url" name="photo" required placeholder="photo" />
        </Form.Group>
      </Row>
      <Button variant="primary" type="submit" className="butLogin2">
        CREATE MY ACCOUNT
      </Button>
      <p className="unLogin">
        Already have an account? <a href="/login">Sign In</a>{" "}
      </p>
    </Form>
  )
}

export default Signup
