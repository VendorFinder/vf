import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";
import Cards from "../Cards/Cards";
const Testimonials = () => {
  return (
    <div className="mb-8">
      <div className="flex items-center justify-center mt-16">
        <h5 className="font-serif text-body-2 font-regular">
          <TrendingFlatIcon style={{ fontSize: "35px", color: "#EFBC88" }} />
          Testimonials
          <TrendingFlatIcon
            style={{
              transform: "rotate(180deg)",
              fontSize: "35px",
              color: "#EFBC88",
            }}
          />
        </h5>
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
      <Cards />
    </div>
  );
};
export default Testimonials;
