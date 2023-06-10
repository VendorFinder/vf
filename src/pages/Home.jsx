import ContactForm from "../components/ContactForm/ContactForm";
import Embrace from "../components/Embrace/Embrace";

import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import HowItWorks from "../components/HowItWorks/HowItWorks.JSX";
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
      <HowItWorks />
      <ContactForm />
      <VendorReg />
      <Footer />
    </div>
  );
};
export default Home;
