import { Routes, Route, Navigate } from "react-router"
import WrapPage from "./WrapPage"
import ReduxLayout from "./layouts/ReduxLayout"
import Content from "./pages/Content"
import StateArray from "./pages/StateArray"
import StateArrayEntry from "./pages/StateArrayEntry"
import StateObject from "./pages/StateObject"
import StateObjectEntry from "./pages/StateObjectEntry"
import ApiArray from "./pages/ApiArray"
import ApiArrayEntry from "./pages/ApiArrayEntry"
import ApiObject from "./pages/ApiObject"
import ApiObjectEntry from "./pages/ApiObjectEntry"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/redux" replace />} />

      <Route path="/" element={<WrapPage/>}>

        <Route path="/redux" element={<ReduxLayout/>}>
          <Route index element={<Content/>}/>

        </Route>

        <Route path="/state-array" element={<StateArray/>}/>
        <Route path="/state-array-entry"  element={<StateArrayEntry/>}/>     
        <Route path="/state-array-update/:id"  element={<StateArrayEntry isUpdate/>}/>

        <Route path="/state-object" element={<StateObject/>}/>
        <Route path="/state-object-entry"  element={<StateObjectEntry/>}/>     
        <Route path="/state-object-update/:id"  element={<StateObjectEntry isUpdate/>}/>

        <Route path="/api-array" element={<ApiArray/>}/>      
        <Route path="/api-array-entry" element={<ApiArrayEntry/>}/>
        <Route path="/api-array-update/:id" element={<ApiArrayEntry isUpdate/>}/>

        <Route path="/api-object" element={<ApiObject/>}/>      
        <Route path="/api-object-entry" element={<ApiObjectEntry/>}/>
        <Route path="/api-object-update/:id" element={<ApiObjectEntry isUpdate/>}/>              

      </Route>
    </Routes>
  )
}

export default App