import Button from "@/components/ui-elements/button";

export default function JoinUs() {
  return (
    <>
      <div className="flex flex-col items-center  border-2 border-black rounded-3xl  p-10 shadow-2xl bg-indigo-100 text-white mx-10 py-20">
        <div></div>
        <div className="flex flex-col items-center gap-6">
          <h1 className="text-4xl font-extrabold text-black">
            Dont miss Updates from TicketDaddy
          </h1>
          <h2 className="text-2xl font-extrabold  text-black">
            Join our newsletter to participate
          </h2>
          <input type="text" className="h-12 w-46 py-[.5em] px-10 rounded-3xl text-black"/>
          <Button buttonType="default" className="h-9 py-[.5em] px-8 my-5">
            See More
          </Button>
        </div>
        <div></div>
      </div>
    </>
  );
}
