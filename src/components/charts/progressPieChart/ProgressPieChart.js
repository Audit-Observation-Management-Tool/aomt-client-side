import React, { useState, useEffect } from "react";
import ArcProgress from "react-arc-progress";
import axios from 'axios';

const ProgressPieChart = ({ progress }) => {
  const [percentage, setPercentage] = useState(0);
  const software = JSON.parse(localStorage.getItem('software'));

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiUrl = process.env.REACT_APP_BASE_URL;
        const response = await axios.get(`${apiUrl}documents/arcprogress/${software.softwareID}`); 
        const resultData = response.data;

        const totalRows = resultData.length;
        const acceptedCount = resultData.filter(item => item.Status === 'Accepted').length;
        const acceptedPercentage = (acceptedCount / totalRows) * 100;

        setPercentage(acceptedPercentage.toFixed(1)); 
      }
      catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const customText = [
    { text: `${percentage}%`, size: "30px", color: "#DF7070", x: 100, y: 100 },
  ];

  const arcFillColor = { gradient: ["#DF7070", "#DF7070"] };

  return (
    <>
     
      <ArcProgress
        thickness={20}
        fillColor={arcFillColor}
        progress={parseFloat(percentage) / 100} 
        customText={customText}
        style={{ position: "relative" }}
        observer={(current) => {
          const { percentage, currentText } = current;
        }}
        animationEnd={({ progress, text }) => {
        }}
      />
    </>
  );
};

export default ProgressPieChart;