import { useContext } from "react"
import { Col, Image, Row } from "react-bootstrap"
import ProductContext from "../utils/ProductContext"
import { GiCharacter } from "react-icons/gi"
import CardItem from "../components/CardItem"

function Profile() {
  const { profile, Items } = useContext(ProductContext)

  if (!profile) return <h1 className="textPro1">LOAGING...</h1>

  const myfavorite = Items.filter(Item => Item._user._id === profile._id)

  return (
    <>
      <Row>
        <Col xs={6} md={2}>
          <Image width="80px" src={profile.photo} className="photo" roundedCircle />
        </Col>
        <Col className="mt-5 ms-4 mb-5">
          <h1 className="textPro">My account</h1>
          <h5 className="pPro">Welcome back,{profile.firstName}!</h5>
        </Col>
      </Row>

      <h1 className="Wishlist">Wishlist</h1>
      <p className="MyWishlist">My Wishlist</p>
      <p className="MyWishlist2">
        <p className="emailicon">
          <GiCharacter />
          {profile.email}
        </p>
        ____________________________________________________________________________________________________________________
      </p>
      <Row md={4} sm={2} xs={1}>
        {myfavorite.map(Item => (
          <CardItem Item={Item} />
        ))}
      </Row>
    </>
  )
}
export default Profile
