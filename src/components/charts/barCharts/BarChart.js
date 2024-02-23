import * as React from 'react';
import { BarChart as MuiBarChart } from '@mui/x-charts/BarChart';

const chartSetting = {
  xAxis: [
    {
      label: 'Submission Counts',
    },
  ],
  width: 400,
  height: 310,
};
const dataset = [
  {
    count: 5,
    type: 'UAT',
  },
  {
    count: 10,
    type: 'BRD',
  },
  {
    count: 3,
    type: 'SRS',
  },
];

export default function BarChart() {
  return (
    <div style={{
      position: 'absolute',
      top: 300,
      left: 15,
      right: 0,
      backgroundColor: "white",
      width: 400,
      height: 330,
      borderRadius: 10, 
      border: '1px solid #ccc', 
      overflow: 'hidden', 
    }}>
      <MuiBarChart
        dataset={dataset}
        yAxis={[{ scaleType: 'band', dataKey: 'type' }]}
        series={[{ dataKey: 'count' }]}
        layout="horizontal"
        {...chartSetting}
      />
    </div>
  );
}
