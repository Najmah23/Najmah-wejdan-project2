import { useContext } from "react"
import ProductContext from "../utils/ProductContext"

function Profile() {
  const { profile } = useContext(ProductContext)
  //   return <h1>{profile.firstName}</h1>
  console.log(profile)
}

export default Profile
