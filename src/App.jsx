import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Tests from "./components/Tests";
import Hospitals from "./components/Hospitals";
import Doctors from "./components/Doctors";
import HowItWorks from "./components/HowItWorks";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Tests />
      <Hospitals />
      <Doctors />
      <HowItWorks />
      <Testimonials />
      <CTA />
      <Footer />
    </>
  );
}

export default App;