import Button from "@/components/ui-elements/button";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className=" h-screen mx-16 flex items-center justify-center ">
      <div className="p-12 flex flex-col items-center justify-center border-2 border-black rounded-2xl">
        <h1 className="my-5 text-4xl font-bold">
          Host an Event or Buy a Ticket
        </h1>

        <div className="my-5  ">
          {" "}
          <ul className=" gap-x-5 m-10 max-w-2xl mx-auto  flex flex-row items-center justify-center">
            <li className="relative h-44 md:h-28 lg:w-52">
              <input
                className="sr-only peer"
                type="radio"
                value="yes"
                name="answer"
                id="host"
              />
              <label
                className="flex p-6 bg-white border border-gray-300 rounded-lg cursor-pointer focus:outline-none hover:bg-indigo-100 peer-checked:ring-indigo-700 peer-checked:ring-2 peer-checked:border-transparent peer-checked:bg-indigo-100 font-bold text-sm md:text-base shadow-md "
                htmlFor="host"
              >
                I'm intrested in Hosting an Event
              </label>
              <Button className="my-5 px-5 hidden peer-checked:block">
                Host Event
              </Button>
              <Image
                src="/img/calender.png"
                width={50}
                height={50}
                alt=""
                className="absolute hidden w-6 h-6 peer-checked:block top-5 right-3"
              />
            </li>
            <li className="relative h-44 md:h-28 lg:w-52">
              <input
                className="sr-only peer"
                type="radio"
                value="yes"
                name="answer"
                id="buy"
              />
              <label
                className="flex p-6  bg-white border border-gray-300 rounded-lg cursor-pointer focus:outline-none hover:bg-indigo-100 peer-checked:ring-indigo-700 peer-checked:ring-2 peer-checked:border-transparent  peer-checked:bg-indigo-100 font-bold text-sm md:text-base shadow-md "
                htmlFor="buy"
              >
                I'm intrested in Purchasing a ticket
              </label>
              <Button className="my-5  px-5 hidden peer-checked:block">
                Buy Ticket
              </Button>

              <Image
                src="/img/ticketicon.png"
                width={50}
                height={50}
                alt=""
                className="absolute hidden w-6 h-6 peer-checked:block top-5 right-3"
              />
            </li>
          </ul>
        </div>

        <h3>
          Already have an account?{" "}
          <Link className="text-indigo-700 font-bold " href="/">
            Log in
          </Link>{" "}
        </h3>
      </div>
    </div>
  );
}
