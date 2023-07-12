import Image from "next/image";
import Button from "@/components/ui-elements/button";
import { ReactNode } from "react";

export const Header = ({ children }:{children: ReactNode}) => {
  return <div className="text-4xl font-extrabold">{children}</div>;
};

export const Mainflex = ({ children }:{children: ReactNode}) => {
  return <div className="flex flex-col md:flex-row items-center lg:justify-around my-6  gap-4 ">{children}</div>;
};

function UpcomingEvents() {
  return (
    <div className="mx-10  mt-24">
      <Header>Upcoming Events </Header>
      <Mainflex>
      
        <div>
          <div className="">
            <Image
              width={360}
              height={150}
              src="/assets/img/teen.jpg"
              alt=""
              className="w-70 h-60  object-cover rounded-xl "
            />
            <div className="text-3xl font-extrabold md:h-16 lg:h-8 ">Lagos Teens Calabash</div>
            <p className="text-xl font-medium my-2">July 4th, 2023</p>
            <p className="text-md font-medium my-2 text-gray-600">Lekki conservation center</p>

            <Button buttonType="secondary">See More</Button>
          </div>
        </div>
        <div>
          <div>
            <Image
              width={360}
              height={150}
              src="/assets/img/barbeach.jpg"
              alt=""
              className="w-70 h-60 object-cover rounded-xl "
            />
            <div className="text-3xl font-extrabold md:h-16 lg:h-8 ">Bar Beach SportFest</div>
            <p className="text-xl font-medium my-2">November 18th, 2023</p>
            <p className="text-md font-medium my-2 text-gray-600">Bar Beach</p>

            <Button buttonType="secondary">See More</Button>
          </div>
        </div>
        <div>
          <div>
            <Image
              width={360}
              height={150}
              src="/assets/img/hike.jpg"
              alt=""
              className="w-70 h-60 object-cover rounded-xl "
            />
            <div className="text-3xl font-extrabold md:h-16 lg:h-8 ">Hikers Block</div>
            <p className="text-xl font-medium my-2">August 5, 2023</p>
            <p className="text-md font-medium my-2 text-gray-600">Udu Hills</p>

            <Button buttonType="secondary">See More</Button>
          </div>
        </div>
      </Mainflex>
    </div>
  );
}
export default UpcomingEvents;
