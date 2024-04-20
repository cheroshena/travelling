import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import AboutUs from "./Base/AboutUs";
import Destinations from "./Base/Destinations";
import Transportation from "./Base/Transportaion";
import Accomadations from "./Base/Accomadations";
import Contact from "./Base/Contact";
import Gallery from "./Base/Gallery";





function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<AboutUs/>}/>
          <Route path="/destination" element={<Destinations/>}/>
          <Route path="/transportation" element={<Transportation/>}/>
          <Route path="/accomadation" element={<Accomadations/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/gallery" element={<Gallery/>}/>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
