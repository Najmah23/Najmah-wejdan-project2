import { useContext } from "react"
import { Carousel } from "react-bootstrap"
import ProductContext from "../utils/ProductContext"
function CarouselGroup() {
  const { Products } = useContext(ProductContext)
  return (
    <Carousel className="d-flex justify-content-center w-80 mx-auto mt-5" variant="dark">
      {Products.map(product => (
        <Carousel.Item>
          <img className="d-block  w-40" src={product.image_link} />
          <Carousel.Caption>
            <h4 className="w-60 mx-2">{product.name}</h4>
            <p>{product.brand}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  )
}
export default CarouselGroup
