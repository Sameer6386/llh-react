import React from "react";
import Navbar from "../Home/Navbar";
import Jobsearch1 from "./Jobsearch1";
import Jobsearch2 from "./jobsearch2";
import Footer from "../Home/Footer";
const Jobsearch = () => {
  return (
    <>
      <Navbar />
      <div className="p-24">
        <Jobsearch1 />
        <Jobsearch2 />
      </div>
      <Footer />
    </>
  );
};

export default Jobsearch;
