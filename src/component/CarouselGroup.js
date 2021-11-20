<<<<<<< HEAD
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
=======
import { Carousel } from "react-bootstrap"
function CarouselGroup() {
  return (
    <Carousel className="d-block w-50 mx-auto mt-5">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/1083822/pexels-photo-1083822.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
>>>>>>> c792b27a6cf57242753c499c3c8f35f5005f5d6d
    </Carousel>
  )
}
export default CarouselGroup
