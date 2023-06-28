import { Link } from "react-router-dom";
import AllServiceCard from "../Cards/AllServiceCard";

const OurServices = () => {
  return (
    <section className="mb-24 md:mb-16">
      <div className="md:flex  w-full px-4 md:px-12">
        <div className="px-4 md:px-10 w-full">
          <div className="flex gap-[10px] items-center mb-[10px]">
            <img className="h-[5px] w-[30px]" src="https://res.cloudinary.com/dgizre0g1/image/upload/v1687944498/arrowLeft_zgmle8.png" alt="icon" />
            <span className="sm:text-[16px] text-[18px]">Our Services</span>
            <img className="h-[5px] w-[30px]" src="https://res.cloudinary.com/dgizre0g1/image/upload/v1687944499/arrowRight_pmf9cx.png" alt="icon" />
          </div>
          <h2 className="text-heading-4 md:text-heading-3 font-semiBold">
            Your One-Stop Solution For <br className="hidden md:inline" /> A
            Hassle-Free Event
          </h2>
        </div>
        <div className="w-full px-4 md:px-6">
          <p className="py-2 md:py-5 pr-12">
            Our curated collection of vendors ensures that you'll find the
            perfect match to make your event truly unforgettable.
          </p>
          <Link
            to="/services"
            className="text-body-2 text-blue-900 font-semibold"
          >
            View All Services
          </Link>
        </div>
      </div>
      <div>
        <AllServiceCard />
      </div>
    </section>
  );
};
export default OurServices;
