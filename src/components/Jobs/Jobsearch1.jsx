import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const JobSearch1 = () => {
  const [jobType, setJobType] = useState("");
  const [location, setLocation] = useState("");
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const query = new URLSearchParams(useLocation().search);

  // Handle search submission
  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/search?jobtype=${jobType}&location=${location}`);
  };

  // Fetch job search results from API
  useEffect(() => {
    const jobtype = query.get("jobtype");
    const location = query.get("location");

    if (jobtype || location) {
      setLoading(true);

      const fetchJobs = async () => {
        try {
          const response = await fetch(
            `/api/jobs/search?jobtype=${jobtype}&location=${location}`
          );
          const data = await response.json();

          if (response.ok) {
            setJobs(data);
          } else {
            setError(data.message);
          }
        } catch (err) {
          setError("Failed to fetch jobs");
        }
        setLoading(false);
      };

      fetchJobs();
    }
  }, [query]);

  return (
    <div>
      {/* Search Form */}
      <div className="h-20 w-[300%] md:w-full mb-64 md:mb-0">
        <form
          className="h-auto md:h-full flex items-center flex-col md:flex-row rounded-xl md:shadow-xl gap-10 mt-20 md:mt-8 px-3"
          onSubmit={handleSearch}
        >
          <input
            type="text"
            placeholder="Type of Job looking for?"
            className="border border-zinc-300 text-3xl px-20 py-6 md:px-4 w-full md:text-lg md:py-2 md:w-[20vw] rounded-md"
            value={jobType}
            onChange={(e) => setJobType(e.target.value)}
          />

          <input
            type="text"
            placeholder="Enter Location"
            className="border border-zinc-300 text-3xl px-20 py-6 md:px-4 w-full md:text-lg md:py-2 md:w-[20vw] rounded-md"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />

          <button
            type="submit"
            className="w-full py-5 md:px-5 md:py-3 bg-blue-900 hover:scale-105 active:scale-95 duration-200 rounded-md text-white"
          >
            Search Jobs
          </button>
        </form>
      </div>

      {/* Display Search Results */}
      <div className="job-results">
        {loading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>{error}</div>
        ) : jobs.length > 0 ? (
          jobs.map((job) => (
            <div key={job._id} className="job-item">
              <h2>{job.title}</h2>
              <p>
                {job.company} - {job.location}
              </p>
              <p>{job.description}</p>
            </div>
          ))
        ) : (
          <div>No jobs found</div>
        )}
      </div>
    </div>
  );
};

export default JobSearch1;
