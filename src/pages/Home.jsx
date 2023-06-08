import Embrace from "../components/Embrace/Embrace";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import NavBar from "../components/NavBar/NavBar";
import OurServices from "../components/OurServices/OurServices";
import VendorReg from "../components/VendorReg/VendorReg";

const Home = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <Embrace />
      <OurServices />
      <VendorReg/>
      <Footer />
    </div>
  );
};
export default Home;
