import { PieChart as MuiPieChart } from '@mui/x-charts/PieChart';

const PieChart = () => {
    
  const data = [
    { id: 0, value: 10, },
    { id: 1, value: 15, },
    { id: 2, value: 20, },
  ];

  return (
    <div className="[border:none] h-[159px] w-auto [outline:none] flex-1 relative overflow-hidden min-w-[100px]">
      <MuiPieChart
        series={[
          {
            data,
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
        height={200}
        width={200}
      />
    </div>
  );
};

export default PieChart;