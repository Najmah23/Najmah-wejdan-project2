import { useContext } from "react"
import { Card, Row } from "react-bootstrap"
import ProductContext from "../utils/ProductContext"
import { FcLike } from "react-icons/fc"

function CardProduct(props) {
  const { Products, addfavorite } = useContext(ProductContext)
  const { handleShow } = props

  return (
    <Row xs={2} md={3} className="g-5 ms-5 mt-2 me-2 p-5 mx-auto">
      {Products.map(product => (
        <Card style={{ width: "18rem" }} className="Cardfount">
          <span
            onClick={() => {
              if (localStorage.tokenProduct) {
                addfavorite(product.id)
              } else {
                handleShow()
              }
            }}
          >
            <FcLike className="icon" />
          </span>
          <Card.Img variant="top" src={product.image_link} />
          <Card.Body>
            <Card.Text className="Cardfount">
              <p> {product.name}</p>
            </Card.Text>
            <Card.Title className="Cardfount">{product.brand}</Card.Title>
            <Card.Text className="Cardfount">
              <p> {product.price} $</p>
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
    </Row>
  )
}

export default CardProduct
