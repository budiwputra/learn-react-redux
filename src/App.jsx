import { Routes, Route } from "react-router"
import WrapPage from "./WrapPage"
import Home from "./pages/Home"
import Detail from "./pages/Detail"
import ReduxLayout from "./layouts/ReduxLayout"
import Content from "./pages/Content"
import Product from "./pages/Product"
import ProductEntry from "./pages/ProductEntry"
import Api from "./pages/Api"
import EntryApi from "./pages/EntryApi"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<WrapPage/>}>

        <Route index element={<Home/>}/>
        <Route path="/detail" element={<Detail/>}/>
        <Route path="/redux" element={<ReduxLayout/>}>
          <Route index element={<Content/>}/>               
        </Route>

        <Route path="/product" element={<Product/>}/>
        <Route path="/product-entry"  element={<ProductEntry/>}/>
        <Route path="/product-update/:id"  element={<ProductEntry isUpdate/>}/>
        <Route path="/api" element={<Api/>}/>      
        <Route path="/entry-api" element={<EntryApi/>}/>
        <Route path="/update-api/:id" element={<EntryApi isUpdate/>}/>            

      </Route>
    </Routes>
  )
}

export default App