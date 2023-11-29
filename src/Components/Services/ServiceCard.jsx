import React from "react";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import icon01 from "../../assets/images/icon01.png";// Update the path

const ServiceCard = ({ item, index }) => {
  const { name, desc, img } = item;

  return (
    <div className="py-[30px] px-3 lg:px-5 border border-solid border-black rounded-2xl">
      <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
        {name}
      </h2>
      <p className="text-[16px] leading-7 font-[400] text-textColor mt-4 text-center">
        {desc}
      </p>

      {/* Image with src={icon01} */}
      <img src={img} alt="Icon" className="w-15 h-15 mt-4 mx-auto" />


      <div className="flex items-center justify-between mt-[30px]">
        <Link
          to="/doctors"
          className="w-[44px] h-[44px] rounded-full border
                border-solid border={#181A1E} mt-[30px] mx-auto flex items-center justify-center
                group hover:bg-primaryColor hover:border-none border border-solid border-black"
        >
          <BsArrowRight className="group-hover:text-white w-6 h-5" />
        </Link>

        
      </div>
    </div>
  );
};

export default ServiceCard;
