import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";
import { Link } from "react-router-dom";
import AllServiceCard from "../Cards/AllServiceCard";

const OurServices = () => {
  return (
    <section className="mb-24 md:mb-16">
      <div className="md:flex  w-full px-4 md:px-12">
        <div className="px-4 md:px-10 w-full">
          <h5 className="font-serif text-body-2 font-regular">
            <TrendingFlatIcon style={{ fontSize: "35px", color: "#EFBC88" }} />
            Our Services
            <TrendingFlatIcon
              style={{
                transform: "rotate(180deg)",
                fontSize: "35px",
                color: "#EFBC88",
              }}
            />
          </h5>
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
