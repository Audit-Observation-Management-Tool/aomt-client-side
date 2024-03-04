import * as React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Loader from '../../loaders/Loader';
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
const testDataset = [
  { count: 4, type: 'User Acceptance Testing (UAT)' },
  { count: 4, type: 'System Requirement Specification (SRS)' },
  { count: 2, type: 'System Design Specification (SDS)' },
];

const BarChartComponent = () => {
  const [dataset, setDataset] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log('fronten');
    const fetchData = async () => {
      try {
        const apiUrl = process.env.REACT_APP_BASE_URL;
        const response = await axios.get(`${apiUrl}documents/barchart`); 
        const resultData = response.data;

        //console.log('Backend Response:', resultData);

        setDataset(resultData);
      }
      catch (error) {
        console.error('Error fetching data:', error);
      }
      finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {loading && (
        <Loader />
      )}
      {!loading && (
        <>

          <div
            style={{
              position: 'absolute',
              top: 350,
              left: 23,
              right: 0,
              backgroundColor: 'white',
              width: 390,
              height: 285,
              borderRadius: 10,
              border: '1px solid #ccc',
              overflow: 'hidden',
            }}
          >
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
                  color: '#80ACEE',
                },
              ]}
              layout="horizontal"
              {...chartSetting}
            />
          </div>

        </>

      )}

    </>
  );
};

export default BarChartComponent;
