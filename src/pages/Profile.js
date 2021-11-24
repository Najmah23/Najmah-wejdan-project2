import { useContext } from "react"
import { Col, Image, Row } from "react-bootstrap"
import ProductContext from "../utils/ProductContext"
import { GiCharacter } from "react-icons/gi"
import CardItem from "../components/CardItem"
function Profile() {
  const { profile, Items } = useContext(ProductContext)
  if (!profile) return <h1 className="textPro">LOAGING...</h1>

  const myfavorite = Items.filter(Item => Item._user._id === profile._id)
  console.log(profile)
  console.log(Items)
  return (
    <>
      <div className="backpro">
        <Col xs={6} md={4}>
          <Image width="80px" src={profile.photo} className="photo" roundedCircle />
        </Col>

        <h1 className="textPro">My account</h1>
        <h5 className="pPro">Welcome back,{profile.firstName}!</h5>
      </div>
      <h1 className="Wishlist">Wishlist</h1>
      <p className="MyWishlist">My Wishlist</p>
      <p className="MyWishlist2">
        <p className="emailicon">
          <GiCharacter />
          {profile.email}
        </p>
        _________________________________________________________________________________________________________________
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
