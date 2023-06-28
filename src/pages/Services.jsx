import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar/NavBar";
import { Link } from "react-router-dom";


const Services = () => {
  return (
    <div>
      <NavBar />
      <main>
        <section className="bg-secondary min-h-[85vh]">
          <div className="md:px-[130px] md:pt-[150px] pt-[100px] pb-[57px] relative overflow-hidden">
            <img className="min-w-[500px] min-h-[350px] " src="https://res.cloudinary.com/dgizre0g1/image/upload/v1687944521/seviceheader_jvhbbk.png" alt="header" />
            <div className="flex justify-center absolute bottom-[15px] left-0 w-full">
              <h1 className="font-playfair font-[700] md:text-[40px] text-[30px] bg-secondary text-white md:pt-[29px] md:pb-[10px] md:px-[62px] py-[8px] md:rounded-[10px] text-center">We Offer Exceptional Services</h1>
            </div>
          </div>
        </section>
        <section className="lg:px-[148px] md:px-[100px] px-[30px] flex flex-col-reverse md:flex-row items-center w-full md:gap-[6%] gap-[40px] mt-[135px] mb-[65px]">
          <div className="md:w-[47%] w-full">
            <img className="md:h-full h-[300px] min-w-[300px] mx-auto" src="https://res.cloudinary.com/dgizre0g1/image/upload/v1687944504/cateringservice_kqhlfd.png" alt="cateringservice" />
          </div>
          <div className="md:w-[47%] w-full flex flex-col gap-[20px]">
            <h2 className="font-playfair font-[700] sm:text-[32px] text-[25px] text-secondary">Catering</h2>
            <p className="font-lato font-[400] sm:text-[18px] text-[16px] text-body-text-2">We have various experienced event caterers ready to offer their services at your beck and call! Avoid the stress of finding the best caterer to fit your needs, we are here to help.</p>
            <Link to='/categories' className="text-primary font-lato font-[500]">View vendor</Link>
          </div>
        </section>
        <section className="relative md:min-h-[1360px] bg-contain mb-[65px] flex items-center">
        <img className="absolute md:h-full h-[485px] z-[-1] w-full md:top-0 bottom-[-70px]" src="https://res.cloudinary.com/dgizre0g1/image/upload/v1687944520/snakebg_uz9djx.png" alt="bg" />
        <img className="absolute z-[-1] md:top-[-250px] top-[110px] right-0 md:h-[440px] md:w-[440px] h-[137px] w-[137px]" src="https://res.cloudinary.com/dgizre0g1/image/upload/v1687944520/star_qagu47.png" alt="bg" />
        <div className="lg:px-[148px] md:px-[100px] px-[30px] flex flex-col-reverse md:flex-row-reverse items-center w-full md:gap-[6%] gap-[120px]">
          <div className="md:w-[47%] w-full">
            <img className="md:h-full h-[300px] min-w-[300px] mx-auto" src="https://res.cloudinary.com/dgizre0g1/image/upload/v1687944512/entertaimentservice_zsmfqd.png" alt="entertaimentservice" />
          </div>
          <div className="md:w-[47%] w-full flex flex-col gap-[20px]">
            <h2 className="font-playfair font-[700] sm:text-[32px] text-[25px] text-secondary">Entertainment</h2>
            <p className="font-lato font-[400] sm:text-[18px] text-[16px] text-body-text-2">Entertainment is the soul of every event. What’s an event without a little or an abundance of entertainment? Come let us add some spice and make your events soulful.</p>
            <Link to='/categories' className="text-primary font-lato font-[500]">View vendor</Link>

          </div>
        </div>
        </section>
        <section className="lg:px-[148px] md:px-[100px] px-[30px] flex flex-col-reverse md:flex-row items-center w-full md:gap-[6%] gap-[40px] mt-[135px] mb-[65px]">
          <div className="md:w-[47%] w-full">
            <img className="md:h-full h-[300px] min-w-[300px] mx-auto" src="https://res.cloudinary.com/dgizre0g1/image/upload/v1687944519/photographyservice_autvu8.png" alt="photographyservice" />
          </div>
          <div className="md:w-[47%] w-full flex flex-col gap-[20px]">
            <h2 className="font-playfair font-[700] sm:text-[32px] text-[25px] text-secondary">Photography</h2>
            <p className="font-lato font-[400] sm:text-[18px] text-[16px] text-body-text-2">Pictures are physical memories. They are a part of us. They capture the moment and tell a story. Every event needs pictures to capture every moment be it small or big. We have just the right photographers.</p>
            <Link to='/categories' className="text-primary font-lato font-[500]">View vendor</Link>

          </div>
        </section>
        <section className="relative md:min-h-[1360px] bg-contain mb-[65px] flex items-center">
        <img className="absolute md:h-full h-[485px] z-[-1] w-full md:top-0 bottom-[-70px]" src="https://res.cloudinary.com/dgizre0g1/image/upload/v1687944520/snakebg2_hvoebk.png" alt="bg" />
        <img className="absolute z-[-1] md:top-[-250px] top-[110px] right-0 md:h-[440px] md:w-[440px] h-[137px] w-[137px]" src="https://res.cloudinary.com/dgizre0g1/image/upload/v1687944520/star2_d1ixpg.png" alt="bg" />
        <div className="lg:px-[148px] md:px-[100px] px-[30px] flex flex-col-reverse md:flex-row-reverse items-center w-full md:gap-[6%] gap-[120px]">
          <div className="md:w-[47%] w-full">
            <img className="md:h-full h-[300px] min-w-[300px] mx-auto" src="https://res.cloudinary.com/dgizre0g1/image/upload/v1687944505/decorationservice_wsalvb.png" alt="decorationservice" />
          </div>
          <div className="md:w-[47%] w-full flex flex-col gap-[20px]">
            <h2 className="font-playfair font-[700] sm:text-[32px] text-[25px] text-secondary">Decoration</h2>
            <p className="font-lato font-[400] sm:text-[18px] text-[16px] text-body-text-2">We have decorators that can give your event a very unique look. You can also tailor the decorations to fit your needs and desires. You do the description, we do the action.</p>
            <Link to='/categories' className="text-primary font-lato font-[500]">View vendor</Link>

          </div>
        </div>
        </section>
        <section className="lg:px-[148px] md:px-[100px] px-[30px] flex flex-col-reverse md:flex-row items-center w-full md:gap-[6%] gap-[40px] mt-[135px] mb-[65px]">
          <div className="md:w-[47%] w-full">
            <img className="md:h-full h-[300px] min-w-[300px] mx-auto" src="https://res.cloudinary.com/dgizre0g1/image/upload/v1687944512/eventservice_xam0ef.png" alt="eventservice" />
          </div>
          <div className="md:w-[47%] w-full flex flex-col gap-[20px]">
            <h2 className="font-playfair font-[700] sm:text-[32px] text-[25px] text-secondary">Event venues</h2>
            <p className="font-lato font-[400] sm:text-[18px] text-[16px] text-body-text-2">Most times getting a venue for an event takes time, energy and resources. We make your events easier for you by relieving you of the stress of searching for a venue.</p>
            <Link to='/categories' className="text-primary font-lato font-[500]">View vendor</Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};
export default Services;
