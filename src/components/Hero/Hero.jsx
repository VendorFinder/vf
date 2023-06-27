// import styles from "./Hero.module.css";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="bg-home-hero h-screen md:h-screen bg-center py-5 md:py-0 pt-0  md:pt-10 bg-cover">
      <h1 className="font-sans text-heading-4 md:text-heading-2 text-neutral text-start md:text-center px-8 md:px-0 pt-12 md:pt-40 pb-10 md:pb-20 font-[700]">
        Find The Right Vendors To <br className="hidden md:inline" /> Make Your
        Event Exceptional
      </h1>

      <div className=" md:flex md:justify-center md:items-center px-8 md:px-0  ">
        <Link to="/categories">
          <button className="btn btn-Primary font-serif">Hire a Vendor</button>
        </Link>
      </div>
    </div>
  );
};
export default Hero;
