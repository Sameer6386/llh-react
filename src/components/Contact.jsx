import React from "react";
import Navbar from "./Home/Navbar";
import Contact1 from "./Contact/Contact1";

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="p-32">
        <Contact1 />
      </div>
    </>
  );
};

export default Contact;
