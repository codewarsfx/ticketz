/* eslint-disable react/no-unescaped-entities */
"use client";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Testimonials() {
  return (
    <>
      <h1 className=" font-bold text-4xl  md:text-6xl text-center text-gray-600 mt-20">
        Why Event Planners love Streak
      </h1>
      <Swiper
        loop={true}
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        // navigation
        pagination={{ clickable: true }}
        className="select-none "
      >
        <SwiperSlide>
          {" "}
          <div className="flex  flex-col w-full justify-center items-center  my-10 ">
            <div className="flex flex-row  items-center justify-center text-justify  bg-indigo-100 py-16 px-10 mx-6 rounded-2xl max-w-[1200px] drop-shadow-xl  ">
              <div className=" ">
                <Image
                  src="/assets/img/quots.png"
                  alt=""
                  width={50}
                  height={50}
                  className=" mb-7 "
                />
                <p className="w-11/12 text-lg lg:text-2xl mb-7">
                  Streak's user friendly interface and tight payment integration
                  significantly boosted our event's ticket sales and attendee
                  satisfaction.
                </p>
                <p className=" font-bold text-2xl mb-2 ">Chima Okorie</p>
                <p className="  text-2xl text-gray-500 mb-7">
                  CEO , Karla House Parties
                </p>
                <a
                  href="http://"
                  className="text-xl font-semibold relative text-indigo-700 "
                >
                  Visit Profile{" "}
                  <ChevronRight className="absolute top-0 right-[-20px]" />
                </a>
              </div>{" "}
              <Image
                src="/assets/img/Klarna.webp"
                alt=""
                width={500}
                height={500}
                className=" w-4/12 md:block hidden"
              />
            </div>
          </div>
        </SwiperSlide>{" "}
        <SwiperSlide>
          {" "}
          <div className="flex  flex-col w-full justify-center items-center  my-10 ">
            <div className="flex flex-row  items-center justify-center text-justify  bg-indigo-100 py-16 px-10 rounded-2xl mx-6 max-w-[1200px] drop-shadow-xl ">
              <div className=" ">
                <Image
                  src="/assets/img/quots.png"
                  alt=""
                  width={50}
                  height={50}
                  className=" mb-7 "
                />
                <p className="w-11/12 text-lg lg:text-2xl mb-7">
                  The outstanding customer support and customizable event pages
                  on Streak have made it an essential part of our buffet
                  planning process.
                </p>
                <p className=" font-bold text-2xl mb-2 ">Zara Balogun</p>
                <p className="  text-2xl text-gray-500 mb-7">
                  Chef , Resturant365
                </p>
                <a
                  href="http://"
                  className="text-xl font-semibold relative text-indigo-700 "
                >
                  Visit Profile{" "}
                  <ChevronRight className="absolute top-0 right-[-20px]" />
                </a>
              </div>{" "}
              <Image
                src="/assets/img/Restaurant.webp"
                alt=""
                width={500}
                height={500}
                className=" w-4/12 md:block hidden"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="flex  flex-col w-full justify-center items-center  my-10 ">
            <div className="flex flex-row  items-center justify-center text-justify  bg-indigo-100 py-16 px-10 rounded-2xl mx-6 max-w-[1200px] drop-shadow-xl ">
              <div className=" ">
                <Image
                  src="/assets/img/quots.png"
                  alt=""
                  width={50}
                  height={50}
                  className=" mb-7 "
                />
                <p className="w-11/12 text-lg lg:text-2xl mb-7">
                  Thanks to Streak's secure and data-driven ticket selling
                  platform, we've seen remarkable growth in ticket sales and
                  gained valuable insights into our attendees' preferences.
                </p>
                <p className=" font-bold text-2xl mb-2 ">Boma Friday</p>
                <p className="  text-2xl text-gray-500 mb-7">
                  Customer Care Officer , Travix
                </p>
                <a
                  href="http://"
                  className="text-xl font-semibold relative text-indigo-700 "
                >
                  Visit Profile{" "}
                  <ChevronRight className="absolute top-0 right-[-20px]" />
                </a>
              </div>{" "}
              <Image
                src="/assets/img/Travix.webp"
                alt=""
                width={500}
                height={500}
                className=" w-4/12 md:block hidden"
              />
            </div>
          </div>
        </SwiperSlide>{" "}
      </Swiper>
    </>
  );
}
