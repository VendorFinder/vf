import React from "react";
import FormatQuoteOutlinedIcon from "@mui/icons-material/FormatQuoteOutlined";

const EventHostCard = ({ imageSrc, title, text }) => {
  return (
    <div className="max-w-sm h-[23rem] rounded  shadow-lg border-2 border-[#04172A]">
      <div className="">
        <div className="relative top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full flex justify-center">
          <img className="w-20 rounded-full " src={imageSrc} alt="Card" />
        </div>
      </div>
      <div className="px-6 flex flex-col items-center">
        <div className="font-bold text-xl mb-6 text-center">{title}</div>
        <div className="flex items-center justify-center mb-6">
          <FormatQuoteOutlinedIcon
            style={{ fontSize: "35px", color: "#A0E9F4" }}
          />
        </div>
        <p className="text-gray-700 text-base mb-6">{text}</p>
      </div>
    </div>
  );
};

export default EventHostCard;
