<<<<<<< HEAD
import axios from "axios"
import { useEffect, useState } from "react"
import { Route, Routes, useNavigate } from "react-router"
=======
import CarouselGroup from "./component/CarouselGroup"
>>>>>>> c792b27a6cf57242753c499c3c8f35f5005f5d6d
import Navbar from "./component/Navbar"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import ProductContext from "./utils/ProductContext"
import "./App.css"
import Profile from "./pages/Profile"

function App() {
  const [Products, setProduct] = useState([])
  const [profile, setProfile] = useState(null)

  const navigate = useNavigate()

  const getproducts = async () => {
    try {
      const response = await axios.get("http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline")
      setProduct(response.data)
    } catch (error) {
      console.log(error?.response?.data)
    }
  }
  useEffect(() => { 
    getproducts()
    getProfile()
  }, [])

  const signup = async e => {
    e.preventDefault()
    try {
      const form = e.target
      const userBody = {
        firstName: form.elements.firstName.value,
        lastName: form.elements.lastName.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
        photo: form.elements.photo.value,
      }
      await axios.post("https://vast-chamber-06347.herokuapp.com/api/user", userBody)
      navigate("/login")
    } catch (error) {
      console.log(error?.response?.data)
    }
  }
  const login = async e => {
    e.preventDefault()
    try {
      const form = e.target
      const userBody = {
        email: form.elements.email.value,
        password: form.elements.password.value,
      }
      const response = await axios.post("https://vast-chamber-06347.herokuapp.com/api/user/auth", userBody)
      const tokenPost = response.data
      localStorage.tokenPost = tokenPost
      navigate("/")
    } catch (error) {
      console.log(error.response.data)
    }
  }
  const logout = () => {
    localStorage.removeItem("tokenPost")
  }
  const getProfile = async () => {
    try {
      const response = await axios.get("https://vast-chamber-06347.herokuapp.com/api/user/me", {
        headers: {
          Authorization: localStorage.tokenPost,
        },
      })
      setProfile(response.data)
    } catch (error) {
      console.log(error.response.data)
    }
  }

  const store = {
    Products: Products,
    signup: signup,
    login: login,
    logout: logout,
    profile: profile,
  }
  return (
    <>
<<<<<<< HEAD
      <ProductContext.Provider value={store}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </ProductContext.Provider>
=======
      <Navbar />
      <CarouselGroup />
>>>>>>> c792b27a6cf57242753c499c3c8f35f5005f5d6d
    </>
  )
}

export default App
