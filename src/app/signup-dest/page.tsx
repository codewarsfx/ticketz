/* eslint-disable react/no-unescaped-entities */

import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header/Header";

export default function Home() {
  return (
    <>
      <Header />
      <div className=" h-screen  flex items-center justify-between ">
        <div className="flex justify-center items-center lg:w-2/3">
          <div className="p-12 mx-8 w-full lg:w-auto flex flex-col items-center justify-center border border-black rounded-2xl shadow-md">
            <h1 className="my-5 text-2xl font-bold text-center   ">
              Host an Event or Buy a Ticket
            </h1>

            <div className="my-5  ">
              {" "}
              <ul className=" gap-x-3 m-50 max-w-2xl mx-auto  flex flex-col md:flex-row items-center justify-center">
                <li className="relative my-3 md:h-28 md:w-52 w-40">
                  <input
                    className="sr-only peer"
                    type="radio"
                    value="yes"
                    name="answer"
                    id="host"
                  />
                  <label
                    className="flex p-6 font-normal  bg-white border border-gray-300 rounded-lg cursor-pointer focus:outline-none hover:bg-indigo-100 hover:font-medium  text-sm md:text-base shadow-md peer-checked:bg-indigo-200 peer-checked:border-indigo-400 peer-checked:border-2 "
                    htmlFor="host"
                  >
                    Host Event
                  </label>

                  <Image
                    src="/img/calender.png"
                    width={50}
                    height={50}
                    alt=""
                    className="absolute  w-6 h-6 top-5 right-3"
                  />
                </li>
                <li className="relative my-3 md:h-28 md:w-52 w-40">
                  <input
                    className="sr-only peer"
                    type="radio"
                    value="yes"
                    name="answer"
                    id="buy"
                  />
                  <label
                    className="flex p-6 font-normal  bg-white border border-gray-300 rounded-lg cursor-pointer focus:outline-none hover:bg-indigo-100 hover:font-medium  text-sm md:text-base shadow-md peer-checked:bg-indigo-200 peer-checked:border-indigo-400 peer-checked:border-2 "
                    htmlFor="buy"
                  >
                    Buy Ticket
                  </label>

                  <Image
                    src="/img/ticketicon.png"
                    width={50}
                    height={50}
                    alt=""
                    className="absolute  w-6 h-6 top-5 right-3"
                  />
                </li>
              </ul>
            </div>

            <h3 className="text-gray-500 text-center">
              Already have an account?{" "}
              <Link
                className="text-indigo-600 font-bold hover:font-extrabold:text-indigo-800 "
                href="/"
              >
                Log in
              </Link>{" "}
            </h3>
          </div>{" "}
        </div>
        <div className="w-1/3 lg:block hidden">
          <Image
            src="/assets/img/blueparty.jpg"
            width={1600}
            height={1600}
            alt=""
            className=" h-screen w-full object-cover "
          />
        </div>
      </div>
    </>
  );
}
