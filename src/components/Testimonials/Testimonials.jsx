import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";
import Cards from "../Cards/Cards";
const Testimonials = () => {
  return (
    <div className="mb-8">
      <div className="flex md:items-center md:justify-center px-5 mt-16">
        <div className="flex gap-[10px] items-center mb-[10px]">
          <img className="h-[5px] w-[30px]" src="https://res.cloudinary.com/dgizre0g1/image/upload/v1687944498/arrowLeft_zgmle8.png" alt="icon" />
          <span className="sm:text-[16px] text-[18px]"> Testimonials</span>
          <img className="h-[5px] w-[30px]" src="https://res.cloudinary.com/dgizre0g1/image/upload/v1687944499/arrowRight_pmf9cx.png" alt="icon" />
        </div>
      </div>

      <h2 className="text-start px-5 md:text-center text-heading-5 mb-2">
        What Other Event Hosts Love About Us
      </h2>
      <div className=" flex px-5 md:px-0 justify-start md:items-center md:justify-center">
        <div className="w-12 h-2 bg-[#0C4E8B] mb-4"></div>
      </div>

      <p className="px-5 md:text-center">
        More than 100 hosts chose to connect with event vendors <br /> through
        VendorFinder
      </p>
      <Cards className="z-20" />
    </div>
  );
};
export default Testimonials;
