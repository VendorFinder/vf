import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Data from './Data'



// assests
import next from '../../assets/about/next.png'
import prev from '../../assets/about/prev.png'
import foodIcon from '../../assets/about/foodIcon.svg'
import allIcon from '../../assets/about/allIcon.svg'
import photographyIcon from '../../assets/about/photographyIcon.svg'
import houseIcon from '../../assets/about/houseIcon.svg'
import musicIcon from '../../assets/about/musicIcon.svg'
import decorationIcon from '../../assets/about/decorationIcon.svg'




const PreviousButton = ({ onClick }) => (
  <button onClick={onClick} className="bg-[#0C4E8B] h-[40px] w-[40px] flex justify-center items-center rounded-[50%] absolute left-[-20px] z-[1] top-[170px] transform -translate-y-1/2">
    <img src={prev} alt="prev" />
  </button>
);

const NextButton = ({ onClick }) => (
  <button onClick={onClick} className="bg-[#0C4E8B] h-[40px] w-[40px] flex justify-center items-center rounded-[50%] absolute right-[-20px] top-[170px] transform -translate-y-1/2">
    <img src={next} alt="next" />
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
          <span className="font-lato font-[700] text-[16px] text-center w-full">or choose a category to quickly find the help you need</span>
      </div>
      <Slider {...settings} className=" flex flex-col gap-[50px] mx-auto mb-[100px]">
      <div className={`${cat === ''? 'bg-primary text-white' : ''} relative border border-[0.5px] border-[#04172A] w-full h-[130px] cursor-pointer`} onClick={() => setCat('')}>
        <div className="flex flex-col justify-center items-center gap-[12px] h-full">
          <img src={allIcon} alt="all" />
          <span className="font-playfair font-[700] text-[20px]">All</span>
        </div>
      </div>
      <div className={`${cat === 'Catering'? 'bg-primary text-white' : ''} relative border border-[0.5px] border-[#04172A] w-full h-[130px] cursor-pointer`} onClick={() => setCat('Catering')}>
        <div className="flex flex-col justify-center items-center gap-[12px] h-full">
          <img src={foodIcon} alt="all" />
          <span className="font-playfair font-[700] text-[20px]">Catering</span>
        </div>
      </div>
            <div className={`${cat === 'Photography'? 'bg-primary text-white' : ''} relative border border-[0.5px] border-[#04172A] w-full h-[130px] cursor-pointer`} onClick={() => setCat('Photography')}>
        <div className="flex flex-col justify-center items-center gap-[12px] h-full">
          <img src={photographyIcon} alt="all" />
          <span className="font-playfair font-[700] text-[20px]">Photography</span>
        </div>
      </div>
      <div className={`${cat === 'venues'? 'bg-primary text-white' : ''} relative border border-[0.5px] border-[#04172A] w-full h-[130px] cursor-pointer`} onClick={() => setCat('venues')}>
        <div className="flex flex-col justify-center items-center gap-[12px] h-full">
          <img src={houseIcon} alt="all" />
          <span className="font-playfair font-[700] text-[20px]">Event venues</span>
        </div>
      </div>
            <div className={`${cat === 'Entertainment'? 'bg-primary text-white' : ''} relative border border-[0.5px] border-[#04172A] w-full h-[130px] cursor-pointer`} onClick={() => setCat('Entertainment')}>
        <div className="flex flex-col justify-center items-center gap-[12px] h-full">
          <img src={musicIcon} alt="all" />
          <span className="font-playfair font-[700] text-[20px]">Entertainment</span>
        </div>
      </div>
      <div className={`${cat === 'Decoration'? 'bg-primary text-white' : ''} relative border border-[0.5px] border-[#04172A] w-full h-[130px] cursor-pointer`} onClick={() => setCat('Decoration')}>
        <div className="flex flex-col justify-center items-center gap-[12px] h-full">
          <img src={decorationIcon} alt="all" />
          <span className="font-playfair font-[700] text-[20px]">Decoration</span>
        </div>
      </div>
    </Slider>
    <Data cat={cat}/>
    </div>
  )
}