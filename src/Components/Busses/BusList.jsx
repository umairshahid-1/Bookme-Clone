import React from "react";
import { busses } from "../../assets/data/busses";
import BusCard from "./BusCard";

const BussesList = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt- [55px] ">
      {busses.map((bus, index) => (
        <BusCard key={bus.id} bus={bus} />
      ))}
    </div>
  );
};
export default BussesList;
