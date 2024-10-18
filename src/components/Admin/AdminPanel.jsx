import React from "react";

const AdminPage = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white">
        <div className="p-6">
          <h1 className="text-2xl font-semibold mb-6">Admin Dashboard</h1>
          <nav>
            <ul>
              <li className="mb-4">
                <a href="#" className="hover:bg-gray-700 block p-3 rounded">
                  Overview
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:bg-gray-700 block p-3 rounded">
                  Manage Users
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:bg-gray-700 block p-3 rounded">
                  Settings
                </a>
              </li>
              <li>
                <a href="#" className="hover:bg-gray-700 block p-3 rounded">
                  Logout
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <h2 className="text-3xl font-semibold text-gray-800">Overview</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Total Users</h3>
            <p className="text-gray-600">1,200</p>
          </div>
          {/* Card 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">New Registrations</h3>
            <p className="text-gray-600">30 Today</p>
          </div>
          {/* Card 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Pending Tasks</h3>
            <p className="text-gray-600">8 Tasks</p>
          </div>
        </div>

        {/* Additional sections */}
        <div className="mt-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Recent Activity
          </h3>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <ul className="list-disc pl-5 space-y-2">
              <li>John Doe registered as a new user.</li>
              <li>Task "Update Privacy Policy" marked as completed.</li>
              <li>System maintenance scheduled for next week.</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminPage;
