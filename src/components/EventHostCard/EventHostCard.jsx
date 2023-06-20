import React from "react";
import quotationMark from "../../assets/quotationMark.png";

const EventHostCard = ({ imageSrc, title, text }) => {
  return (
    <div className="relative  pt-[50px]">
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2/2 w-full flex justify-center">
        <img className="w-20 rounded-full my-2" src={imageSrc} alt="Card" />
      </div>
      <div className="max-w-sm h-[23rem] rounded  shadow-lg border-2 border-[#04172A] pt-[70px]">
        <div className="px-6 flex flex-col items-center">
          <div className="font-bold text-xl mb-6 text-center">{title}</div>
          <div className="flex items-center justify-center mb-6">
            <img src={quotationMark} className="w-7" alt="" />
          </div>
          <p className="text-gray-700 text-base mb-6">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default EventHostCard;
