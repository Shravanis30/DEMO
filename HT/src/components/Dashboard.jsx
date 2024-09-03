import React, { useState } from "react";
import Sidebar from "./Sidebar"; // Ensure Sidebar is correctly imported
import AcademicCalendarCard from "./AcademicCalendarCard.jsx";

const ParentDashboard = () => {
  const [profileExpanded, setProfileExpanded] = useState(false);

  const toggleProfile = () => {
    setProfileExpanded(!profileExpanded);
  };

  return (
    <div className="h-screen flex">
      <Sidebar /> {/* Ensure Sidebar component is correctly defined and imported */}
      <div className="flex-grow flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center p-4 bg-white shadow-md">
          <div>
            <p className="text-2xl sm:text-4xl font-bold">Parent's Dashboard</p>
          </div>
          {/* Search Bar */}
          <input
            type="text"
            placeholder="Search..."
            className="p-2 rounded-md border border-black w-full sm:w-2/3"
          />
          {/* Profile Section */}
          <div className="relative">
            <div
              className="flex items-center cursor-pointer"
              onClick={toggleProfile}
            >
              <img
                src="https://via.placeholder.com/40"
                alt="Profile"
                className="rounded-full w-8 h-8 sm:w-10 sm:h-10"
              />
            </div>
            {profileExpanded && (
              <div className="absolute right-0 mt-2 p-4 bg-white border rounded shadow-xl w-48 sm:w-60">
                <img
                  src="https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?size=338&ext=jpg&ga=GA1.1.2113030492.1720310400&semt=sph"
                  alt="Profile"
                  className="w-12 h-12 sm:w-16 sm:h-16 rounded-full"
                />
                <h3 className="font-bold mt-2 text-sm sm:text-base">John Doe</h3>
                <p className="text-xs sm:text-sm">john.doe@example.com</p>
                <p className="text-xs sm:text-sm">Profile Info or Description...</p>
                <button
                  type="button"
                  className="text-white rounded-md p-1 mt-1 font-bold bg-red-500 text-xs sm:text-sm"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="flex-grow p-4 bg-gray-50">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="col-span-2">
              <div className="bg-red-200 p-4 rounded shadow w-full h-48">
                <h2 className="text-lg sm:text-xl font-bold">Home-Work</h2>
              </div>
            </div>

            <div className="bg-gray-200 p-4 rounded shadow w-full h-48">
              <h2 className="text-lg sm:text-xl font-bold">Upcoming Event</h2>
            </div>

            <div className="bg-yellow-200 p-4 rounded shadow w-full h-48">
              <h2 className="text-lg sm:text-xl font-bold">Attendance</h2>
            </div>

            <div className="col-span-2 lg:col-span-1">
              <AcademicCalendarCard />
              <div className="flex flex-col sm:flex-row mt-5 gap-4">
                <div className="bg-orange-200 p-4 rounded shadow w-full h-32">
                  <h2 className="text-lg sm:text-xl font-bold">Customization Options</h2>
                </div>
                <div className="bg-indigo-200 p-4 rounded shadow w-full h-32">
                  <h2 className="text-lg sm:text-xl font-bold">Notice</h2>
                </div>
              </div>
            </div>

            <div className="col-span-2 lg:col-span-1">
              <div className="bg-yellow-200 p-4 rounded shadow w-full h-64">
                <h2 className="text-lg sm:text-xl font-bold">Exam</h2>
              </div>
              <div className="bg-teal-200 p-4 rounded shadow w-full h-32 mt-5">
                <h2 className="text-lg sm:text-xl font-bold">Behavioral Insights</h2>
              </div>
            </div>

            <div className="col-span-2 lg:col-span-1">
              <div className="bg-blue-200 p-4 rounded shadow w-full h-64">
                <h2 className="text-lg sm:text-xl font-bold">Health and Wellness</h2>
              </div>
              <div className="bg-indigo-200 p-4 rounded shadow w-full h-64 mt-5">
                <h2 className="text-lg sm:text-xl font-bold">Notice</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParentDashboard;
