import * as React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Loader from '../../../components/loaders/Loader';
import { convertDateWithoutTime } from '../../../utils/dateConverter/ConvertDateWithoutTime';
import BigCalendar from '../../../components/calendar/BigCalendar';

const ViewCalendar = ({onSelectionClick}) => {
  const [events, setEvents] = useState([]);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const supervisorID = localStorage.getItem('ID');
  const currDate = new Date();

useEffect(() => {
  let isMounted = true; 

  const fetchData = async () => {
    try {
      const response = await axios.post(`${process.env.REACT_APP_BASE_URL}supervisor/fetch-calendar-events`, { supervisorId: supervisorID });

      if (!response.data) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const { data } = response;

      console.log("data: ", data);

      if (Array.isArray(data)) {
        const eventsData = data.map(result => ({
          deadline: result.Deadline,
          type: result.Type,
          softwareName: result.Software_name
        }));

        if (isMounted) {
            setEvents(eventsData);
          setLoading(false);
        }
      } else {
        console.error('Error: Data is not an array');
        if (isMounted) { 
          setLoading(false); 
        }
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      if (isMounted) { 
        setLoading(false); 
      }
    }
  };

  fetchData();

  return () => {
    isMounted = false; 
  };
}, [supervisorID]);

  const calendarEvents = events.map((item) => ({
    start: item.deadline, 
    end: item.deadline,
    title: item.softwareName + "(" + item.type + ")"
    
    }));

  return (
    <div className="w-[1350px] h-full bg-grayy overflow-visible flex flex-row items-start justify-start pt-[20px] px-[59px] pb-[410px] box-border align-center">
     {
      loading && (
        <Loader />
      )
     }
     {(
      !loading &&
      <div className = "w-[1350px] bg-white align-center">
        <BigCalendar events = {calendarEvents} />
      </div>
     )}
      
    </div>
  );
};

export default ViewCalendar;