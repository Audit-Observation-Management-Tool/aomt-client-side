import * as React from 'react';
import { useState, useEffect } from 'react';
import { useUserContext } from '../../../contexts/UserContext';
import SoftwareCard from '../../../components/cards/SoftwareCard/SoftwareCard';
import { convertDate } from '../../../utils/DateConverter/ConvertDate';
import axios from 'axios';

const SupervisorDashboard = ({onSelectionClick}) => {
  const [softwareData, setSoftwareData] = useState([]);
  const [selectedSoftwareID, setSelectedSoftwareID] = useState(null);
  const { supervisorID } = useUserContext();

useEffect(() => {
    axios.post(`${process.env.REACT_APP_BASE_URL}supervisor`, { supervisorId: supervisorID })
      .then(response => {
        if (!response.data) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
       // console.log('Received data:', response.data);
        const { data } = response;

        if (Array.isArray(data)) {
          const formattedSoftwareData = data.map(result => ({
            softwareID: result.SID,
            softwareName: result.Name,
            deadline: convertDate(result.Deadline),
          }));
          setSoftwareData(formattedSoftwareData);
        } else {
          console.error('Error: Data is not an array');
        }
      })
      .catch(error => console.error('Error fetching data:', error));
}, [supervisorID]);


  const handleCardClick = softwareID => {
    console.log(`Card Clicked! Software ID: ${softwareID}`);
    setSelectedSoftwareID(softwareID);
    localStorage.setItem('selectedSoftwareID', softwareID);
    onSelectionClick('viewDocumentationProgress');
  };

  return (
    <div className="w-[1275px] h-[604px] bg-grayy overflow-hidden flex flex-row items-start justify-start pt-[52px] px-[59px] pb-[410px] box-border">
      <div className="flex flex-wrap gap-3">
        {softwareData.map((software, index) => (
          <SoftwareCard
            key={index}
            title={software.softwareName}
            deadline={`Deadline: ${software.deadline}`} 
            onClick={() => handleCardClick(software.softwareID)}
          />
        ))}
      </div>
    </div>
  );
};

export default SupervisorDashboard;