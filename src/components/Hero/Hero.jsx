// import styles from "./Hero.module.css";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="bg-home-hero h-[85vh] bg-center py-5 md:py-0 pt-0 bg-cover flex flex-col justify-center md:items-center">
      <h1
        className="font-sans text-heading-4 md:text-heading-2 text-neutral md:text-center
       px-4 md:px-0 pt-12 md:pt-40 pb-10 md:pb-20 font-[700] sm:max-w-full max-w-[80%]"
      >
        Find The Right Vendors To <br className="hidden md:inline" /> Make Your
        Event Exceptional
      </h1>

      <div className="md:flex md:justify-center md:items-center px-4 md:px-0">
        <Link to="/categories">
          <button className="btn btn-Primary font-serif">Hire a Vendor</button>
        </Link>
      </div>
    </div>
  );
};
export default Hero;
