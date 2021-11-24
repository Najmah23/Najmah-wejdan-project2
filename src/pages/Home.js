import { Col, Row, Image } from "react-bootstrap"
import img33 from "../images/img33.jpeg"
import img34 from "../images/img34.jpeg"
import img24 from "../images/img24.jpeg"
import img55 from "../images/img55.jpeg"
import img22 from "../images/img28.jpeg"
import { Link } from "react-router-dom"
import CarouselGroup from "../components/CarouselGroup"

function Home() {
  return (
    <div className="homediv mx-auto">
      <CarouselGroup />
      <Link to="/makeup" className="bouttn2">
        GET PRODUCT
      </Link>
      <Row>
        <Col>
          <Row className="images g-3">
            <Col>
              <Image src={img34} className="img25" />
            </Col>
            <Col>
              <Image src={img33} className="img30" />
            </Col>
          </Row>
        </Col>

        <Col>
          <Image src={img24} className="img24" />
        </Col>

        <Col>
          <Row className="images g-3">
            <Col>
              <Image src={img55} className="img27" />
            </Col>
            <Col>
              <Image src={img22} className="img22" />
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  )
}

export default Home
