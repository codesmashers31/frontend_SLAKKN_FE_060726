import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import About from "./pages/About"
import Contect from "./pages/Contect"
import Help from "./pages/Help"
import Services from "./pages/Services"
import ServiceHelp from "./pages/ServiceHelp"


const App = () => {
  return (
    <>
    

    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}  />
      <Route path="/about" element={<About/>}  />
      <Route path="/contact" element={<Contect/>}  />
      <Route path="/help" element={<Help/>}  />
      <Route path="/services" element={<Services/>}  />
      <Route path="/ss" element={<ServiceHelp/>}  />
    </Routes>
  
    </>
  )
}

export default App