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
    </Carousel>
  )
}
export default CarouselGroup
