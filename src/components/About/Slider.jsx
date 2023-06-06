// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import next from '../../assets/about/next.png'
// import prev from '../../assets/about/prev.png'

// const PreviousButton = ({ onClick }) => (
//   <button onClick={onClick} className="bg-black absolute left-[-10px] top-1/2 transform -translate-y-1/2">
//     <img src={prev} alt="prev" />
//   </button>
// );

// const NextButton = ({ onClick }) => (
//   <button onClick={onClick} className="bg-black absolute right-0 top-1/2 transform -translate-y-1/2">
//     <img src={next} alt="next" />
//   </button>
// );

// export default function Slide() {
//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 2,
//     slidesToScroll: 1,
//     prevArrow: <PreviousButton />,
//     nextArrow: <NextButton />,
//   };
  
//   return (
//     <Slider {...settings} className=" flex flex-col gap-[50px]  ">
//       <div className="bg-[#DEF2F5] w-[306px] h-[426px] ">
//         <h1>1</h1>
//       </div>
//       <div className="bg-[#DEF2F5] w-[306px] h-[426px] ">
//         <h1>2</h1>
//       </div>
//       <div className="bg-[#DEF2F5] w-[306px] h-[426px] ">
//         <h1>3</h1>
//       </div>
//       <div className="bg-[#DEF2F5] w-[306px] h-[426px] ">
//         <h1>4</h1>
//       </div>
//     </Slider>
//   );
// }
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

export default function Slide() {
  const responsive = {
    0: { items: 1 },
    1024: { items: 3 },
  };

  const items = [
    <div className="carousel-item bg-[#DEF2F5] w-[306px] h-[426px] transform -rotate-[20deg]">Slide 1</div>,
    <div className="carousel-item bg-[#DEF2F5] w-[306px] h-[426px] ">Slide 2</div>,
    <div className="carousel-item bg-[#DEF2F5] w-[306px] h-[426px] ">Slide 3</div>,
    <div className="carousel-item bg-[#DEF2F5] w-[306px] h-[426px] ">Slide 4</div>,
    <div className="carousel-item bg-[#DEF2F5] w-[306px] h-[426px] ">Slide 5</div>,
    <div className="carousel-item bg-[#DEF2F5] w-[306px] h-[426px] ">Slide 6</div>,
  ];

  return (
    <AliceCarousel
      items={items}
      responsive={responsive}
      autoPlay
      autoPlayInterval={3000}
      animationType="fadeout"
      touchTracking={false}
      dotsDisabled
      buttonsDisabled
      infinite
      stagePadding={-200}
    />
  );
};

