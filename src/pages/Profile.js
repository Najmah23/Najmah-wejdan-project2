import { useContext } from "react"
import ProductContext from "../utils/ProductContext"
import { Col, Image } from "react-bootstrap"
function Profile() {
  const { profile } = useContext(ProductContext)
  return (
    <>
      <h1>{profile.firstName}</h1>
      <Col xs={6} md={4}>
        <Image width="150px" src={profile.photo} roundedCircle />
      </Col>
    </>
  )
}

export default Profile
