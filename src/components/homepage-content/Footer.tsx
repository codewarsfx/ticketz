function Footer() {
  return (
    <>
      <div className="flex flex-col place-content-center font-bold ">
        <div className="flex flex-row place-content-around my-16">
          <div className="">
            <p>Tickets</p>
            <p>box box box</p>
          </div>
          <div>
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
          </div>
          <div>
            <p>Partners</p>
            <p>Promotions</p>
          </div>
          <div>
            <p>Contact</p>
            <p>FAQ</p>
          </div>
        </div>
        <p className="py-4 content-center bg-indigo-600 ">Copyright 2023 Tickets, All Rights Reserved</p>
      </div>
    </>
  );
}

export default Footer;
