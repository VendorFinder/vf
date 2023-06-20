import partnerShape from "../../assets/partnerShape.png";
import WidgetsOutlinedIcon from "@mui/icons-material/WidgetsOutlined";
import SupervisorAccountOutlinedIcon from "@mui/icons-material/SupervisorAccountOutlined";
import CampaignOutlinedIcon from "@mui/icons-material/CampaignOutlined";
import WorkspacePremiumOutlinedIcon from "@mui/icons-material/WorkspacePremiumOutlined";
const PartnerWithUs = () => {
  return (
    <section className="mt-16 mb-12">
      <div className="mb-8">
        <h1 className="text-heading-3 font-bold text-center mb-4">
          Why Choose Us
        </h1>
        <p className="font-lato text-body-1 text-center">
          Join our dynamic events management platform and showcase your services
          <br />
          to a vast audience of potential clients.
        </p>
      </div>
      {/* shape */}
      <div className="flex  flex-col md:flex-row">
        <div className="md:w-1/2 flex items-center justify-center relative">
          <img src={partnerShape} className="w-[29rem] md:w-[27rem]" alt="" />

          <div className="absolute">
            <span className="flex gap-2 md:gap-4">
              <WidgetsOutlinedIcon
                style={{ color: "#EFBC88", fontSize: "35px" }}
              />
              <h3 className="font-bold text-body-1 mb-4">
                Extensive Vendor selection
              </h3>
            </span>
            <p className="pl-2 md:pl-12 font-lato">
              Discover a wide range of vetted and trusted <br /> event vendors,
              offering diverse services and <br /> specialties, all in one
              place.
            </p>
          </div>
        </div>
        <div className="md:w-1/2 flex items-center justify-center relative">
          <img src={partnerShape} className="w-[27rem]" alt="" />

          <div className="absolute">
            <span className="flex gap-2 md:gap-4">
              <SupervisorAccountOutlinedIcon
                style={{ color: "#EFBC88", fontSize: "35px" }}
              />
              <h3 className="font-bold text-body-1 mb-4">Qualified Leads</h3>
            </span>
            <p className="pl-2 md:pl-12 font-lato">
              You can connect with highly relevant leads <br /> and increase
              your chances of securing <br /> bookings.
            </p>
          </div>
        </div>
      </div>
      <div className="flex  flex-col md:flex-row">
        <div className="md:w-1/2 flex items-center justify-center relative">
          <img src={partnerShape} className="w-[27rem]" alt="" />

          <div className="absolute">
            <span className="flex gap-2 md:gap-4">
              <WorkspacePremiumOutlinedIcon
                style={{ color: "#EFBC88", fontSize: "35px" }}
              />
              <h3 className="font-bold text-body-1 mb-4">
                Enhanced Credibility
              </h3>
            </span>
            <p className="pl-2 md:pl-12 font-lato">
              By associating with VendorFinder, you can <br /> add credibility
              and trustwothiness to your <br /> business.
            </p>
          </div>
        </div>
        <div className="md:w-1/2 flex items-center justify-center relative">
          <img src={partnerShape} className="w-[27rem]" alt="" />

          <div className="absolute">
            <span className="flex  gap-2 md:gap-4">
              <CampaignOutlinedIcon
                style={{ color: "#EFBC88", fontSize: "35px" }}
              />
              <h3 className="font-bold text-body-1 mb-4">
                Cost-Effective Marketing
              </h3>
            </span>
            <p className="pl-2 md:pl-12 font-lato">
              Listing your services on VendorFinder <br /> eliminates the need
              for extensive marketing <br /> efforts and expenses.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default PartnerWithUs;
