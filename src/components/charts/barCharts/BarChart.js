import * as React from 'react';
import { BarChart as MuiBarChart } from '@mui/x-charts/BarChart';

const chartSetting = {
  xAxis: [
    {
      label: 'Submission Counts',
    },
  ],
  width: 400,
  height: 270,
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
  {
    count: 7,
    type: 'SDS',
  },
];

export default function BarChart() {
  return (
    <div style={{
      position: 'absolute',
      top: 350,
      left: 23,
      right: 0,
      backgroundColor: "white",
      width: 390,
      height: 285,
      borderRadius: 10, 
      border: '1px solid #ccc', 
      overflow: 'hidden', 
    }}>
      <MuiBarChart
        dataset={dataset}
        margin={{
          left: 50,
          right: 50,
          top: 25,
          bottom: 50,
        }}
        yAxis={[{ scaleType: 'band', dataKey: 'type' }]}
        series={[
          {
            dataKey: 'count',
            color: '#208957'
          }
        ]}
        layout="horizontal"
        {...chartSetting}
      />
    </div>
  );
}
