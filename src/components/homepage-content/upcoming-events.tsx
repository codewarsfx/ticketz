import Image from "next/image";
import Button from "@/components/ui-elements/button";
function UpcomingEvents() {
  return (
    <>
      <h1 className="text-4xl font-bold ">Upcoming Events </h1>
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
              sizes='100vw'
            />
            <div>lagos teens calabash</div>
            <div>August,2023</div>
            <div>Lekki conservation center</div>

            <Button buttonType="secondary">Hello</Button>
          </div>
        </div>
      </div>
    </>
  );
}
export default UpcomingEvents;
