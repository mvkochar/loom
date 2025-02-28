import { Route, Routes } from "react-router-dom"
import { Contact, Home, Products } from "../pages"

const Main = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<Home />}
      />
      <Route
        path="products"
        element={<Products />}
      />
      <Route
        path="contact"
        element={<Contact />}
      />
    </Routes>
  )
}

export default Main