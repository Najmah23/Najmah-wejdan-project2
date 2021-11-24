import axios from "axios"
import { useEffect, useState } from "react"
import { Route, Routes, useNavigate } from "react-router"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import ProductContext from "./utils/ProductContext"
import "./App.css"
import Profile from "./pages/Profile"
import Makeup from "./pages/Makeup"

function App() {
  const [Products, setProduct] = useState([])
  const [Items, setItems] = useState([])
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
    getItems()
    if (localStorage.tokenProduct) {
      getProfile()
    }
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
      const tokenProduct = response.data
      localStorage.tokenProduct = tokenProduct
      navigate("/makeup")
    } catch (error) {
      console.log(error.response.data)
    }
  }
  const logout = () => {
    localStorage.removeItem("tokenProduct")
  }

  const addfavorite = async productId => {
    try {
      const product = Products.find(product => product.id === productId)
      const productBody = {
        title: product.brand,
        description: product.description,
        image: product.image_link,
      }
      console.log(productBody)
      console.log(product)
      await axios.post("https://vast-chamber-06347.herokuapp.com/api/v2/makeup-984/items", productBody, {
        headers: {
          Authorization: localStorage.tokenProduct,
        },
      })
      getItems()
      getProfile()
      navigate("/profile")
    } catch (error) {
      console.log(error.response.data)
    }
  }
  const getProfile = async () => {
    try {
      const response = await axios.get("https://vast-chamber-06347.herokuapp.com/api/user/me", {
        headers: {
          Authorization: localStorage.tokenProduct,
        },
      })
      console.log(response.data)
      setProfile(response.data)
    } catch (error) {
      console.log(error?.response?.data)
    }
  }
  const getItems = async () => {
    try {
      const response = await axios.get("https://vast-chamber-06347.herokuapp.com/api/v2/makeup-984/items")
      setItems(response.data)
    } catch (error) {
      console.log(error?.response?.data)
    }
  }
  const deleteProduct = async productId => {
    console.log(productId)
    try {
      await axios.delete(`https://vast-chamber-06347.herokuapp.com/api/v2/makeup-984/items/${productId}`, {
        headers: {
          Authorization: localStorage.tokenProduct,
        },
      })

      getItems()
    } catch (error) {
      console.log(error?.response?.data)
    }
  }

  const store = {
    Products: Products,
    signup: signup,
    login: login,
    logout: logout,
    profile: profile,
    addfavorite: addfavorite,
    Items: Items,
    deleteProduct: deleteProduct,
  }
  return (
    <>
      <ProductContext.Provider value={store}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/makeup" element={<Makeup />} />
        </Routes>
      </ProductContext.Provider>
    </>
  )
}

export default App
