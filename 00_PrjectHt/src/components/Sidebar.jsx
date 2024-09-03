import React, { useState } from "react";
import { FiMenu, FiHome, FiSettings, FiBookOpen } from "react-icons/fi";
import { MdGroups, MdDashboard } from "react-icons/md";
import { FaChalkboardTeacher, FaUniversity } from "react-icons/fa";
import { GiHelp } from "react-icons/gi";
import Faculty from "../images/Faculty.png";



function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="flex overflow-y-visible">
            <div
                className={`bg-gray-800 text-white h-auto p-5 pt-8${
                    isOpen ? "lg:w-60" : "lg:w-20"
                } duration-300 sm:duration-300 relative`}
            >
                {/* Toggle Button */}
                <div
                    className="absolute top-10 text-white hover:bg-white hover:text-black rounded-full cursor-pointer"
                    onClick={toggleSidebar}
                >
                    <FiMenu size={24} />
                </div>

                {/* Sidebar Content */}
                <div className="mt-24">
                    {isOpen && (
                        <div className="flex justify-center align-top space-x-4">
                            <div className=" p-4 bg-slate-700 rounded-lg shadow-lg">
                                <img
                                    src={Faculty}
                                    alt="profile pic"
                                    className="rounded-full h-36"
                                />
                                <p className="mt-1 p-2 ">Genelia D'Souza </p>
                            </div>
                        </div>
                    )}
                    <div
                        className={`flex items-center space-x-4 mt-10 ${
                            isOpen ? "" : "justify-center"
                        }`}
                    >
                        <FiHome size={24} />
                        {isOpen && <span>Home</span>}
                    </div>

                    <div
                        className={`flex items-center space-x-4 mt-6 ${
                            isOpen ? "" : "justify-center"
                        }`}
                    >
                        <FiBookOpen size={24} />
                        {isOpen && <span>Courses Manager</span>}
                    </div>

                    <div
                        className={`flex items-center space-x-4 mt-6 ${
                            isOpen ? "" : "justify-center"
                        }`}
                    >
                        <GiHelp size={24} />
                        {isOpen && <span>Reach out</span>}
                    </div>
                    <div
                        className={`flex items-center space-x-4 mt-6 ${
                            isOpen ? "" : "justify-center"
                        }`}
                    >
                        <FaChalkboardTeacher size={24} />
                        {isOpen && <span>Faculty Updates</span>}
                    </div>
                    <div
                        className={`flex items-center space-x-4 mt-6 ${
                            isOpen ? "" : "justify-center"
                        }`}
                    >
                        <FaUniversity size={24} />
                        {isOpen && <span>University Updates</span>}
                    </div>
                    <div
                        className={`flex items-center space-x-4 mt-6 ${
                            isOpen ? "" : "justify-center"
                        }`}
                    >
                        <MdGroups size={24} />
                        {isOpen && <span>Groups</span>}
                    </div>
                    <div
                        className={`flex items-center space-x-4 mt-6 ${
                            isOpen ? "" : "justify-center"
                        }`}
                    >
                        <MdDashboard size={24} />
                        {isOpen && <span>My Dashboard</span>}
                    </div>
                    <div
                        className={`flex items-end space-x-4 mt-6 ${
                            isOpen ? "" : "justify-center"
                        }`}
                    >
                        <FiSettings size={24} />
                        {isOpen && <span>Settings</span>}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;