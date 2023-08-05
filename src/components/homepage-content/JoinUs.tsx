/* eslint-disable @next/next/no-img-element */
import Button from "@/components/ui-elements/button";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

export default function JoinUs() {
  return (
    <>
      <div className="flex flex-row items-center  justify-evenly  border-indigo-500  p-10  bg-[url('/assets/img/stars.jpg')]  mt-14 py-20 ">
   
        <div className="grid grid-rows-2 grid-cols-2  w-1/6 opacity-40">
          <Image
            src="/assets/img/smile1.jpg"
            width={150}
            height={150}
            alt=""
            className="w-20 h-20 object-cover rounded-full col-start-1 col-span-2 opacity-0 lg:opacity-100"
          />
          <Image
            src="/assets/img/smile2.jpg"
            width={150}
            height={150}
            alt=""
            className="w-20 h-20 object-cover rounded-full opacity-0 md:opacity-100  "
          />
          <Image
            src="/assets/img/smile3.jpg"
            width={150}
            height={150}
            alt=""
            className="w-28 h-28 object-cover rounded-full col-start-2 col-span-2 opacity-0 md:opacity-100  "
          />
        </div>
        <div className="flex flex-col items-center  gap-6 text-white text-center">
          <h1 className="font-extrabold text-transparent py-2 text-4xl bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-700">
            Dont miss Updates from <span className="">TicketDaddy</span>
          </h1>
          <h2 className="text-2xl font-extrabold ">
            Join Our Newsletter to Participate
          </h2>
          <input
            placeholder="exampleman@gmail.com"
            type="email"
            className="h-12 w-46 py-[.5em] px-10 rounded-3xl text-black"
          />
          <Button buttonType="default" className="h-9 py-[.5em] px-8 my-5">
            Join Us <ChevronRight />
          </Button>
        </div>
        <div className="grid grid-rows-2 grid-cols-2  lg:w-1/6 md:w-1/4 w-1/6  opacity-40">
          {" "}
          <Image
            src="/assets/img/smile6.jpg"
            width={150}
            height={150}
            alt=""
            className="w-20 h-20 object-cover rounded-full col-start-1 col-span-2 opacity-0 lg:opacity-100"
          />
          <Image
            src="/assets/img/smile5.jpg"
            width={150}
            height={150}
            alt=""
            className="w-20 h-20 object-cover rounded-full  opacity-0 md:opacity-100"
          />
          <Image
            src="/assets/img/smile4.jpg"
            width={150}
            height={150}
            alt=""
            className="w-28 h-28 object-cover rounded-full col-start-2 col-span-2 opacity-0 md:opacity-100 "
          />
        </div>
      </div>
    </>
  );
}
