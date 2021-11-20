import Button from "@restart/ui/esm/Button"
import { useContext } from "react"
import { Form, Row } from "react-bootstrap"
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

      <Button variant="primary" type="submit" className="butLogin">
        LOGIN
      </Button>
      <p className="unLogin">
        Don't have an account? <a href="/signup">Create one</a>
      </p>
    </Form>
  )
}

export default Login