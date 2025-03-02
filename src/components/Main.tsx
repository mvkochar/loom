import { Route, Routes } from "react-router-dom"
import { Contact, Home, Products, ProductsOpen } from "../pages"

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
      <Route
        path="products-open"
        element={<ProductsOpen/>}
      />
    </Routes>
  )
}

export default Main