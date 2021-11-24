import Button from "@restart/ui/esm/Button"
import { useContext } from "react"
import { Card, Row } from "react-bootstrap"
import ProductContext from "../utils/ProductContext"

function CardItem(props) {
  const { Item } = props
  console.log(Item._id)
  const { deleteProduct } = useContext(ProductContext)
  return (
    <Row xs={1} md={2} className="g-2 ms-5 mt-2 me-5 p-5">
      <Card style={{ width: "18rem" }} className="Cardfount">
        
        <Card.Img variant="top" src={Item.image} />
        <Card.Body>
          <Card.Text className="Cardfount">
            <p> {Item.title}</p>
          </Card.Text>
          <Button onClick={() => deleteProduct(Item._id)} className="bouttn">DELETE</Button>
        </Card.Body>
      </Card>
    </Row>
  )
}

export default CardItem
