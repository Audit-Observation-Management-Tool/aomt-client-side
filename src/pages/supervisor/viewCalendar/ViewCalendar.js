import * as React from 'react';
import { useState, useEffect } from 'react';
import { useUserContext } from '../../../contexts/UserContext';
import SoftwareCard1 from '../../../components/cards/SoftwareCard/SoftwareCard';
import { convertDate } from '../../../utils/dateConverter/ConvertDate';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Loader from '../../../components/loaders/Loader';
import { convertDateWithoutTime } from '../../../utils/dateConverter/ConvertDateWithoutTime';

const ViewCalendar = ({onSelectionClick}) => {
  const [softwareData, setSoftwareData] = useState([]);
  const navigate = useNavigate();
  const [selectedSoftwareID, setSelectedSoftwareID] = useState(null);
  const { supervisorID } = useUserContext();
  const [loading, setLoading] = useState(true);

useEffect(() => {
  let isMounted = true; 

  const fetchData = async () => {
    try {
      const response = await axios.post(`${process.env.REACT_APP_BASE_URL}supervisor`, { supervisorId: supervisorID });

      if (!response.data) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const { data } = response;

      console.log("data: ", data);

      if (Array.isArray(data)) {
        const formattedSoftwareData = data.map(result => ({
          softwareID: result.Software_ID,
          softwareName: result.Software_name,
          description: result.Description || "",
          created_on: convertDateWithoutTime(result.Created_On),
          deadline: convertDateWithoutTime(result.Deadline),
        }));

        if (isMounted) {
          setSoftwareData(formattedSoftwareData);
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

  const handleCardClick = (software) => {
    setSelectedSoftwareID(software.softwareID);
    localStorage.setItem('software', JSON.stringify(software));
    onSelectionClick('viewDocumentationProgress');
  };

  return (
    <div className="w-[1350px] h-full bg-grayy overflow-visible flex flex-row items-start justify-start pt-[52px] px-[59px] pb-[410px] box-border">
     {
      loading && (
        <Loader />
      )
     }
     {(
      !loading &&
      <div className="flex flex-wrap gap-y-8 gap-x-7">
        {softwareData.map((software, index) => (
          <SoftwareCard1
            key={index}
            title={software.softwareName}
            deadline={`Deadline: ${software.deadline}`} 
            description={software.description} 
            createdOn={software.created_on}
            onClick={() => handleCardClick(software)}
          />
        ))}
      </div>
     )}
      
    </div>
  );
};

export default ViewCalendar;