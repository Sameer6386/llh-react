import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { jobData } from "../Data/jobData";
import { FaMapMarkerAlt, FaShareAlt } from "react-icons/fa"; // Use React Icons

const Jobdetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const jobId = Number(id);
  const job = jobData.find((job) => job.id === jobId);

  if (!job) {
    return <h1 className="text-center text-3xl text-red-600">Job not found</h1>;
  }

  return (
    <>
      <div className="container px-8 lg:px-24 mt-10 flex flex-col lg:flex-row items-start justify-between space-y-6 lg:space-y-0 lg:space-x-10">
        <div
          onClick={() => navigate(-1)}
          className="cursor-pointer flex items-center gap-3 mb-8 lg:mb-0"
        >
          <i className="ri-arrow-left-circle-line text-3xl text-gray-700 hover:text-gray-900"></i>
          <h1 className="text-xl md:text-sm text-gray-600">
            Back to Job Search
          </h1>
        </div>

        <div className="w-full lg:w-3/5 space-y-6">
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-800">
            {job.title}
          </h2>
          <h3 className="text-2xl lg:text-3xl font-semibold text-gray-700">
            {job.company}
          </h3>

          <div className="flex items-center gap-2 text-lg lg:text-xl text-gray-500">
            <FaMapMarkerAlt className="text-gray-600" />
            <p>{job.location}</p>
          </div>

          <p className="text-lg lg:text-xl text-gray-700 mt-4">
            {job.description}
          </p>
          <p className="text-2xl lg:text-3xl text-blue-700 font-bold mt-6">
            {job.salary}
          </p>
          <p className="text-gray-500 text-sm mt-6">
            Posted on: {job.postedDate}
          </p>
        </div>

        <div className="flex lg:flex-col items-center gap-4 lg:gap-6 lg:mt-0">
          <button className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-6 py-2 text-lg rounded-md hover:shadow-lg transition-shadow">
            Apply Now
          </button>
          <button className="bg-gray-100 px-6 py-2 text-lg rounded-md text-gray-700 hover:bg-gray-200 transition-colors flex items-center gap-2">
            Share <FaShareAlt />
          </button>
        </div>
      </div>

      <div className="container px-8 lg:px-24 mt-10 space-y-6">
        <h1 className="text-3xl font-semibold text-gray-800">
          Job Description
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
          expedita! Quasi iusto suscipit error optio repellat esse consequatur
          dolorum voluptatem doloribus temporibus necessitatibus est deleniti
          fuga quidem atque assumenda corporis sit in quibusdam, at cum.
          Quibusdam, ullam commodi. Sunt, dignissimos. Iusto veniam asperiores
          quibusdam vitae, nemo, repudiandae ipsum dolore repellendus
          perspiciatis eveniet temporibus, animi consequatur obcaecati sed
          cupiditate? Ratione excepturi culpa et, repudiandae officiis veniam,
          quis voluptatem dolores corporis quasi recusandae minima quos earum
          quo nemo accusantium tempore.
        </p>
      </div>
    </>
  );
};

export default Jobdetails;
