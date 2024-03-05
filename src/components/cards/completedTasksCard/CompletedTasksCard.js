import PieChart from "../../charts/pieCharts/pieChart2";
import { useEffect, useState } from 'react';
import axios from 'axios';

const PendingTasksCard = () => {

  const [dataset, setDataset] = useState([]);
  const member_ID = localStorage.getItem('ID');
  const nullDataset = [];

  let returnCount = 0;
  let notReviewedCount = 0;
  let acceptedCount = 0;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiUrl = process.env.REACT_APP_BASE_URL;
        const response = await axios.get(`${apiUrl}member/member-submissions-status/${member_ID}`);

        if (response.status === 500) {
          setDataset(nullDataset);
        } else {
          const backendData = response.data; // Assuming response.data is the provided array

          const transformedData = backendData.map((item, index) => ({
            id: index,
            value: item['count'], // Use the count as the value for the PieChart
            Status: item.Status, // Include the Type property
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
    switch (item.Status) {
      case 'Returned':
        returnCount = item.value;
        break;
      case 'Not Reviewed':
        notReviewedCount = item.value;
        break;
      case 'Accepted':
        acceptedCount = item.value;
        break;
      default:
        break;
    }
  });

  return (
    <div className="flex-1 rounded-mini bg-white box-border overflow-hidden flex flex-col items-center justify-start pt-[27px] pb-[33px] pr-[17px] pl-[29px] gap-[27px_0px] max-w-full text-left text-mini text-dimgray-600 font-roboto border-[1px] border-solid border-lightgray-100">
      <div className="self-stretch flex flex-row items-end justify-between gap-[20px] mq450:flex-wrap">
        <div className="relative font-medium z-[1]">My Submission Statuses</div>
        
      </div>
      <div className="self-stretch flex flex-row items-start justify-start max-w-full text-mid text-dimgray-700">
        <div className="w-[430px] flex flex-row items-center justify-start gap-[0px_32px] max-w-full mq450:flex-wrap mq450:gap-[0px_32px]">
          <PieChart />
          <div className="w-[104px] flex flex-col items-start justify-start pt-[19px] px-0 pb-0 box-border">
            <div className="flex flex-col items-start justify-start gap-[59px_0px]">
              <div className="flex flex-row items-center justify-start gap-[0px_9px]">
                <div className="h-8 w-1 relative rounded-8xs bg-royalblue overflow-hidden shrink-0 z-[1]" />
                <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                  <div className="relative font-medium z-[1]">{acceptedCount} Accepted</div>
                </div>
              </div>
              <div className="flex flex-row items-center justify-start gap-[0px_9px]">
                <div className="h-8 w-1 relative rounded-8xs bg-deepskyblue overflow-hidden shrink-0 z-[1]" />
                <div className="flex flex-col items-start justify-start pt-0 px-0 pb-0.5">
                  <div className="relative font-medium z-[1]">{returnCount} Returned</div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start pt-[19px] px-0 pb-0">
            <div className="flex flex-col items-start justify-start gap-[59px_0px]">
              <div className="flex flex-row items-center justify-start gap-[0px_8px]">
                <div className="h-8 w-1 relative rounded-8xs bg-tomato overflow-hidden shrink-0 z-[1]" />
                <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                  <div className="relative font-medium z-[1]">{notReviewedCount} Not <br/> Reviewed</div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PendingTasksCard;