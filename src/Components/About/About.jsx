import React from "react";
import aboutImg from "../../assets/images/about.jpeg";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section>
      <div className="container">
        <div
          className="flex justify-between gap-[50px]
        lg:gap-[130px] xl:gap-0 flex-col lg:flex-row"
        >
          {/*------------------about img--------------------------- */}

          <div
            className="relative w-3/4 lg:w-1/2 xl:w-[770px] z-10
        order-2 lg:order-1 "
          >
            <img src={aboutImg} className="about_img rounded-2xl" alt="" />
          </div>

          {/*-----------------------------about content-------------------------------- */}

          <div className="w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2 mr-20">
            <h2 className="heading"> Best Bus Booking Platform for 5 years! </h2>

            <br />

            <p className="text__para ">
            For an uninterrupted half-decade, our bus booking platform has proudly held the esteemed title of the Best in the industry. Over the course of five years, we have consistently delivered exceptional service, for booking bus journeys.
            </p>

            <p className="text__para mt-[30px]">
            Our commitment to excellence, user-friendly interface, and dedication to customer satisfaction have earned us the trust and loyalty of travelers nationwide. Join the countless satisfied passengers and book now!.
            </p>

            <br />
            <br />
            <Link to="/">
              <button className="btn text-white"> Learn more </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
