
import { Link } from "react-router-dom";
const HowItWork = () => {
  return (
    <section className="mb-6">
      <div className="flex flex-col-reverse md:flex-row w-full  p-4 md:p-20">
        <div className="pl-[2.5rem] mt-8 relative w-full">
          <img src="https://res.cloudinary.com/dgizre0g1/image/upload/v1687944513/Howitworks_cmyywt.png" alt="" />
          <div className="absolute hidden md:block left-[-60px] bottom-16">
            <img src="https://res.cloudinary.com/dgizre0g1/image/upload/v1687944512/Group38_lpdk1p.png" className="w-20" alt="" />
          </div>
          <div className="hidden md:block md:absolute md:left-[32.5rem]  md:top-40">
            <img src="https://res.cloudinary.com/dgizre0g1/image/upload/v1687944519/smile_nxh8lv.png" alt="" />
          </div>
        </div>
        <div className="w-full px-2 md:px-6">
          <div className="flex gap-[10px] items-center mb-[10px]">
            <img className="h-[5px] w-[30px]" src="https://res.cloudinary.com/dgizre0g1/image/upload/v1687944498/arrowLeft_zgmle8.png" alt="icon" />
            <span className="sm:text-[16px] text-[18px]">How it works</span>
          <img className="h-[5px] w-[30px]" src="https://res.cloudinary.com/dgizre0g1/image/upload/v1687944499/arrowRight_pmf9cx.png" alt="icon" />
          </div>
          <div className="md:flex">
            <h2 className=" md:w-auto md:text-subHeading-1 font-playfair font-bold">
              Easy Steps To Use This <br className="hidden md:inline" /> Service
            </h2>
            <div className="mx-24 relative hidden md:block top-[48rem] left-52 md:static">
              <img src="https://res.cloudinary.com/dgizre0g1/image/upload/v1687944519/smileguy_xb9z2z.png" className="w-12 md:w-16" alt="" />
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
              <div className="hidden md:block md:absolute md:left-96 md:top-[8rem]">
                <img src="https://res.cloudinary.com/dgizre0g1/image/upload/v1687947133/Mask_group_9_cle3tg.png" alt="" />
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
