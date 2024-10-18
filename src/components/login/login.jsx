import React, { useState } from "react";
import axios from "axios"; // Add axios for API requests
import Navbar from "../Home/Navbar";

const Login = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [role, setRole] = useState("Individual"); // For user roles

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const endpoint = isLoggedIn ? "/login" : "/signup";
    const data = isLoggedIn
      ? { email, password }
      : { name, email, password, role };

    try {
      const response = await axios.post(
        `http://localhost:3000${endpoint}`,
        data
      );
      console.log(response.data); // Handle success (e.g., store token)
      alert("Success");
    } catch (err) {
      console.error(err);
      alert("Error during authentication");
    }
  };

  return (
    <>
      <Navbar />
      <div className="container h-screen w-full flex">
        <div
          className="hidden md:block md:w-1/2 h-full"
          style={{
            backgroundImage: `url("https://plus.unsplash.com/premium_photo-1661281350976-59b9514e5364?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>

        <div className="flex items-center justify-center w-full md:w-1/2 bg-gray-100">
          <div className="form-container w-[80%] md:w-[60%] lg:w-[50%] bg-zinc-100 p-8 rounded-md shadow-md">
            <div className="form-toggle flex justify-evenly mb-4">
              <button
                onClick={() => setIsLoggedIn(true)}
                className={`px-6 py-2 text-2xl rounded-md ${isLoggedIn ? "bg-purple-900 text-white" : "bg-white"}`}
              >
                Login
              </button>
              <button
                onClick={() => setIsLoggedIn(false)}
                className={`px-6 py-2 text-2xl rounded-md ${!isLoggedIn ? "bg-purple-900 text-white" : "bg-white"}`}
              >
                Signup
              </button>
            </div>

            <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
              {!isLoggedIn && (
                <input
                  type="text"
                  placeholder="Full Name"
                  className="p-2 text-xl rounded-md"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              )}
              <input
                type="email"
                placeholder="Email"
                className="p-2 text-xl rounded-md"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                className="p-2 text-xl rounded-md"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {!isLoggedIn && (
                <select
                  className="p-2 text-xl rounded-md"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                >
                  <option value="Admin">Admin</option>
                  <option value="Organization">Organization</option>
                  <option value="Individual">Individual</option>
                </select>
              )}

              <button className="bg-purple-800 py-2 rounded-md text-lg text-white w-[40%] self-center">
                {isLoggedIn ? "Login" : "Signup"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
