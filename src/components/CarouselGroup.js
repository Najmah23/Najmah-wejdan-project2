import { Carousel, Col, Row } from "react-bootstrap"
import vid4 from "../images/vid4.mp4"
import vid6 from "../images/vid6.mp4"
import vid7 from "../images/vid7.mp4"
function CarouselGroup() {
  return (
    <Row>
      <Col md="8" className="mx-auto mt-5 w-200">
        <Carousel>
          <Carousel.Item>
            <video className="d-block w-50  mx-auto" src={vid7} autoPlay muted loop />
          </Carousel.Item>
          <Carousel.Item>
            <video className="d-block w-50 mx-auto" src={vid6} autoPlay muted loop />
          </Carousel.Item>
          <Carousel.Item>
            <video className="d-block w-50 mx-auto" src={vid4} autoPlay muted loop />
          </Carousel.Item>
        </Carousel>
      </Col>
    </Row>
  )
}
export default CarouselGroup
