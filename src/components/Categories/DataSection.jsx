import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Data from './Data'




const PreviousButton = ({ onClick }) => (
  <button onClick={onClick} className="bg-[#0C4E8B] h-[40px] w-[40px] flex justify-center items-center rounded-[50%] absolute left-[-10px] z-[1] top-[70px] transform -translate-y-1/2">
    <img src="https://res.cloudinary.com/dgizre0g1/image/upload/v1687944503/prev_eup1qd.png" alt="prev" />
  </button>
);

const NextButton = ({ onClick }) => (
  <button onClick={onClick} className="bg-[#0C4E8B] h-[40px] w-[40px] flex justify-center items-center rounded-[50%] absolute right-[-30px] top-[70px] transform -translate-y-1/2">
        <img src="https://res.cloudinary.com/dgizre0g1/image/upload/v1687944519/rightarrow_nmzpy8.png" alt="next" />
  </button>
);


export default function DataSection() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <PreviousButton />,
    nextArrow: <NextButton />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3, // Number of components to show for screen width <= 1024px
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2, // Number of components to show for screen width <= 768px
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1, // Number of components to show for screen width <= 768px
        },
      },
    ],
  };
  const [cat, setCat] = useState('');


  return (
    <div>
      <div className="flex justify-center">
          <span className="font-lato font-[700] sm:text-[16px] text-[14px] text-center w-full">or choose a category to quickly find the help you need</span>
      </div>
      <Slider {...settings} className=" flex flex-col gap-[50px] mx-auto mb-[100px] mt-[50px]">
      <div className={`${cat === ''? 'bg-primary text-white' : ''} relative border border-[0.5px] border-[#04172A] w-full h-[130px] cursor-pointer`} onClick={() => setCat('')}>
        <div className="flex flex-col justify-center items-center gap-[12px] h-full">
          <img src="https://res.cloudinary.com/dgizre0g1/image/upload/v1687944497/allIcon_ylkgk4.svg" alt="all" />
          <span className="font-playfair font-[700] sm:text-[20px] text-[18px]">All</span>
        </div>
      </div>
      <div className={`${cat === 'Catering'? 'bg-primary text-white' : ''} relative border border-[0.5px] border-[#04172A] w-full h-[130px] cursor-pointer`} onClick={() => setCat('Catering')}>
        <div className="flex flex-col justify-center items-center gap-[12px] h-full">
          <img src="https://res.cloudinary.com/dgizre0g1/image/upload/v1687944500/foodIcon_cozdbu.svg" alt="all" />
          <span className="font-playfair font-[700] sm:text-[20px] text-[18px]">Catering</span>
        </div>
      </div>
            <div className={`${cat === 'Photography'? 'bg-primary text-white' : ''} relative border border-[0.5px] border-[#04172A] w-full h-[130px] cursor-pointer`} onClick={() => setCat('Photography')}>
        <div className="flex flex-col justify-center items-center gap-[12px] h-full">
          <img src="https://res.cloudinary.com/dgizre0g1/image/upload/v1687944502/photographyIcon_l0jydr.svg" alt="all" />
          <span className="font-playfair font-[700] sm:text-[20px] text-[18px]">Photography</span>
        </div>
      </div>
      <div className={`${cat === 'venues'? 'bg-primary text-white' : ''} relative border border-[0.5px] border-[#04172A] w-full h-[130px] cursor-pointer`} onClick={() => setCat('venues')}>
        <div className="flex flex-col justify-center items-center gap-[12px] h-full">
          <img src="https://res.cloudinary.com/dgizre0g1/image/upload/v1687944501/houseIcon_wkpick.svg" alt="all" />
          <span className="font-playfair font-[700] sm:text-[20px] text-[18px]">Event venues</span>
        </div>
      </div>
            <div className={`${cat === 'Entertainment'? 'bg-primary text-white' : ''} relative border border-[0.5px] border-[#04172A] w-full h-[130px] cursor-pointer`} onClick={() => setCat('Entertainment')}>
        <div className="flex flex-col justify-center items-center gap-[12px] h-full">
          <img src="https://res.cloudinary.com/dgizre0g1/image/upload/v1687944501/musicIcon_dppccz.svg" alt="all" />
          <span className="font-playfair font-[700] sm:text-[20px] text-[18px]">Entertainment</span>
        </div>
      </div>
      <div className={`${cat === 'Decoration'? 'bg-primary text-white' : ''} relative border border-[0.5px] border-[#04172A] w-full h-[130px] cursor-pointer`} onClick={() => setCat('Decoration')}>
        <div className="flex flex-col justify-center items-center gap-[12px] h-full">
          <img src="https://res.cloudinary.com/dgizre0g1/image/upload/v1687944500/decorationIcon_mp1mkl.svg" alt="all" />
          <span className="font-playfair font-[700] sm:text-[20px] text-[18px]">Decoration</span>
        </div>
      </div>
    </Slider>
    <Data cat={cat}/>
    </div>
  )
}