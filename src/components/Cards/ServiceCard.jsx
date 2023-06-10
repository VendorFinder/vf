import React from "react";

const ServiceCard = ({ img, title, text, bgColor }) => {
    const cardClasses = `${bgColor}`
  return (
    <div>
      <div className="max-w-sm rounded">
        <div className="w-full h-68 ">
          <img
            className="object-cover w-full h-76 rounded"
            src={img}
            alt="Card Image"
          />
        </div>
        <div className={`px-10 py-4 bg-[#DEF2F5] font-lato h-44 ${cardClasses}`}>
          <div className="font-bold text-xl mb-2">{title}</div>
          <p className="text-gray-700 text-base">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
