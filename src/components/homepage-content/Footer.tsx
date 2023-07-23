import { Instagram , Twitter , Linkedin} from "lucide-react";
import Link from 'next/link';

function Footer() {
  return (
    <>
      <div className="flex flex-col  border border-indigo-600 mx-auto w-11/12 max-w-[1600px]  mt-24 rounded-xl text-white bg-indigo-800 ">
        <div className="flex md:flex-row flex-col place-content-around my-16 font-normal mx-5 ">
          <div className="">
            <h1 className="mb-10 md:my-3 text-3xl font-extrabold shadow-2xl">
              TicketZ
            </h1>
            <div className="flex flex-row gap-6  md:my-3 my-3 font-extrabold">
              <Instagram />
              <Twitter />
              <Linkedin />
            </div>
          </div>
          <div className="flex flex-col md:gap-3 ">
            <Link href="/" className="my-3 hover:text-indigo-200 ">Privacy Policy</Link>
            <Link href="/"className="my-3 hover:text-indigo-200">Terms of Service</Link>
          </div>
          <div className="flex flex-col md:gap-3">
            <Link href="/" className="my-3 hover:text-indigo-200 ">Partners</Link>
            <Link href="/" className="my-3 hover:text-indigo-200 ">Promotions</Link>
          </div>
          <div className="flex flex-col md:gap-3">
            <Link  href="/" className="my-3 hover:text-indigo-200 ">Contact</Link>
            <Link href="/" className="my-3 hover:text-indigo-200 ">FAQ</Link>
          </div>
        </div>
        <div className=" w-full bg-indigo-600 flex justify-center">
          <p className="py-4  text-gray-100 text-center">
            Copyright 2023 TicketZ, All Rights Reserved
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer;
