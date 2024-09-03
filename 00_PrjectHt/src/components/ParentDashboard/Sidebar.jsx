import React, { useState } from "react";
import {
    FiMenu,
    FiHome,
    FiUser,
    FiSettings,
    FiUserCheck,
    FiGrid,
    FiClipboard,
    FiBookOpen,
    FiUserPlus,
    FiMessageCircle,
} from "react-icons/fi"; // Icons from react-icons (optional)

function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="flex overflow-y-visible">
            <div
                className={`bg-gray-800 text-white h-auto p-5 pt-8 ${
                    isOpen ? "w-60" : "w-20"
                } duration-300 sm:duration-300 relative`}
            >
                {/* Toggle Button */}
                <div
                    className="absolute top-10 text-white hover:bg-white hover:text-black p-2 rounded-full cursor-pointer"
                    onClick={toggleSidebar}
                >
                    <FiMenu size={24} />
                </div>

                {/* Sidebar Content */}
                <div className="mt-24">
                    {isOpen && (
                        <div className="flex justify-center align-top space-x-4">
                            <div className=" p-1 rounded-lg shadow-lg">
                                <img
                                    src="https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?size=338&ext=jpg&ga=GA1.1.2113030492.1720310400&semt=sph"
                                    alt="profile pic"
                                    className="rounded-full size-20"
                                />
                                <p className="mt-1">James</p>
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
                        {isOpen && <span>Courses</span>}
                    </div>

                    <div
                        className={`flex items-center space-x-4 mt-6 ${
                            isOpen ? "" : "justify-center"
                        }`}
                    >
                        <FiClipboard size={24} />
                        {isOpen && <span>Exam</span>}
                    </div>
                    <div
                        className={`flex items-center space-x-4 mt-6 ${
                            isOpen ? "" : "justify-center"
                        }`}
                    >
                        <FiUserCheck size={24} />
                        {isOpen && <span>Classroom</span>}
                    </div>
                    <div
                        className={`flex items-center space-x-4 mt-6 ${
                            isOpen ? "" : "justify-center"
                        }`}
                    >
                        <FiGrid size={24} />
                        {isOpen && <span>Games</span>}
                    </div>
                    <div
                        className={`flex items-center space-x-4 mt-6 ${
                            isOpen ? "" : "justify-center"
                        }`}
                    >
                        <FiUserPlus size={24} />
                        {isOpen && <span>Groups</span>}
                    </div>
                    <div
                        className={`flex items-center space-x-4 mt-6 ${
                            isOpen ? "" : "justify-center"
                        }`}
                    >
                        <FiMessageCircle size={24} />
                        {isOpen && <span>Consultants</span>}
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