import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homePage";
import Vehicles from "./pages/Vehicles";
import Details from "./pages/Details";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
return(
  <>
  <Header/>
  <Routes>
    <Route path="/" element={<HomePage/>}/>
    <Route path="/vehicles" element={<Vehicles/>}/>
    <Route path="/details" element={<Details/>}/>
    <Route path="/about" element={<AboutUs/>}/>
    <Route path="/contact" element={<ContactUs/>}/>
  </Routes>
  <Footer/>
  </>
  
)
}

export default App;
