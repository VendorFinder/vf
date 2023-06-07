import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import next from '../../assets/about/next.png'
import prev from '../../assets/about/prev.png'

const PreviousButton = ({ onClick }) => (
  <button onClick={onClick} className="bg-[#0C4E8B] h-[40px] w-[40px] flex justify-center items-center rounded-[50%] absolute left-[-20px] z-[1] top-1/2 transform -translate-y-1/2">
    <img src={prev} alt="prev" />
  </button>
);

const NextButton = ({ onClick }) => (
  <button onClick={onClick} className="bg-[#0C4E8B] h-[40px] w-[40px] flex justify-center items-center rounded-[50%] absolute right-[-20px] top-1/2 transform -translate-y-1/2">
    <img src={next} alt="next" />
  </button>
);

export default function Slide() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <PreviousButton />,
    nextArrow: <NextButton />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2, // Number of components to show for screen width <= 1024px
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1, // Number of components to show for screen width <= 768px
        },
      },
    ],
  };
  
  return (
    <Slider {...settings} className=" flex flex-col gap-[50px] mx-auto  ">
      <div className="relative bg-[#DEF2F5] w-full h-[426px]">
        <div className="absolute h-[426px] w-full bottom-[-20px] top-[-20px] left-[20px] bg-[#DEF2F5]"></div>
      </div>
      <div className="relative bg-[#DEF2F5] w-full h-[426px]">
      <div className="absolute h-[426px] w-full bottom-[-20px] top-[-20px] left-[20px] bg-[#DEF2F5]"></div>
      </div>
      <div className=" relative bg-[#DEF2F5] w-full h-[426px]">
      <div className="absolute h-[426px] w-full bottom-[-20px] top-[-20px] left-[20px] bg-[#DEF2F5]"></div>
      </div>
      <div className="relative bg-[#DEF2F5] w-full h-[426px]">
      <div className="absolute h-[426px] w-full bottom-[-20px] top-[-20px] left-[20px] bg-[#DEF2F5]"></div>
      </div>
    </Slider>
  );
}
