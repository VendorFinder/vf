import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import next from '../../assets/about/next.png'
import prev from '../../assets/about/prev.png'
import team from '../../assets/about/team.png'
import member1 from '../../assets/member1.png'
import member2 from '../../assets/member2.png'
import member3 from '../../assets/member3.png'



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
      <div className=" w-full h-[426px]">
        <img src={member1} alt="team" />
      </div>
      <div className=" w-full h-[426px]">
      <img src={member3} alt="team" />
      </div>
      <div className="  w-full h-[426px]">
      <img src={member2} alt="team" />
      </div>
      <div className=" w-full h-[426px]">
      <img src={team} alt="team" />
      </div>
    </Slider>
  );
}
