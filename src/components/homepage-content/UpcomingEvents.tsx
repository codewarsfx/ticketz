import Image from "next/image";
import Button from "@/components/ui-elements/button";
function UpcomingEvents() {
  return (
    <>
      <h1 className="text-4xl font-extrabold my-5">Upcoming Events </h1>
      <div className="flex flex-row">
        {" "}
        <div>
          <div>
            <Image
              src="/teens.jpg"
              alt=""
              quality={100}
              className=""
              width={350}
              height={500}
              sizes="100vw"
            />
            <div className="text-2xl font-extrabold my-3">lagos teens calabash</div>
            <div>August,2023</div>
            <div>Lekki conservation center</div>

            <Button buttonType="secondary">See More</Button>
          </div>
        </div>
      </div>
    </>
  );
}
export default UpcomingEvents;
