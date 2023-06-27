import AL from "../../assets/about/arrowLeft.png";
import AR from "../../assets/about/arrowRight.png";
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
          <div className="flex gap-[10px] items-center mb-[10px]">
            <img className="h-[5px] w-[30px]" src={AL} alt="icon" />
            <span className="sm:text-[16px] text-[18px]">Benefits</span>
            <img className="h-[5px] w-[30px]" src={AR} alt="icon" />
          </div>
          <h1 className="font-playfair text-heading-5 font-bold">
            Why Use VendorFinder?
          </h1>
        </div>

        <div className=" md:w-1/3 mt-10 md:mt-36">
          <div>
            <div className="border-2 w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-4">
              <WidgetsOutlinedIcon style={{ color: "#EFBC88" }} />
            </div>
            <h2 className="text-center mb-4">Extensive Vendor selection</h2>
            <p className="px-8 mb-4">
              Discover a wide range of vetted and trusted event vendors,
              offering diverse services and specialties, all in one place.
            </p>
          </div>
          <div className=" w-[20rem] mx-auto mt-8 border-[1px] border-[#EFEFEF] h-0 md:w-[28.1rem] md:mx-0"></div>
          <div>
            <div className="border-2 w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-4 mt-8">
              <ElectricBoltOutlinedIcon style={{ color: "#A0E9F4" }} />
            </div>
            <h2 className="text-center mb-4">Convenience and Efficiency</h2>
            <p className="px-8 mb-4">
              Save time and effort by managing all your event-related tasks in
              one place and enjoy a a streamlined and efficient experience.
            </p>
          </div>
        </div>
        <div className="mt-8 border-[1px] border-[#EFEFEF] h-0 w-[20rem] mx-auto md:hidden"></div>
        <div className="relative">
          <div className="hidden mt-8 border-[1px] border-[#EFEFEF] h-[29rem] w-0 absolute top-28 md:block"></div>
        </div>

        <div className=" md:w-1/3 mt-10 md:mt-48">
          <div>
            <div className="border-2 w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-4">
              <VerifiedUserOutlinedIcon style={{ color: "#A0E9F4" }} />
            </div>
            <h2 className="text-center mb-4">Quality Assurance</h2>
            <p className="px-8 mb-4">
              Discover a wide range of vetted and trusted event vendors,
              offering diverse services and specialties, all in one place.
            </p>
          </div>
          <div>
            <div className=" w-[20rem] mx-auto mt-8 border-[1px] border-[#EFEFEF] h-0 md:w-[27rem] md:mx-0"></div>
            <div className="border-2 w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-4 mt-8">
              <HeadsetMicOutlinedIcon style={{ color: "#EFBC88" }} />
            </div>
            <h2 className="text-center mb-4">Convenience and Efficiency</h2>
            <p className="px-8 mb-4">
              Save time and effort by managing all your event-related tasks in
              one place and enjoy a a streamlined and efficient experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default WhyUs;
