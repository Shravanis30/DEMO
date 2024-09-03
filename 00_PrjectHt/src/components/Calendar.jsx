import React, { useState } from 'react';
import dayjs from 'dayjs';

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(dayjs());

  const startOfMonth = currentDate.startOf('month');
  const endOfMonth = currentDate.endOf('month');
  const startDate = startOfMonth.startOf('week');
  const endDate = endOfMonth.endOf('week');

  const handlePreviousMonth = () => setCurrentDate(currentDate.subtract(1, 'month'));
  const handleNextMonth = () => setCurrentDate(currentDate.add(1, 'month'));

  const weeks = [];
  let currentWeek = [];
  for (let day = startDate; day.isBefore(endDate, 'day'); day = day.add(1, 'day')) {
    if (currentWeek.length === 7) {
      weeks.push(currentWeek);
      currentWeek = [];
    }
    currentWeek.push(day);
  }
  if (currentWeek.length) {
    weeks.push(currentWeek);
  }

  return (
    <div className="bg-white p-2 md:p-4 rounded-md shadow-md text-center max-w-xs sm:max-w-sm mx-auto">
      <span className="text-blue-500 text-lg md:text-xl font-semibold block mb-2">
        {currentDate.format('MMMM YYYY')}
      </span>
      <div className="bg-gray-100 p-1 md:p-2 rounded-md">
        <div className="flex justify-between items-center mb-1 md:mb-2">
          <button onClick={handlePreviousMonth} className="px-2 py-1 md:px-3 md:py-2 text-lg md:text-xl text-blue-500">
            &lt;
          </button>
          <button onClick={handleNextMonth} className="px-2 py-1 md:px-3 md:py-2 text-lg md:text-xl text-blue-500">
            &gt;
          </button>
        </div>
        <div className="grid grid-cols-7 gap-2 text-xs md:text-sm font-medium">
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
            <div key={day} className="text-center">
              {day}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-2 text-xs md:text-sm">
          {weeks.map((week, index) => (
            <React.Fragment key={index}>
              {week.map(day => (
                <div
                  key={day.format('DD-MM-YYYY')}
                  className={`flex items-center justify-center w-8 h-8 md:w-10 md:h-10 ${day.isSame(currentDate, 'month') ? 'border' : ''} ${day.isSame(dayjs(), 'day') ? 'border-2 border-blue-500' : ''}`}
                  style={{ overflow: 'hidden' }} // Prevent overflow
                >
                  <span className="text-center">{day.date()}</span>
                </div>
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calendar;
