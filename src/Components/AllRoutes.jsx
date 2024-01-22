import { Routes, Route } from "react-router-dom";
import Store from "./Store";
import About from "./About";
import Home from "./Home";
import ContactUsPage from "./ContactUsPage";



export default function AllRoutes() {
  return (
    <Routes>

      <Route path="/" element={<Home />} />
      <Route path="/store" element={<Store />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<ContactUsPage />} />

    </Routes>
  );
}
