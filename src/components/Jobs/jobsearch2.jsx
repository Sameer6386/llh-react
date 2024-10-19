import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { jobData } from "../Data/jobData";
import { FaMapMarkerAlt, FaBuilding, FaDollarSign } from "react-icons/fa"; // Import icons

const Jobsearch2 = () => {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const jobsPerPage = 12;

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const jobType = queryParams.get("jobType") || "";
  const jobLocation = queryParams.get("location") || "";

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setJobs(jobData);
  }, []);

  useEffect(() => {
    const filtered = jobs.filter(
      (job) =>
        job.title.toLowerCase().includes(jobType.toLowerCase()) &&
        job.location.toLowerCase().includes(jobLocation.toLowerCase())
    );
    setFilteredJobs(filtered);
  }, [jobType, jobLocation, jobs]);

  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const openDetail = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);

  const maxPageNumbersToShow = windowWidth < 768 ? 3 : 5;
  const halfRange = Math.floor(maxPageNumbersToShow / 2);
  let startPage = Math.max(currentPage - halfRange, 1);
  let endPage = Math.min(startPage + maxPageNumbersToShow - 1, totalPages);

  if (endPage - startPage + 1 < maxPageNumbersToShow) {
    startPage = Math.max(endPage - maxPageNumbersToShow + 1, 1);
  }

  return (
    <div className="container p-8 flex flex-wrap justify-center gap-6">
      {currentJobs.map((job) => (
        <Link to={`/search/${job.id}`} key={job.id} onClick={openDetail}>
          <div className="card-container bg-gradient-to-r from-gray-800 to-gray-900 hover:scale-105 transition-transform duration-300 shadow-lg rounded-lg p-6 w-72 md:w-80">
            <h1 className="text-xl font-bold text-gray-200 mb-2">
              {job.title}
            </h1>
            <h2 className="text-lg text-gray-400 mb-2 flex items-center">
              <FaBuilding className="mr-2" /> {job.company}
            </h2>
            <p className="text-gray-500 mb-2 flex items-center">
              <FaMapMarkerAlt className="mr-2" /> {job.location}
            </p>
            <p className="font-semibold text-gray-300 mb-2 flex items-center">
              <FaDollarSign className="mr-2" /> {job.salary}
            </p>
            <p className="text-sm text-gray-500">{job.postedDate}</p>
          </div>
        </Link>
      ))}

      <div className="pagination mt-8 flex justify-center w-full">
        <button
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 border rounded-lg mr-2 bg-gray-200 hover:bg-gray-300 disabled:opacity-50 transition-colors text-gray-600"
        >
          Previous
        </button>

        {[...Array(endPage - startPage + 1).keys()].map((index) => {
          const pageNumber = startPage + index;
          return (
            <button
              key={pageNumber}
              onClick={() => paginate(pageNumber)}
              className={`px-4 py-2 border rounded-lg mx-1 transition-colors ${
                currentPage === pageNumber
                  ? "bg-blue-800 text-white"
                  : "bg-gray-200 hover:bg-gray-300 text-gray-600"
              }`}
            >
              {pageNumber}
            </button>
          );
        })}

        <button
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-4 py-2 border rounded-lg ml-2 bg-gray-200 hover:bg-gray-300 disabled:opacity-50 transition-colors text-gray-600"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Jobsearch2;
