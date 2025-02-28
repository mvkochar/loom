import { Route, Routes } from "react-router-dom"
import { Home, Products } from "../pages"

const Main = () => {
  return (
    <Routes>
        <Route
            path="/"
            element={<Home/>}
        />
        <Route
          path="products"
          element={<Products/>}
        />
    </Routes>
  )
}

export default Main