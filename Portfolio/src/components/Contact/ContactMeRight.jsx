import React from "react";
import ContactInfo from "./ContactInfo";
import ContactSocial from "./ContactSocial";

const ContactMeRight = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-10 w-full sm:w-full">
      <img
        src="/email-image.png"
        alt="email image"
        className="w-full max-w-[300px] sm:max-w-[250px] object-contain"
      />
      <ContactInfo />
      <ContactSocial />
    </div>
  );
};

export default ContactMeRight;
