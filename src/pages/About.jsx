import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import { Link } from "react-router-dom";
import FAQ from 'react-faq-component';

//Images and Icons
import AL from '../assets/about/arrowLeft.png'
import AR from '../assets/about/arrowRight.png'
import cook from '../assets/about/confident-head-cook.png'
import ngosa from '../assets/about/ngosa.png'
import glass from '../assets/about/glass.png'
import weddings from '../assets/about/weddings.png'
import dani from '../assets/about/dani.png'
import plus from '../assets/about/plus.svg'
import minus from '../assets/about/minus.svg'



const data = {
  rows: [
    {
      title: 'Question 1',
      content: 'Answer 1',
    },
    {
      title: 'Question 2',
      content: 'Answer 2',
    },
    // Add more rows as needed
  ],
};
const config = {
  expandIcon: <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="15" cy="15" r="15" fill="#0C4E8B"/>
  <g clipPath="url(#clip0_447_240)">
  <path d="M20.9166 14.2497H16.7499V10.083C16.7499 9.75149 16.6182 9.43354 16.3838 9.19912C16.1494 8.9647 15.8314 8.83301 15.4999 8.83301C15.1684 8.83301 14.8505 8.9647 14.616 9.19912C14.3816 9.43354 14.2499 9.75149 14.2499 10.083V14.2497H10.0833C9.75173 14.2497 9.43379 14.3814 9.19937 14.6158C8.96495 14.8502 8.83325 15.1682 8.83325 15.4997C8.83325 15.8312 8.96495 16.1491 9.19937 16.3836C9.43379 16.618 9.75173 16.7497 10.0833 16.7497H14.2499V20.9163C14.2499 21.2479 14.3816 21.5658 14.616 21.8002C14.8505 22.0346 15.1684 22.1663 15.4999 22.1663C15.8314 22.1663 16.1494 22.0346 16.3838 21.8002C16.6182 21.5658 16.7499 21.2479 16.7499 20.9163V16.7497H20.9166C21.2481 16.7497 21.566 16.618 21.8005 16.3836C22.0349 16.1491 22.1666 15.8312 22.1666 15.4997C22.1666 15.1682 22.0349 14.8502 21.8005 14.6158C21.566 14.3814 21.2481 14.2497 20.9166 14.2497Z" fill="white"/>
  </g>
  <defs>
  <clipPath id="clip0_447_240">
  <rect width="15" height="15" fill="white" transform="translate(8 8)"/>
  </clipPath>
  </defs>
  </svg>,
  collapseIcon: <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="15" cy="15" r="15" fill="#0C4E8B"/>
  <path d="M9.375 15H20.625" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>,
};




const About = () => {
  
  return (
    <div>
      <NavBar />
      <main className="max-w-[1400px] mx-auto">
        <section className="flex justify-center h-[615px] items-center bg-about-hero bg-t-black">
          <div className="font-playfair border border-[0.5px] py-[48px] px-[110px] text-center">
            <h1 className="font-[700] text-[50px] text-[#FFFFFF]">WHO ARE WE</h1>
          </div>
        </section>
        <section className="mt-[100px] px-[120px] flex flex-col gap-[100px] font-lato">
          <div className="relative border border-[#0C4E8B] p-[30px] min-h-[540px]">
            <div className="border border-[#04172A] flex justify-end items-center min-h-[480px]">
              <div className="w-[40%] pr-[50px]">
                <div className="flex gap-[10px] items-center mb-[10px]"> 
                  <img className="h-[5px] w-[30px]" src={AL} alt="icon" />
                  <span>Our Mission</span>
                  <img className="h-[5px] w-[30px]" src={AR} alt="icon" />
                </div>
                <div className="flex flex-col gap-[22px]">
                  <h2 className="text-[#04172A] font-[700] text-[30px]">WHAT WE ARE DOING </h2>
                  <p className="text-[#555C69] font-[400] text-[20px]">We connect event vendors with individuals and organizations who are seeking their services, creating a seamless and efficient platform that simplifies the process of event planning.</p>
                </div>
              </div>
            </div>
            <div className="absolute top-0 left-[30px] z-[-1] bg-about-2 min-h-[540px] min-w-[544px]">
              {/* <img className="bg-black" src={bg2} alt="" /> */}
            </div>
          </div>
          <div className="relative border border-[#0C4E8B] p-[30px] min-h-[540px]">
            <div className="border border-[#04172A] flex justify-start items-center min-h-[480px]">
              <div className="w-[40%] pl-[50px]">
                <div className="flex gap-[10px] items-center mb-[10px]"> 
                  <img className="h-[5px] w-[30px]" src={AL} alt="icon" />
                  <span>Our Vision</span>
                  <img className="h-[5px] w-[30px]" src={AR} alt="icon" />
                </div>
                <div className="flex flex-col gap-[22px]">
                  <h2 className="text-[#04172A] font-[700] text-[30px]">WHAT WE AIM TO DO  </h2>
                  <p className="text-[#555C69] font-[400] text-[20px]">To be the leading online marketplace for event vendors, revolutionizing the way people discover, hire, and collaborate with event professionals.</p>
                </div>
              </div>
            </div>
            <div className="absolute top-0 right-[30px] z-[-1] bg-about-3 min-h-[540px] min-w-[544px]">
              {/* <img className="bg-black" src={bg2} alt="" /> */}
            </div>
          </div>
        </section>
        <section className="mt-[22.5px] px-[100px]">
          <div className="mb-[90.5px] text-center">
            <span className="font-lato font-[400px] text-[#000000] text-[22px]">To be the forerunner of event industry in Nigeria with our innovative method of connecting vendors to hosts</span>
          </div>
          <div className="relative bg-arrowdownbg min-h-[647px] flex justify-end">
              <span className="absolute left-[-250px] top-[-150px] font-playfair font-[700] w-1/2 text-[#04172A] text-[32px] transform -rotate-90 flex items-center h-full min-h-[406px] whitespace-nowrap">WHAT WE ARE ALL ABOUT </span>
              <div className="absolute left-[140px] top-[-30px] ">
                <img className="rounded-[10px]" src={cook} alt="" />
              </div>
            <div className="w-[45%] pt-[41px] flex flex-col items-start gap-[30px]">
              <div className="flex flex-col gap-[18px] pr-[50px]" >
              <h2 className=" font-playfair text-[#04172A] font-[700] text-[35px]">We offer you the best people for your celebrations.</h2>
              <p className="font-lato text-[18px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
              </div>
              <div className="bg-[#04172A] bg-opacity-80 font-lato flex gap-[39px] p-[18px]">
                <div className="flex flex-col gap-[10px] text-white flex flex-col items-center">
                  <span className="font-[500] text-[35px]">100+</span>
                  <span className="font-[400] text-[16px] w-[58px]">Reliable Vendors</span>
                </div>
                <div className="flex flex-col gap-[10px] text-white flex flex-col items-center">
                  <span className="font-[500] text-[35px]">200+</span>
                  <span className="font-[400] text-[16px] w-[74px]">Successful events</span>
                </div>
                <div className="flex flex-col gap-[10px] text-white flex flex-col items-center">
                  <span className="font-[500] text-[35px]">99%</span>
                  <span className="font-[400] text-[16px] w-[85px]">Client satisfaction</span>
                </div>
              </div>
              <Link className="font-[600] font-lato text-[16px] text-[#0C4E8B] rounded-[10px] py-[10px] px-[20px] border border-[#555C69]" to='/'>
                  View Vendors
              </Link>
            </div>
          </div>
        </section>
        <section></section>
        <section className="px-[100px] mt-[131px]">
          <div className="bg-[#F7ECE1] px-[137px] py-[50px]">
            <h2 className="font-playfair font-[700] text-[35px] text-center text-[#04172A]">The Journey through our works</h2>
            <div className="mt-[66px] flex flex-col gap-[50px]">
              <div className="flex gap-[10%] items-center">
                <div className="relative w-[45%] h-[382px]">
                  <img className="absolute w-[400px] h-full z-[10]" src={ngosa} alt="ngosa" />
                  <div className="absolute h-[92px] w-[92px] top-[-20px] left-[-20px] bg-[#FFFFFF]"></div>
                </div>
                <div className="w-[45%] flex flex-col gap-[25px]">
                  <h3 className="text-[#04172A] font-playfair text-[25px] font-[700]">Bespoke Weddings</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
              </div>
              <div className="flex flex-row-reverse gap-[10%] items-center">
                <div className="relative w-[45%] h-[382px]">
                  <img className="absolute w-[400px] h-full z-[10]" src={dani} alt="ngosa" />
                  <div className="absolute h-[92px] w-[92px] top-[-20px] right-[-20px] bg-[#FFFFFF]"></div>
                </div>
                <div className="w-[45%] flex flex-col gap-[25px]">
                  <h3 className="text-[#04172A] font-playfair text-[25px] font-[700]">Birthday Celebrations</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
              </div>
              <div className="flex gap-[10%] items-center">
                <div className="relative w-[45%] h-[382px]">
                  <img className="absolute w-[400px] h-full z-[10]" src={weddings} alt="ngosa" />
                  <div className="absolute h-[92px] w-[92px] top-[-20px] left-[-20px] bg-[#FFFFFF]"></div>
                </div>
                <div className="w-[45%] flex flex-col gap-[25px]">
                  <h3 className="text-[#04172A] font-playfair text-[25px] font-[700]">Religious Celebrations</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
              </div>
              <div className="flex flex-row-reverse gap-[10%] items-center">
                <div className="relative w-[45%] h-[382px]">
                  <img className="absolute w-[400px] h-full z-[10]" src={glass} alt="ngosa" />
                  <div className="absolute h-[92px] w-[92px] top-[-20px] right-[-20px] bg-[#FFFFFF]"></div>
                </div>
                <div className="w-[45%] flex flex-col gap-[25px]">
                  <h3 className="text-[#04172A] font-playfair text-[25px] font-[700]">Business Events</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="px-[100px] mt-[131px]">
          <FAQ data={data} config={config} />
        </section>
      </main>
      <Footer />
    </div>
  );
};
export default About;
