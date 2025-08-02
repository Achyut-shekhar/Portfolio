import React from "react";
import ContactMeLeft from "./ContactMeLeft";
import ContactMeRight from "./ContactMeRight";

const ContactMeMain = () => {
  return (
    <div
      id="contact"
      className="max-w-[1200px] mx-auto items-center justify-center mt-[100px] px-4"
    >
      <h2 className="text-4xl sm:text-5xl lg:text-6xl text-cyan mb-10 text-center">
        Contact Me
      </h2>

      <div className="flex flex-col lg:flex-row gap-8 sm:gap-12 lg:gap-24 bg-brown p-4 sm:p-6 md:p-8 rounded-2xl">
        <div className="w-full lg:w-1/2">
          <ContactMeLeft />
        </div>
        <div className="w-full lg:w-1/2">
          <ContactMeRight />
        </div>
      </div>
    </div>
  );
};

export default ContactMeMain;
