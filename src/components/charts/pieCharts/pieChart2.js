import { PieChart as MuiPieChart } from '@mui/x-charts/PieChart';
import { useEffect, useState } from 'react';
import axios from 'axios';

const PieChart2 = () => {
  const [dataset, setDataset] = useState([]);
  const member_ID = localStorage.getItem('ID');
  const nullDataset = [];

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
            value: item['count'], 
            label: item['count']+ ' submission ' + item.Status,
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

  return (
    <div className="[border:none] h-[180px] w-auto [outline:none] flex-1 relative overflow-hidden min-w-[100px]">
      <MuiPieChart
        series={[
          {
            data: dataset, // Use the fetched data from the backend
            innerRadius: 40,
            outerRadius: 80,
            paddingAngle: 0,
            cornerRadius: 0,
            startAngle: -180,
            endAngle: 180,
            cx: 80,
            cy: 75,
          }
        ]}
        height={190}
        width={450}
      />
    </div>
  );
};

export default PieChart2;
