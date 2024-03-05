import PieChart from "../../charts/pieCharts/PieChart";
import { useEffect, useState } from 'react';
import axios from 'axios';

const PendingTasksCard = () => {

  const [dataset, setDataset] = useState([]);
  const member_ID = localStorage.getItem('ID');
  const nullDataset = [];

  let srsCount = 0;
  let uatCount = 0;
  let brdCount = 0;
  let sdsCount = 0;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiUrl = process.env.REACT_APP_BASE_URL;
        const response = await axios.get(`${apiUrl}member/member-submissions/${member_ID}`);

        if (response.status === 500) {
          setDataset(nullDataset);
        } else {
          const backendData = response.data; // Assuming response.data is the provided array

          const transformedData = backendData.map((item, index) => ({
            id: index,
            value: item['count'], // Use the count as the value for the PieChart
            Type: item.Type, // Include the Type property
          }));

          setDataset(transformedData);
          console.log(dataset);
        }
      } catch (error) {
        setDataset(nullDataset);
      }
    };

    fetchData();
  }, []);

  dataset.forEach(item => {
    switch (item.Type) {
      case 'SRS':
        srsCount = item.value;
        break;
      case 'UAT':
        uatCount = item.value;
        break;
      case 'BRD':
        brdCount = item.value;
        break;
      case 'SDS':
        sdsCount = item.value;
        break;
      default:
        break;
    }
  });

  return (
    <div className="flex-1 rounded-mini bg-white box-border overflow-hidden flex flex-col items-center justify-start pt-[20px] pb-[33px] pr-[0px] pl-[18px] gap-[20px_0px] max-w-full text-left text-mini text-dimgray-600 font-roboto border-[1px] border-solid border-lightgray-100">
      <div className="self-stretch flex flex-row items-end justify-between gap-[10px] mq450:flex-wrap">
        <div className="relative font-medium z-[1]">My Submission Count</div>
        
      </div>
      <div className="self-stretch flex flex-row items-start justify-start max-w-full text-mid text-dimgray-700">
        <div className="w-[430px] flex flex-row items-center justify-start gap-[0px_32px] max-w-full mq450:flex-wrap mq450:gap-[0px_32px]">
          <PieChart />
          
          <div className="flex flex-col items-start justify-start pt-[10px] px-0 pb-0">
            <div className="flex flex-col items-start justify-start gap-[59px_0px]">
                
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PendingTasksCard;