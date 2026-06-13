import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import DoctorsPage from "./pages/DoctorsPage";
import HospitalsPage from "./pages/HospitalsPage";
import TestsPage from "./pages/TestsPage";
import About from "./pages/About";
import DoctorDetails from "./pages/DoctorDetails";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/signup" element={<Signup />} />

        <Route path="/doctors" element={<DoctorsPage />} />

        <Route path="/hospitals" element={<HospitalsPage />} />

        <Route path="/tests" element={<TestsPage />} />

        <Route path="/about" element={<About />} />

        <Route path="/doctors" element={<DoctorsPage />} />

        <Route path="/doctor-details" element={<DoctorDetails />}/> 
        
      </Routes>

      <Footer />

    </BrowserRouter>
  );
}

export default App;