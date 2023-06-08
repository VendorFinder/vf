import ArrowRightAltOutlinedIcon from "@mui/icons-material/ArrowRightAltOutlined";
import KeyboardBackspaceOutlinedIcon from "@mui/icons-material/KeyboardBackspaceOutlined";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";
import { Link } from "react-router-dom";
const OurServices = () => {
  return (
    <section>
      <div className="flex w-full">
        <div className="px-10 w-full">
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
          <h2 className="text-heading-5">
            Your One-Stop Solution For <br /> A Hassle-Free Event
          </h2>
        </div>
        <div className="w-full">
          <p className="py-5">
            Our curated collection of vendors ensures that you'll find the
            perfect match to make your event truly unforgettable.
          </p>
          <Link to="/services" className="text-body-2">
            View All Services
          </Link>
        </div>
      </div>
      <div></div>
    </section>
  );
};
export default OurServices;
