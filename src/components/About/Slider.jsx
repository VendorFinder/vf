import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const PreviousButton = ({ onClick }) => (
  <button onClick={onClick} className="bg-[#0C4E8B] h-[40px] w-[40px] flex justify-center items-center rounded-[50%] absolute left-[-20px] z-[1] top-1/2 transform -translate-y-1/2">
    <img src="https://res.cloudinary.com/dgizre0g1/image/upload/v1687944503/prev_eup1qd.png" alt="prev" />
  </button>
);

const NextButton = ({ onClick }) => (
  <button onClick={onClick} className="bg-[#0C4E8B] h-[40px] w-[40px] flex justify-center items-center rounded-[50%] absolute right-[-20px] top-1/2 transform -translate-y-1/2">
        <img src="https://res.cloudinary.com/dgizre0g1/image/upload/v1687944519/rightarrow_nmzpy8.png" alt="next" />

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

  const team = [
    {
      id: 1,
      picture: 'https://res.cloudinary.com/dgizre0g1/image/upload/v1687944514/member1_guwp1t.png',
      name: 'Imelda Onyebueke',
      role: 'Product Manager'
    },
    {
      id: 2,
      picture: 'https://res.cloudinary.com/dgizre0g1/image/upload/v1687952306/Mask_group_14_eyywne.png',
      name: 'Olayemi Ojo',
      role: 'Product Manager'
    },
    {
      id: 3,
      picture: 'https://res.cloudinary.com/dgizre0g1/image/upload/v1687944516/member3_oriol0.png',
      name: 'Esther  Bello',
      role: 'Product Designer'
    },
    {
      id: 4,
      picture: 'https://res.cloudinary.com/dgizre0g1/image/upload/v1687944516/member2_nxx4rw.png',
      name: 'Ameh Elijah',
      role: 'Software Developer'
    },
    {
      id: 5,
      picture: 'https://res.cloudinary.com/dgizre0g1/image/upload/v1687952442/Mask_group_15_qsmcjn.png',
      name: 'Bello Damilola',
      role: 'Product Designer'
    },
    {
      id: 6,
      picture: 'https://res.cloudinary.com/dgizre0g1/image/upload/v1687952435/Mask_group_16_ceu5jb.png',
      name: 'Samson Aderonmu',
      role: 'Software Developer'
    },
    {
      id: 7,
      picture: 'https://res.cloudinary.com/dgizre0g1/image/upload/v1687952314/Mask_group_13_gwch9d.png',
      name: 'Abigail Akhigbe',
      role: 'Product Designer'
    },
    {
      id: 8,
      picture: 'https://res.cloudinary.com/dgizre0g1/image/upload/v1687952318/Mask_group_12_s07ank.png',
      name: 'Abisola Paul Olatunde',
      role: 'Product Manager'
    }
  ]
  
  return (
    <Slider {...settings} className=" flex flex-col gap-[50px] mx-auto  ">
        {team && team.map(m => (          
        <div key={m.id} className=" w-full sm:h-[520px] h-[400px] flex flex-col items-center justify-center ">
          <img className="h-[85%] w-full" src={m.picture} alt="team" />
          <div className="flex flex-col justify-center items-center mt-[30px]">
            <h3 className="text-body-text-1 font-[600]">{m.name}</h3>
            <span className="text-body-text-2">{m.role}</span>
          </div>
        </div>
        ))}
    </Slider>
  );
}
