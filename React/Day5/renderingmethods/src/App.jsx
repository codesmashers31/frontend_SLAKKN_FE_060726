import { Route, Routes } from "react-router-dom"
import NavBar from "./components/NavBar"
import Home from "./pages/Home"
import ABout from "./pages/ABout"


const App = () => {
  return (
    <>
     <NavBar/>
     <Routes>
      <Route  path="/" element={<Home/>}  />
      <Route  path="/about" element={<ABout/>}  />
     </Routes>
    </>
  )
}

export default App