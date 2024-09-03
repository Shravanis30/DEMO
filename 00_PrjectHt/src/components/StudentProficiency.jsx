import React from "react";
import sabineAvatar from "../images/student1.png";
import danteAvatar from "../images/student2.png";
import susanAvatar from "../images/student3.png";
import minaAvatar from "../images/student4.png";
const StudentProficiency = () => {
  const students = [
    {
      name: "Sabine Klein",
      avatar: sabineAvatar,
      workCompleted: "33 / 36",
      needingAttention: 45,
      workingTowards: 8,
      mastered: 7,
      bgColor: "bg-red-100",
    },
    {
      name: "Dante Podenzana",
      avatar: danteAvatar,
      workCompleted: "31 / 36",
      needingAttention: 6,
      workingTowards: 35,
      mastered: 19,
      bgColor: "bg-yellow-100",
    },
    {
      name: "Susan Chan",
      avatar: susanAvatar,
      workCompleted: "27 / 36",
      needingAttention: 60,
      workingTowards: 44,
      mastered: 76,
      bgColor: "bg-green-100",
    },
    {
      name: "Sadia Klein",
      avatar: minaAvatar,
      workCompleted: "33 / 36",
      needingAttention: 85,
      workingTowards: 80,
      mastered: 79,
      bgColor: "bg-red-100",
    },
    {
      name: "tina Podenzana",
      avatar: danteAvatar,
      workCompleted: "31 / 36",
      needingAttention: 6,
      workingTowards: 35,
      mastered: 19,
      bgColor: "bg-yellow-100",
    },
  ];

  const getBgColor = (value) => {
    if (value < 40) return "bg-red-400";
    if (value <= 75) return "bg-yellow-400";
    return "bg-green-400";
  };

  const calculateAverageScore = (workCompleted, needingAttention, workingTowards, mastered) => {
    // Normalize the work completed to a scale of 0-100
    const totalWork = workCompleted.split(" / ")[1];
    const workCompletedPercent = (parseInt(workCompleted.split(" / ")[0]) / parseInt(totalWork)) * 100;

    // Assuming needingAttention, workingTowards, and mastered are on a scale of 0-100
    const averageScore = (workCompletedPercent + needingAttention + workingTowards + mastered) / 4;
    return averageScore.toFixed(2);
  };

  return (
<div className="student-proficiency p-4 bg-slate-200 rounded-lg shadow-lg mx-auto max-w-screen-sm sm:max-w-screen-sm md:max-w-screen-lg lg:max-w-screen-xl">
<h2 className="text-2xl font-bold mb-4 text-center">Students Proficiency</h2>
      <div className="overflow-x-auto">
        <table className="w-full min-w-full text-left border-collapse">
          <thead>
            <tr className="text-gray-600 border-b">
              <th className="p-2">Full Name</th>
              <th className="p-2">Work Completed</th>
              <th className="p-2">Average Score</th>
              <th className="p-2">Needing Attention</th>
              <th className="p-2">Working Towards</th>
              <th className="p-2">Mastered</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => {
              const average = calculateAverageScore(
                student.workCompleted,
                student.needingAttention,
                student.workingTowards,
                student.mastered
              );
              
              return (
                <tr key={index} className={`${student.bgColor} p-4 border-b`}>
                  <td className="p-2 flex items-center">
                    <img
                      src={student.avatar}
                      alt={`${student.name} avatar`}
                      className="rounded-full mr-2 w-10 h-10 object-cover"
                    />
                    <span className="sm:text-xs md:text-base">{student.name}</span>
                  </td>
                  <td className="p-2">{student.workCompleted}</td>
                  <td className="p-2 flex items-center">
                    <div className="w-20 h-4 bg-gray-200 mr-2 rounded-full relative">
                      <div
                        className={`h-full rounded-full absolute ${
                          average < 50
                            ? "bg-red-400"
                            : average < 70
                            ? "bg-yellow-400"
                            : "bg-green-400"
                        }`}
                        style={{ width: `${average}%` }}
                      ></div>
                    </div>
                    <span className="text-sm md:text-base">{average}%</span>
                  </td>
                  <td className="p-2">
                    <div className={`flex justify-center items-center text-white rounded-full w-12 h-12 ${getBgColor(student.needingAttention)}`}>
                      {student.needingAttention}
                    </div>
                  </td>
                  <td className="p-2">
                    <div className={`flex justify-center items-center text-white rounded-full w-12 h-12 ${getBgColor(student.workingTowards)}`}>
                      {student.workingTowards}
                    </div>
                  </td>
                  <td className="p-2">
                    <div className={`flex justify-center items-center text-white rounded-full w-12 h-12 ${getBgColor(student.mastered)}`}>
                      {student.mastered}
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentProficiency;
