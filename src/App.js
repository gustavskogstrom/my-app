import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Services from "./pages/services/services";
import Contact from "./pages/contact/contact";

import Home from "./pages/home/home";
import Header from "./components/shared/header/header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
