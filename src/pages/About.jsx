import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import { Link } from "react-router-dom";

//Images and Icons
import Faq from "../components/About/Faq";
import Slide from "../components/About/Slider";

const About = () => {
  
  return (
    <div>
      <NavBar />
      <main className="max-w-[1400px] mx-auto mb-[78px]">
        <section className="flex justify-center h-[85vh] items-center bg-about-hero bg-cover bg-t-black">
          <div className="font-playfair border border-[0.5px] py-[48px] sm:w-[547px] w-[90%] mx-auto text-center">
            <h1 className="font-[700] md:text-[50px] text-[35px] text-[#FFFFFF]">WHO ARE WE</h1>
          </div>
        </section>
        <section className="mt-[100px] md:px-[120px] px-[30px] flex flex-col gap-[100px] font-lato">
          <div className="relative border border-[#0C4E8B] p-[30px] lg:min-h-[540px] md:min-h-[640px] min-h-[740px]">
            <div className="border border-[#04172A] flex lg:justify-end lg:items-center lg:min-h-[480px] md:min-h-[580px] min-h-[680px]">
              <div className="lg:w-[40%] lg:pr-[50px] py-[36px] px-[27px]">
                <div className="flex gap-[10px] items-center mb-[10px]"> 
                  <img className="h-[5px] w-[30px]" src="https://res.cloudinary.com/dgizre0g1/image/upload/v1687944498/arrowLeft_zgmle8.png" alt="icon" />
                  <span className="sm:text-[16px] text-[14px]">Our Mission</span>
                  <img className="h-[5px] w-[30px]" src="https://res.cloudinary.com/dgizre0g1/image/upload/v1687944499/arrowRight_pmf9cx.png" alt="icon" />
                </div>
                <div className="flex flex-col gap-[22px]">
                  <h2 className="text-[#04172A] font-[700] sm:text-[30px] text-[20px]">WHAT WE ARE DOING </h2>
                  <p className="text-[#555C69] font-[400] sm:text-[20px] text-[16px]">We connect event vendors with individuals and organizations who are seeking their services, creating a seamless and efficient platform that simplifies the process of event planning.</p>
                </div>
              </div>
            </div>
            <div className="absolute lg:top-0 lg:left-[30px] bottom-[30px] min-w-full left-0 z-[-1] bg-about-2 lg:min-h-[540px] min-h-[300px] lg:min-w-[444px] xl:min-w-[544px] bg-cover bg-no-repeat">
              {/* <img className="bg-black" src={bg2} alt="" /> */}
            </div>
          </div> 
          <div className="relative border border-[#0C4E8B] p-[30px] lg:min-h-[540px] md:min-h-[640px] min-h-[740px]">
            <div className="border border-[#04172A] flex lg:justify-start lg:items-center lg:min-h-[480px] md:min-h-[580px] min-h-[680px]">
              <div className="lg:w-[40%] lg:pl-[50px] py-[36px] px-[27px]">
                <div className="flex gap-[10px] items-center mb-[10px]"> 
                  <img className="h-[5px] w-[30px]" src="https://res.cloudinary.com/dgizre0g1/image/upload/v1687944498/arrowLeft_zgmle8.png" alt="icon" />
                  <span className="sm:text-[16px] text-[14px]">Our Vision</span>
                  <img className="h-[5px] w-[30px]" src="https://res.cloudinary.com/dgizre0g1/image/upload/v1687944499/arrowRight_pmf9cx.png" alt="icon" />
                </div>
                <div className="flex flex-col gap-[22px]">
                  <h2 className="text-[#04172A] font-[700] sm:text-[30px] text-[20px]">WHAT WE AIM TO DO  </h2>
                  <p className="text-[#555C69] font-[400] sm:text-[20px] text-[16px]">To be the leading online marketplace for event vendors, revolutionizing the way people discover, hire, and collaborate with event professionals.</p>
                </div>
              </div>
            </div>
            <div className="absolute lg:top-0 lg:right-[30px] bottom-[30px] min-w-full right-0 z-[-1] bg-about-3 lg:min-h-[540px] min-h-[300px] lg:min-w-[444px] xl:min-w-[544px] bg-cover bg-no-repeat">
              {/* <img className="bg-black" src={bg2} alt="" /> */}
            </div>
          </div>
        </section>
        <section className="mt-[116px] md:px-[120px] sm:px-[30px]">
          <div className="relative min-h-[647px] flex justify-end bg-contain bg-no-repeat">
              <img className="absolute h-full z-[-1]" src="https://res.cloudinary.com/dgizre0g1/image/upload/v1687944499/arrowdownbg_f5v6l9.png" alt="bg" />
              <span className="absolute sm:left-[-170px] left-[-110px] sm:top-[-70px] top-[100px] font-playfair font-[700] h-[10px] text-[#04172A] text-[20px] sm:text-[32px] transform -rotate-90 flex items-center md:h-full min-h-[406px] whitespace-nowrap z-[-1]">WHAT WE ARE ALL ABOUT </span>
              <div className="absolute sm:left-[20%] left-[50%] lg:left-[100px] xl:left-[140px] lg:top-0 xl:top-[-30px] sm:bottom-[-186px] bottom-[-106px] transform -translate-x-1/2 sm:-translate-x-0">
                <img className="rounded-[10px] xl:max-w-[433px] lg:max-w-[350px] sm:max-w-[333px] max-w-[261px]" src="https://res.cloudinary.com/dgizre0g1/image/upload/v1687944500/confident-head-cook_ht5yo0.png" alt="" />
              </div>
            <div className=" w-[90%] pt-[41px] flex flex-col items-start gap-[30px] xl:pl-[500px] lg:pl-[400px] pb-[350px] md:pb-[438px] lg:pb-0">
              <div className="flex flex-col gap-[18px] pr-[50px]" >
              <h2 className=" font-playfair text-[#04172A] font-[700] sm:text-[35px] text-[30px]">We offer you the best people for your celebrations.</h2>
              <p className="font-lato sm:text-[18px] text-[16px]">We strive to make the vendor selection process seamless, reliable, and enjoyable, ultimately contributing to the success and unforgettable nature of every celebration. </p>
              </div>
              <div className="bg-[#04172A] bg-opacity-80 font-lato flex p-[18px] sm:w-[80%] w-[90%] justify-between ">
                <div className="flex flex-col gap-[10px] text-white flex flex-col items-center">
                  <span className="font-[500] sm:text-[35px] text-[30px]">100+</span>
                  <span className="font-[400] text-[16px] max-w-[58px]">Reliable Vendors</span>
                </div>
                <div className="flex flex-col gap-[10px] text-white flex flex-col items-center">
                  <span className="font-[500] sm:text-[35px] text-[30px]">200+</span>
                  <span className="font-[400] text-[16px] max-w-[74px]">Successful events</span>
                </div>
                <div className="flex flex-col gap-[10px] text-white flex flex-col items-center">
                  <span className="font-[500] sm:text-[35px] text-[30px]">99%</span>
                  <span className="font-[400] text-[16px] max-w-[85px]">Client satisfaction</span>
                </div>
              </div>
              <Link className="font-[600] font-lato text-[16px] text-[#0C4E8B] rounded-[10px] py-[10px] px-[20px] border border-[#0C4E8B] hover:bg-[#0C4E8B] hover:text-[#fff]" to='/categories'>
                  View Vendors
              </Link>
            </div>
          </div>
        </section>
        <section className="md:px-[100px] px-[30px] mt-[131px]">
        <h2 className=" font-playfair text-[#04172A] font-[700] sm:text-[35px] text-[30px] mb-[50px]">Meet the Team</h2>
          <Slide/>
        </section>
        <section className="md:px-[120px] mt-[131px]">
          <div className="bg-[#F7ECE1] md:px-[137px] px-[30px] py-[50px]">
            <h2 className="font-playfair font-[700] sm:text-[35px] text-[30px] text-center text-[#04172A]">The Journey through our works</h2>
            <div className="mt-[66px] flex flex-col gap-[50px]">
              <div className="flex md:flex-row flex-col-reverse md:gap-[10%] gap-[45px] items-center">
                <div className="relative md:w-[45%] w-full h-[300px] md:h-[382px]">
                  <img className="absolute md:w-[400px] w-full h-full z-[9]" src="https://res.cloudinary.com/dgizre0g1/image/upload/v1687944502/ngosa_fn7g6b.png" alt="ngosa" />
                  <div className="absolute h-[92px] w-[92px] top-[-20px] left-[-20px] bg-[#FFFFFF]"></div>
                </div>
                <div className="md:w-[45%] w-full flex flex-col gap-[25px]">
                  <h3 className="text-[#04172A] font-playfair sm:text-[25px] text-[20px] font-[700]">Bespoke Weddings</h3>
                  <p className="text-[16px] sm:text-[18px] font-lato text-[#555C69] font-[400]">Immerse yourself in the enchantment of our curated weddings, where love and creativity intertwine, brought to life by our talented vendors.</p>
                </div>
              </div>
              <div className="flex  flex-col-reverse md:flex-row-reverse md:gap-[10%] gap-[45px] items-center">
                <div className="relative md:w-[45%] w-full h-[300px] md:h-[382px]">
                  <img className="absolute md:w-[400px] w-full h-full z-[9]" src="https://res.cloudinary.com/dgizre0g1/image/upload/v1687944500/dani_nuwogv.png" alt="ngosa" />
                  <div className="absolute h-[92px] w-[92px] top-[-20px] right-[-20px] bg-[#FFFFFF]"></div>
                </div>
                <div className="md:w-[45%] w-full flex flex-col gap-[25px]">
                  <h3 className="text-[#04172A] font-playfair sm:text-[25px] text-[20px] font-[700]">Birthday Celebrations</h3>
                  <p className="text-[16px] sm:text-[18px] font-lato text-[#555C69] font-[400]">Ignite your imagination with a glimpse into a remarkable birthday celebration that bursts with joy and wonder organized by our vendors.</p>
                </div>
              </div>
              <div className="flex md:flex-row flex-col-reverse md:gap-[10%] gap-[45px] items-center">
                <div className="relative md:w-[45%] w-full h-[300px] md:h-[382px]">
                  <img className="absolute md:w-[400px] w-full h-full z-[9]" src="https://res.cloudinary.com/dgizre0g1/image/upload/v1687944503/weddings_ddledb.png" alt="ngosa" />
                  <div className="absolute h-[92px] w-[92px] top-[-20px] left-[-20px] bg-[#FFFFFF]"></div>
                </div>
                <div className="md:w-[45%] w-full flex flex-col gap-[25px]">
                  <h3 className="text-[#04172A] font-playfair sm:text-[25px] text-[20px] font-[700]">Religious Celebrations</h3>
                  <p className="text-[16px] sm:text-[18px] font-lato text-[#555C69] font-[400]">Experience the reverence and cultural significance of a heartfelt religious celebration brought to life by our esteemed vendors.</p>
                </div>
              </div>
              <div className="flex flex-col-reverse md:flex-row-reverse md:gap-[10%] gap-[45px] items-center">
                <div className="relative md:w-[45%] w-full h-[300px] md:h-[382px]">
                  <img className="absolute md:w-[400px] w-full h-full z-[9]" src="https://res.cloudinary.com/dgizre0g1/image/upload/v1687948035/Mask_group_10_kerpak.png" alt="ngosa" />
                  <div className="absolute h-[92px] w-[92px] top-[-20px] right-[-20px] bg-[#FFFFFF]"></div>
                </div>
                <div className="md:w-[45%] w-full flex flex-col gap-[25px]">
                  <h3 className="text-[#04172A] font-playfair sm:text-[25px] text-[20px] font-[700]">Business Events</h3>
                  <p className="text-[16px] sm:text-[18px] font-lato text-[#555C69] font-[400]">Gain inspiration from successful and exciting business events and conferences orchestrated by our professional vendors. </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="md:px-[100px] px-[30px] mt-[131px] faq">
          <div className="flex flex-col gap-[20px] mb-[50px]">
            <h2 className="font-playfair font-[700] sm:text-[35px] text-[30px] text-center text-[#04172A]">The What Do You Want To Know?</h2>
            <span className="font-playfair font-[700] sm:text-[25px] text-[20px] text-center text-[#04172A]">Suggested Questions</span>
          </div>
          <Faq/>
        </section>
      </main>
      <Footer />
    </div>
  );
};
export default About;
