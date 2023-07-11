import { Instagram , Twitter , Linkedin} from "lucide-react";
import Link from 'next/link';

function Footer() {
  return (
    <>
      <div className="flex flex-col place-content-center ">
        <div className="flex md:flex-row flex-col place-content-around my-16  font-bold mx-5 ">
          <div className="">
            <h1 className="my-3 text-3xl font-extrabold shadow-2xl">
              TicketDaddy
            </h1>
            <div className="flex flex-row gap-3  my-3">
              <Instagram />
              <Twitter />
              <Linkedin />
            </div>
          </div>
          <div className="flex flex-col gap-3 ">
            <Link href="/" className="my-3">Privacy Policy</Link>
            <Link href="/">Terms of Service</Link>
          </div>
          <div className="flex flex-col gap-3">
            <Link href="/" className="my-3">Partners</Link>
            <Link href="/">Promotions</Link>
          </div>
          <div className="flex flex-col gap-3">
            <Link  href="/" className="my-3">Contact</Link>
            <Link href="/">FAQ</Link>
          </div>
        </div>
        <div className=" w-screen bg-indigo-600 flex justify-center">
          <p className="py-4  text-white ">
            Copyright 2023 TicketDaddy, All Rights Reserved
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer;
