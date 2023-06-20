import Howitworks from "../../assets/Howitworks.png";
import pattern from "../../assets/Group38.png";
import smile from "../../assets/smile.png";
import smileguy from "../../assets/smileguy.png";
import trxsuccess from "../../assets/trxsuccess.png";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";
import { Link } from "react-router-dom";
const HowItWork = () => {
  return (
    <section className="mb-6">
      <div className="flex flex-col-reverse md:flex-row w-full  p-4 md:p-20">
        <div className="pl-[2.5rem] mt-8 relative w-full">
          <img src={Howitworks} alt="" />
          <div className="absolute left-[-60px] bottom-16">
            <img src={pattern} className="w-20" alt="" />
          </div>
          <div className="hidden md:absolute md:left-[32.5rem]  md:top-40">
            <img src={smile} alt="" />
          </div>
        </div>
        <div className="w-full px-2 md:px-6">
          <h5 className="font-serif text-body-2 font-regular">
            <TrendingFlatIcon style={{ fontSize: "35px", color: "#EFBC88" }} />
            How it works
            <TrendingFlatIcon
              style={{
                transform: "rotate(180deg)",
                fontSize: "35px",
                color: "#EFBC88",
              }}
            />
          </h5>
          <div className="md:flex">
            <h2 className=" md:w-auto md:text-subHeading-1 font-playfair font-bold">
              Easy Steps To Use This <br className="hidden md:inline" /> Service
            </h2>
            <div className="mx-24 relative top-[48rem] left-52 md:static">
              <img src={smileguy} className="w-12 md:w-16" alt="" />
            </div>
          </div>

          <div className="mt-2">
            <div className=" relative">
              <div className="flex  font-lato">
                <div className=" border-2 border-[#0C4E8B] rounded-[50%] w-10 h-10 flex items-center justify-center">
                  1
                </div>

                <h2 className="ml-4 mt-2 font-semiBold">
                  Explore vendor listings
                </h2>
              </div>
              <p className="pl-14 ">
                Browse our comprehensive vendor listings, organized by <br />
                category, such as photographers, caterers, planners, <br />
                decorators, and more.
              </p>
              <div className="border-dashed border-l-2  border-[#0C4E8B] w-0 h-[9.5rem] md:h-[6.5rem] mx-[0.9rem] absolute left-[6px] top-10"></div>
            </div>
            <div className="mt-8 relative">
              <div className="flex font-lato">
                <div className=" border-2 border-[#0C4E8B] rounded-[50%] w-10 h-10 flex items-center justify-center">
                  2
                </div>

                <h2 className="ml-4 mt-2 font-semiBold">
                  Shortlist potential vendors
                </h2>
              </div>
              <p className="pl-14 ">
                Take your time to review each vendor's profile to get an
                understanding of their services and shortlist the vendors that
                align with your event requirements and preferences.
              </p>
              <div className="border-dashed border-l-2  border-[#0C4E8B] w-0 h-[9.5rem] md:h-[6.5rem] mx-[0.9rem] absolute left-[6px] top-10"></div>
            </div>
            <div className="md:mt-8 mt-2 relative">
              <div className="flex font-lato">
                <div className=" border-2 border-[#0C4E8B] rounded-[50%] w-10 h-10 flex items-center justify-center">
                  3
                </div>

                <h2 className="ml-4 mt-2 font-semiBold">Connect with vendor</h2>
              </div>
              <p className="pl-14 ">
                Once you've identified potential vendors, you'll find their
                <br />
                contact information listed on their respective profiles. You
                <br /> can contact them directly using the provided contact
                <br />
                information.
              </p>
              <div className="hidden md:absolute md:left-96 md:top-[8rem]">
                <img src={trxsuccess} alt="" />
              </div>
            </div>
            <Link to="/categories">
              <button className="btn btn-Primary mt-10 md:mt-16">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
export default HowItWork;
