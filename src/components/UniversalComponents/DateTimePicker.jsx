import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

function DateTimePicker({dateTime}) {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    console.log("Selected Date and Time:", date);
    const localISOTime = new Date(date.getTime() - date.getTimezoneOffset() * 60000)
      .toISOString()
      .slice(0, -1); // Removes the trailing Z to keep it in local format
    dateTime(localISOTime)
  };

  return (
    <div className='universal-box'>
      <h2>Select Date and Time</h2>
      
      <div className="box-spassing-main">
      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        showTimeSelect
        timeFormat="HH:mm"
        timeIntervals={15}
        dateFormat="MMMM d, yyyy h:mm aa"
        placeholderText="Select a date and time"
      />
      </div>
    
    </div>
  );
}

export default DateTimePicker;
 