import React from "react";
import icon01 from "../assets/images/icon01.png";
import icon02 from "../assets/images/icon02.png";
import icon03 from "../assets/images/icon03.png";
import header from "../assets/images/header-img.jpg";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import About from "../Components/About/About";
import ServiceList from "../Components/Services/ServiceList";
import BussesList from "../Components/Busses/BusList";
import FAQList from "../Components/FAQ/FAQList";

const Home = () => {
  return (
    <>
      {/*-----------------------------hero section-----------------------------*/}

      <header className="section__container header__container">
        <h1 className="section__header text-headingColor ">
          Reservey - One Stop for all
          <br />Online Bus Bookings!
        </h1>
        <br />
        <img
          src={header}
          className="header__containerimg rounded-2xl"
          alt="header"
        />
      </header>

      {/*---------------------------hero section end---------------------------*/}

      <section>
        <div className="container">
          <div className="lg:w-[470px] mx-auto">
            <h2 className="heading text-center">
              Providing the Best Services in the Town!
            </h2>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
           gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]"
          >
            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon01} className="square-image" alt="Icon" />
              </div>

              <div className="mt-[30px]">
                <h2
                  className="text-[26px] leading-9 text-headingColor font-[700]
                  text-center"
                >
                  Find a Bus
                </h2>
                <p
                  className="text-[16px] leading-7 text-textColor font-[400]
                mt-4 text-center"
                >
                  Find a bus that matches your requirements perfectly!
                </p>
                <Link
                  to="/busses"
                  className="w-[44px] h-[44px] rounded-full border
                border-solid border={#181A1E} mt-[30px] mx-auto flex items-center justify-center
                group hover:bg-primaryColor hover:border-none"
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>

            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon02} className="square-image" alt="Icon" />
              </div>

              <div className="mt-[30px]">
                <h2
                  className="text-[26px] leading-9 text-headingColor font-[700]
                  text-center"
                >
                  Get on Exact Location
                </h2>
                <p
                  className="text-[16px] leading-7 text-textColor font-[400]
                mt-4 text-center"
                >
                  Always get on the excat location that is being shown! 
                </p>
                <Link
                  to="/busses"
                  className="w-[44px] h-[44px] rounded-full border
                border-solid border={#181A1E} mt-[30px] mx-auto flex items-center justify-center
                group hover:bg-primaryColor hover:border-none"
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>

            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon03} className="square-image" alt="Icon" />
              </div>

              <div className="mt-[30px]">
                <h2
                  className="text-[26px] leading-9 text-headingColor font-[700]
                  text-center"
                >
                  Book Online and On-Site
                </h2>
                <p
                  className="text-[16px] leading-7 text-textColor font-[400]
                mt-4 text-center"
                >
                  Visit our franchise for on-site booking and our website for online!
                </p>
                <Link
                  to="/busses"
                  className="w-[44px] h-[44px] rounded-full border
                border-solid border={#181A1E} mt-[30px] mx-auto flex items-center justify-center
                group hover:bg-primaryColor hover:border-none"
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*---------------------------------about Section---------------------*/}
      <br />
      <br />
      <br />
      <About />

      {/*----------------------------- offers section ----------------------------- */}

      <br />
      <br />
      <br />
      <br />
      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center"> Our website Offers</h2>

            <p className="text__para text-center">Our website offers a diverse array of features and services designed to enhance your online experience. 
            </p>
          </div>

          

          {/*-------------------------- Service List ---------------------------------- */}
          <ServiceList />
        </div>
      </section>
      <br/>
      <br/>
      <br/>
      <br/>

      

      {/*------------------------------- Top Rated busses -------------------------------- */}

      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center"> Top Rated Busses</h2>

            <p className="text__para text-center">
             At reservey, we care about our people and the reviews they provide. These are our best buses that scored an overall rating of 5!
            </p>
          </div>

          <BussesList />
        </div>
      </section>
      <br/>
      <br/>
      <br/>
      <br/>
      {/*------------------------------- FAQ Section -------------------------------- */}
      <section>
  <div className="container">
    <div className="flex justify-between flex-col-reverse md:flex-row gap-[50px] lg:gap-0 ">
      <div className="w-full ">
        <h2 className="heading text-center">Most Asked Questions</h2>
        <FAQList />
      </div>
    </div>
  </div>
</section>

    </>
  );
};

export default Home;
