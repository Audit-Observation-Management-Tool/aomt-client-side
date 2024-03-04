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
  height: 290,
};


const nullDataset = [
  { count: 0, type: 'UAT' },
  { count: 0, type: 'SRS' },
  { count: 0, type: 'SDS' },
  { count: 0, type: 'BRD' },
]; 

const BarChartComponent = () => {
  const [dataset, setDataset] = useState([]);
  const [loading, setLoading] = useState(true);
  const software = JSON.parse(localStorage.getItem('software'));

  useEffect(() => {
    const fetchData = async () => {
      try 
      {
        const apiUrl = process.env.REACT_APP_BASE_URL;
        const response = await axios.get(`${apiUrl}documents/barchart/${software.softwareID}`); 
        console.log(response.status);
        if(response.status === 500)
        {
          setDataset(nullDataset);
        }
        else
        {
          const resultData = response.data;
          setDataset(resultData);
        }
      }
      catch (error) 
      {
        setDataset(nullDataset);
      }
      finally 
      {
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
              top: 300,
              left: 23,
              right: 0,
              backgroundColor: 'white',
              width: 390,
              height: 350,
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
                top: 50,
                bottom: 45,
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
