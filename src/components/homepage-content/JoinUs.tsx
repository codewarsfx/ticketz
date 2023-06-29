import Button from "@/components/ui-elements/button";

export default function JoinUs() {
  return (
    <>
      <div className="flex flex-col items-center  border-2 border-black rounded-2xl mx-10 py-16">
        <div></div>
        <div >
          <h1 className="text-4xl font-extrabold my-5">Dont miss Updates from Ticketz</h1>
          <input type="text" />
          <Button buttonType="secondary">See More</Button>
        </div>
        <div></div>
      </div>
    </>
  );
}
