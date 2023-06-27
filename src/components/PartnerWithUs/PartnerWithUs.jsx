import partnerShape from "../../assets/partnerShape.png";
import WidgetsOutlinedIcon from "@mui/icons-material/WidgetsOutlined";
import SupervisorAccountOutlinedIcon from "@mui/icons-material/SupervisorAccountOutlined";
import CampaignOutlinedIcon from "@mui/icons-material/CampaignOutlined";
import WorkspacePremiumOutlinedIcon from "@mui/icons-material/WorkspacePremiumOutlined";
const PartnerWithUs = () => {
  return (
    <section className="mt-16 mb-12 px-[30px]">
      <div className="mb-8">
        <h1 className="md:text-heading-3 text-[25px] font-bold text-center mb-4">
          Why Choose Us
        </h1>
        <p className="font-lato md:text-body-1 text-center">
          Join our dynamic events management platform and showcase your services
          <br />
          to a vast audience of potential clients.
        </p>
      </div>
      {/* shape */}
      <div className="flex  flex-col md:flex-row">
        <div className="md:w-1/2 flex items-center justify-center relative">
          <img src={partnerShape} className="w-[29rem] md:w-[27rem]" alt="" />

          <div className="absolute sm:w-[50%] md:w-[70%] lg:w-[50%] w-[80%] mx-auto">
            <span className="flex gap-2 md:gap-4">
              <WidgetsOutlinedIcon
                style={{ color: "#EFBC88", fontSize: "35px" }}
              />
              <h3 className="font-bold md:text-body-1">
                Extensive Vendor selection
              </h3>
            </span>
            <p className="pl-12 font-lato md:tex-[16px] text-[14px]">
              Discover a wide range of vetted and trusted event vendors,
              offering diverse services and specialties, all in one
              place.
            </p>
          </div>
        </div>
        <div className="md:w-1/2 flex items-center justify-center relative">
          <img src={partnerShape} className="w-[27rem]" alt="" />

          <div className="absolute sm:w-[50%] md:w-[70%] lg:w-[50%] w-[80%] mx-auto">
            <span className="flex gap-2 md:gap-4">
              <SupervisorAccountOutlinedIcon
                style={{ color: "#EFBC88", fontSize: "35px" }}
              />
              <h3 className="font-bold md:text-body-1">Qualified Leads</h3>
            </span>
            <p className="pl-12 font-lato md:text-[16px] text-[14px]">
              You can connect with highly relevant leads and increase
              your chances of securing bookings.
            </p>
          </div>
        </div>
      </div>
      <div className="flex  flex-col md:flex-row">
        <div className="md:w-1/2 flex items-center justify-center relative">
          <img src={partnerShape} className="w-[27rem]" alt="" />

          <div className="absolute sm:w-[50%] md:w-[70%] lg:w-[50%] w-[80%] mx-auto">
            <span className="flex gap-2 md:gap-4">
              <WorkspacePremiumOutlinedIcon
                style={{ color: "#EFBC88", fontSize: "35px" }}
              />
              <h3 className="font-bold md:text-body-1">
                Enhanced Credibility
              </h3>
            </span>
            <p className="pl-12 font-lato md:text-[16px] text-[14px]">
              By associating with VendorFinder, you can add credibility
              and trustwothiness to your business.
            </p>
          </div>
        </div>
        <div className="md:w-1/2 flex items-center justify-center relative">
          <img src={partnerShape} className="w-[27rem]" alt="" />

          <div className="absolute sm:w-[50%] md:w-[70%] lg:w-[50%] w-[80%] mx-auto">
            <span className="flex  gap-2 md:gap-4">
              <CampaignOutlinedIcon
                style={{ color: "#EFBC88", fontSize: "35px" }}
              />
              <h3 className="font-bold text-body-1 mb-4">
                Cost-Effective Marketing
              </h3>
            </span>
            <p className="pl-12 font-lato md:text-[16px] text-[14px]">
              Listing your services on VendorFinder eliminates the need
              for extensive marketing efforts and expenses.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default PartnerWithUs;
