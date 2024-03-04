import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';


const localizer = momentLocalizer(moment);

const BigCalendar = ({ events }) => {

  const eventStyleGetter = (event, start, end, isSelected) => {
    return {
      style: {
        fontSize: '12px', 
      },
    };
  };


  return (
    <div>
      <Calendar
        localizer={localizer}
        events={events}
        views={["month"]}
        defaultView="month"
        startAccessor="start"
        endAccessor="end"
        style={{ height: 600, fontSize: 12, color: "gray" }} 
      //  eventPropGetter={eventStyleGetter}
      />
     
    </div>
  );
};

export default BigCalendar;