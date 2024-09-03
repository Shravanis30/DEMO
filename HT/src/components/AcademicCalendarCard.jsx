// import React from 'react';

// const AcademicCalendarCard = () => {
//   return (
//     <div className="bg-lime-200 p-4 rounded shadow-lg h-64">
//       <h2 className="text-xl font-bold">Academic Calendar</h2>
//     </div>
//   );
// };

// export default AcademicCalendarCard;

// import React from 'react';
// import FullCalendar from '@fullcalendar/react';
// import dayGridPlugin from '@fullcalendar/daygrid';
// import timeGridPlugin from '@fullcalendar/timegrid';
// import interactionPlugin from '@fullcalendar/interaction'; // for selectable

// const AcademicCalendarCard = () => {
//   const handleDateClick = (arg) => {
//     alert('Date clicked: ' + arg.dateStr);
//   };

//   return (

//     <div className="p-5 bg-white rounded-lg shadow-lg mx-auto">
//       <FullCalendar
//         plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
//         initialView="dayGridMonth"
//         headerToolbar={{
//           left: 'prev,next today',
//           center: 'title',
//           right: 'dayGridMonth,timeGridWeek,timeGridDay'
//         }}
//         editable={true}
//         selectable={true}
//         selectMirror={true}
//         dayMaxEvents={true}
//         weekends={true}

//         dateClick={handleDateClick}
//         customButtons={{
//           myCustomButton: {
//             text: 'Custom Button',
//             click: function() {
//               alert('Clicked the custom button!');
//             }
//           }
//         }}
//         // Customizing the buttons with Tailwind CSS
//         buttonClassNames="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//         contentHeight="auto"
//         aspectRatio={1}
//         height={650}
//       />
//     </div>
//   );
// };

// export default AcademicCalendarCard;

// import React, { useState } from 'react';
// import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css'; // Import the calendar's default CSS for basic styles

// const AcademicCalendarCard = () => {
//   const [date, setDate] = useState(new Date());

//   return (
//     <div className="bg-lime-200 pt-4 pl-2 pb-4 rounded shadow-lg flex flex-col justify-center items-center">
//       <h2 className="text-xl font-bold mb-4">Academic Calendar</h2>
//       <div className="w-11/12">
//         <Calendar
//           onChange={setDate}
//           value={date}
//           className=" rounded-xl"
//           tileClassName="text-center text-sm "
//         />
//       </div>
//     </div>
//   );
// };

// export default AcademicCalendarCard;






import React from 'react';
import AcademicCalendarCard from './AcademicCalendarCard';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="flex flex-row">
        <aside className="w-1/12 h-screen bg-gray-900 text-white flex flex-col items-center p-4">
          {/* Icons */}
          <div className="flex flex-col space-y-6 mt-10">
            <div className="p-2 bg-gray-700 rounded-lg">🏠</div>
            <div className="p-2 bg-gray-700 rounded-lg">👤</div>
            <div className="p-2 bg-gray-700 rounded-lg">💬</div>
            <div className="p-2 bg-gray-700 rounded-lg">⚙️</div>
          </div>
        </aside>

        {/* Main Content */}
        <div className="flex-1 p-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">Parent's Dashboard</h1>
            <input type="text" placeholder="Search..." className="border p-2 rounded-lg" />
          </div>

          {/* Dashboard Grid */}
          <div className="grid grid-cols-5 grid-rows-3 gap-4">
            <div className="col-span-3 row-span-1 p-4 bg-red-200 rounded-lg shadow-md">Home-Work</div>
            <div className="col-span-2 row-span-1 p-4 bg-gray-200 rounded-lg shadow-md">Upcoming Event</div>
            <div className="col-span-1 row-span-2 p-4 bg-yellow-200 rounded-lg shadow-md">Attendance</div>
            <div className="col-span-2 row-span-2">
              <AcademicCalendarCard />
            </div>
            <div className="col-span-1 row-span-2 p-4 bg-yellow-200 rounded-lg shadow-md">Exam</div>
            <div className="col-span-1 row-span-2 p-4 bg-blue-200 rounded-lg shadow-md">Health and Wellness</div>
            <div className="col-span-1 row-span-2 p-4 bg-indigo-200 rounded-lg shadow-md">Notice</div>
            <div className="col-span-1 row-span-2 p-4 bg-cyan-200 rounded-lg shadow-md">Behavioral Insights</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

