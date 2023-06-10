import ContactForm from "../components/ContactForm/ContactForm";
import Embrace from "../components/Embrace/Embrace";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import HowItWork from "../components/HowItWorks/HowItIWork";
import NavBar from "../components/NavBar/NavBar";
import OurServices from "../components/OurServices/OurServices";
import Testimonials from "../components/Testimonials/Testimonials";
import VendorReg from "../components/VendorReg/VendorReg";
import WhyUs from "../components/WhyUs/WhyUs";

const Home = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <Embrace />
      <OurServices />
      <WhyUs />
      <Testimonials />
      <HowItWork />
      <ContactForm />
      <VendorReg />
      <Footer />
    </div>
  );
};
export default Home;
