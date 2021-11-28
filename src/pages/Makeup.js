import { useState } from "react"
import { Modal } from "react-bootstrap"
import CardProduct from "../components/CardProduct"

function Makeup() {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  return (
    <>
      <CardProduct handleShow={handleShow} />
      <>
        <Modal show={show} onHide={handleClose} className="modle">
          <Modal.Header closeButton>
            <Modal.Title>MUKEUP</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            oh,TO LIKE THE PRODUCT U MUST <a href="/login">Sign In</a> OR <a href="/signup">Create one</a> !
          </Modal.Body>
        </Modal>
      </>
    </>
  )
}

export default Makeup
