import { Instagram } from "lucide-react";
import { Twitter } from "lucide-react";
import { Linkedin } from "lucide-react";
function Footer() {
  return (
    <>
      <div className="flex flex-col place-content-center ">
        <div className="flex flex-row place-content-around my-16  font-bold ">
          <div className="">
            <h1 className="my-3 text-3xl font-extrabold shadow-2xl">TicketDaddy</h1>
            <div className="flex flex-row gap-3 ">
              <Instagram />
              <Twitter />
              <Linkedin />
            </div>
          </div>
          <div>
            <p className="my-3">Privacy Policy</p>
            <p>Terms of Service</p>
          </div>
          <div>
            <p className="my-3">Partners</p>
            <p>Promotions</p>
          </div>
          <div>
            <p className="my-3">Contact</p>
            <p>FAQ</p>
          </div>
        </div>
        <div className=" w-screen bg-indigo-600 flex justify-center">
          <p className="py-4  color-white ">
            Copyright 2023 TicketDaddy, All Rights Reserved
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer;
