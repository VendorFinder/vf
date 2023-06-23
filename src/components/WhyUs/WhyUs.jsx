import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";
import WidgetsOutlinedIcon from "@mui/icons-material/WidgetsOutlined";
import ElectricBoltOutlinedIcon from "@mui/icons-material/ElectricBoltOutlined";
import VerifiedUserOutlinedIcon from "@mui/icons-material/VerifiedUserOutlined";
import HeadsetMicOutlinedIcon from "@mui/icons-material/HeadsetMicOutlined";
import styles from "./WhyUs.module.css";
const WhyUs = () => {
  return (
    <section className={styles.whyUsMain}>
      <div className="flex flex-col md:flex-row text-white">
        <div className=" text-white pl-6 md:pl-20 pt-8 md:pt-24 md:w-1/3">
          <h5 className="font-serif text-body-2 font-regular">
            <TrendingFlatIcon style={{ fontSize: "35px", color: "#EFBC88" }} />
            Benefits
            <TrendingFlatIcon
              style={{
                transform: "rotate(180deg)",
                fontSize: "35px",
                color: "#EFBC88",
              }}
            />
          </h5>
          <h1 className="font-playfair text-heading-5 font-bold">
            Why Use VendorFinder?
          </h1>
        </div>

        <div className=" md:w-1/3 mt-10 md:mt-36">
          <div>
            <div className="border-2 w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-4">
              <WidgetsOutlinedIcon style={{ color: "#EFBC88" }} />
            </div>
            <h2 className="text-center mb-4 font-[700]">Extensive Vendor selection</h2>
            <p className="px-12 mb-4 text-center">
              Discover a wide range of vetted and trusted event vendors,
              offering diverse services and specialties, all in one place.
            </p>
          </div>
          <div className=" w-[20rem] mx-auto mt-8 border-[0.5px] border-[#EFEFEF] border-opacity-50 h-0 md:w-[28.1rem] md:mx-0"></div>
          <div>
            <div className="border-2 w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-4 mt-8">
              <ElectricBoltOutlinedIcon style={{ color: "#A0E9F4" }} />
            </div>
            <h2 className="text-center mb-4 font-[700]">Convenience and Efficiency</h2>
            <p className="px-12 mb-4 text-center">
              Save time and effort by managing all your event-related tasks in
              one place and enjoy a a streamlined and efficient experience.
            </p>
          </div>
        </div>
        <div className="mt-8 border-[0.5px] border-[#EFEFEF] border-opacity-50 h-0 w-[20rem] mx-auto md:hidden"></div>
        <div className="relative">
          <div className="hidden mt-8 border-[0.5px] border-[#EFEFEF] border-opacity-50 h-[29rem] w-0 absolute top-28 md:block"></div>
        </div>

        <div className=" md:w-1/3 mt-10 md:mt-48 md:mr-[120px]">
          <div>
            <div className="border-2 w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-4">
              <VerifiedUserOutlinedIcon style={{ color: "#A0E9F4" }} />
            </div>
            <h2 className="text-center mb-4 font-[700]">Quality Assurance</h2>
            <p className="px-12 mb-4 text-center">
            All vendors on our platform undergo a thorough vetting process to ensure exceptional service quality.
            </p>
          </div>
          <div>
            <div className=" w-[20rem] mx-auto mt-8 border-[0.5px] border-[#EFEFEF] border-opacity-50 h-0 md:w-[27rem] md:mx-0"></div>
            <div className="border-2 w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-4 mt-8">
              <HeadsetMicOutlinedIcon style={{ color: "#EFBC88" }} />
            </div>
            <h2 className="text-center mb-4 font-[700]">Dedicated Support</h2>
            <p className="px-12 mb-4 text-center">
            We are available to address any inquiries, concerns, or issues throughout your event planning journey. 
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default WhyUs;
