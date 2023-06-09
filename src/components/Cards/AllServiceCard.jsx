import ServiceCard from "../Cards/ServiceCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";

const PreviousButton = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute right-[70px] md:right-[150px] top-[490px] md:top-[428px] bottom-[-93px] transform -translate-y-1/2 md:translate-y-0"
  >
    <WestOutlinedIcon style={{ color: "#B1B1B1", fontSize: "30px" }} />
  </button>
);

const NextButton = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute right-[20px] md:right-[100px] top-[490px] md:top-[420px] bottom-[-100px] transform -translate-y-1/2 md:translate-y-0"
  >
    <EastOutlinedIcon style={{ color: "#0C4E8B", fontSize: "45px" }} />
  </button>
);

const AllServiceCard = () => {
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
    <div className="py-[50px] md:px-[80px] px-[30px]">
      <Slider {...settings} className="py-8 md:py-2 overflow:hidden">
        <ServiceCard
          img="https://res.cloudinary.com/dgizre0g1/image/upload/v1687944504/Decoration_ryyh6o.png"
          title="Decoration"
          text="Find talented decorators who possess the artistic vision to bring your event to life and create unforgettable memories."
        />
        <ServiceCard
          img="https://res.cloudinary.com/dgizre0g1/image/upload/v1687944503/Catering_tblret.png"
          title="Catering"
          text="Browse through a diverse array of catering professionals who specialize in crafting delectable menus and delightful dining experiences. "
          bgColor="bg-[#F7ECE1]"
        />
        <ServiceCard
          img="https://res.cloudinary.com/dgizre0g1/image/upload/v1687944512/EventVenues_i26wdf.png"
          title="Event venues"
          text="Find beautiful even venues that can make your dream event a reality. Our event venues are tailored to every need and preferences."
        />
        <ServiceCard
          img="https://res.cloudinary.com/dgizre0g1/image/upload/v1687944518/photo_ni5bsb.png"
          title="Photography"
          text="From weddings to corporate events and milestone celebrations, our curated selection of photography vendors offers a unique blend of styles and expertise."
          bgColor="bg-[#F7ECE1]"
        />
      </Slider>
    </div>
  );
};
export default AllServiceCard;
