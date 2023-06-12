import React from "react";
import imageSrc from "../../assets/Ayomide.png";
import imageSrc1 from "../../assets/Chidi.png";
import imageSrc2 from "../../assets/Isabelle.png";
import EventHostCard from "../EventHostCard/EventHostCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import next from "../../assets/rightarrow.png";
import prev from "../../assets/leftarrow.png";

const PreviousButton = ({ onClick }) => (
  <button
    onClick={onClick}
    className="bg-white h-[40px] w-[40px] flex justify-center items-center  border-solid border-2 border-[#0C4E8B]  rounded-[50%] absolute left-[25px] md:left-[45px] z-[1] top-[220px] md:top-[280px] transform -translate-y-1/2"
  >
    <img src={prev} alt="prev" />
  </button>
);

const NextButton = ({ onClick }) => (
  <button
    onClick={onClick}
    className="bg-[#0C4E8B] h-[40px] w-[40px] flex justify-center items-center rounded-[50%] absolute right-[3px] md:right-[45px] top-[220px] md:top-[280px] transform -translate-y-1/2"
  >
    <img src={next} alt="next" />
  </button>
);

const Cards = () => {
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
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div>
      <Slider {...settings} className="overflow-hidden px-2 md:px-20 py-10">
        <EventHostCard
          imageSrc={imageSrc}
          title="Ayomide Bamidele"
          text="I had the most incredible experience using VendorFinder to find vendors for my wedding. The vendors I connected with were professional, talented, and truly brought my vision to life."
        />

        <EventHostCard
          imageSrc={imageSrc1}
          title="Chidi Okeke"
          text="As an event planner, finding reliable and skilled vendors is essential to my success. VendorFinder has been a game-changer for me. The platform is user-friendly, and the vendors available are top-notch."
        />
        <EventHostCard
          imageSrc={imageSrc2}
          title="Isabelle David"
          text="I wanted to throw a unique and memorable birthday party for my daughter, and VendorFinder made it happen. I found the perfect vendors who understood my vision and executed it flawlessly."
        />
        <EventHostCard
          imageSrc={imageSrc}
          title="Ayomide Bamidele"
          text="I had the most incredible experience using VendorFinder to find vendors for my wedding. The vendors I connected with were professional, talented, and truly brought my vision to life."
        />
      </Slider>
    </div>
  );
};

export default Cards;
