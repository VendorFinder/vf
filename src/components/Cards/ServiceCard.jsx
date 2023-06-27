import React from "react";

const ServiceCard = ({ img, title, text, bgColor }) => {
  const cardClasses = `${bgColor}`;

  return (
    <div className="flex items-center justify-center">
      <div className="max-w-sm">
        <div className="w-full h-56">
          <img
            className="object-cover w-full h-full rounded"
            src={img}
            alt="Card Image"
          />
        </div>
        <div
          className={`px-6 py-4 bg-[#DEF2F5] font-lato h-44 overflow-hidden ${cardClasses}`}
        >
          <div className="font-bold text-xl mb-2">{title}</div>
          <p className="text-gray-700 text-base">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
