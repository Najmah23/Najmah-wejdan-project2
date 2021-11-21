import { useContext } from "react"
import { Card, Row } from "react-bootstrap"
import ProductContext from "../utils/ProductContext"
// import { IconContext } from "react-icons"
import { FcLike } from "react-icons/fc"
function CardProduct() {
  const { Products } = useContext(ProductContext)

  return (
    // <div className={styles.back}>
    <Row xs={1} md={2} className="g-4 ms-5 mt-5 p-5">
      {Products.map(product => (
        <Card style={{ width: "18rem" }}>
          <a href="">
            <FcLike />
          </a>

          <Card.Img variant="top" src={product.image_link} />
          <Card.Body>
            <Card.Text>
              <p>{product.brand}</p>
            </Card.Text>
            <Card.Title>{product.name}</Card.Title>
          </Card.Body>
        </Card>
      ))}
    </Row>
    // </div>
  )
}

export default CardProduct
