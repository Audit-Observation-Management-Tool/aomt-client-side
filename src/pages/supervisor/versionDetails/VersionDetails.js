import React, { useState, useEffect } from 'react';
import { Button } from "@mui/material";
import { DataGrid, GridLoadingOverlay } from '@mui/x-data-grid';
import { convertDate } from '../../../utils/DateConverter/ConvertDate'; 
import axios from 'axios';
import Loader from '../../../components/loaders/Loader';

const VersionDetails = ({onSelectionClick}) => {
  const [rows, setRows] = useState([]);
  const [softwareName, setSoftwareName] = useState('');
  const [documentName, setDocumentName] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.post(`${process.env.REACT_APP_BASE_URL}supervisor/fetch-version-details`, {
        supervisorId: 1,
        documentId: 1,
      });

      if (!response.data || response.data.length === 0) {
        console.log('No data found');
        return;
      }

      const data = response.data;
      setDocumentName(` / ${data[0].Type}`);
      setSoftwareName(`${data[0].Software_name}`);
      
      console.log(data);
      const rowsWithIds = data.map((row, index) => ({
        id: index + 1,
        name: row.Version_No || '',
        'submitted by': row.Name || '',
        'submitted on': convertDate(row.Submission_Date) || '',
        status: row.Status || '',
        'change message': row.Change_log || '',
        action: '',
      }));

      setRows(rowsWithIds);
    } 
    catch (error) 
    {
      console.error('Error fetching data:', error);
    }
    finally 
    {
       setLoading(false);
    }
  };

  const handleClick = (option) => {
    onSelectionClick(option);
  }

  const getRowId = (row) => row.id;

  const columns = [
    
    { field: 'name', headerName: 'Version', width: 100, align: 'center', headerAlign: 'center' },
    { field: 'submitted by', headerName: 'Submitted By', width: 250, align: 'center', headerAlign: 'center' },
    { field: 'submitted on', headerName: 'Submitted On', width: 150, align: 'center', headerAlign: 'center' },
    { field: 'status', headerName: 'Status', width: 180, align: 'center', headerAlign: 'center', renderCell: (params) => (
      <div style={{ color: params.value === 'Not Reviewed' ? 'red-100' : 'inherit' }}>
        {params.value}
      </div>
    ), },
    { 
      field: 'change message', 
      headerName: 'Change Message', 
      width: 450, 
      headerAlign: 'center',
      renderCell: (params) => (
        <div style={{ whiteSpace: 'pre-line' }}>
          {params.value.split('\n').map((item, index) => (
            <React.Fragment key={index}>
              {item}
              <br />
            </React.Fragment>
          ))}
        </div>
      ),
    },
    { field: 'action', headerName: 'Action', width: 90, align: 'center', headerAlign: 'center' },
  ];

  return (
    <div className="w-full relative bg-grayy overflow-hidden flex flex-col items-end justify-start pt-[25px] pb-[73px] pr-[51px] pl-[11px] box-border gap-[34px_0px]">
    {
      loading && (
        <Loader />
      )
    }
    {!loading && (
      <> 
      <header className="self-stretch flex flex-row items-start justify-start text-left text-xl text-gray-400 font-roboto">
        <div className="overflow-hidden flex flex-row items-start justify-start py-0 pr-[18px] pl-[19px] gap-[0px_12px]">
          <div className="h-[34px] w-200 flex flex-col items-start justify-end pt-0 px-0 pb-0 box-border">
            <div className="mt-[-7px] self-stretch flex flex-row items-center justify-start">
              <b className="h-[41px] w-200 flex-1 relative flex items-center text-dimgray-200">
                <span className="hover:[text-decoration:underline] cursor-pointer"
                onClick={() => handleClick("viewDocumentationProgress")}
                >{softwareName}{` `}</span>{documentName}
              </b>
            </div>
          </div>
        </div>
      </header>

      <footer className="w-[1455px] h-[444px] relative left-[207px]">
        <div style={{ height: 450, width: 1250, backgroundColor:"white"}}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5, 5, 20]}
            getRowHeight={() => 'auto'}
            sx={{
              '&.MuiDataGrid-root--densityCompact .MuiDataGrid-cell': { py: '8px' },
              '&.MuiDataGrid-root--densityStandard .MuiDataGrid-cell': { py: '15px' },
              '&.MuiDataGrid-root--densityComfortable .MuiDataGrid-cell': { py: '22px' },
            }}
          />
        </div>
      </footer>
      <div className="w-[135px] flex flex-row items-start justify-start py-0 px-0.5 box-border">
        <Button
          className="h-10 flex-1"
          disableElevation={true}
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#fff",
            fontSize: "12",
            background: "#0b7046",
            borderRadius: "5px",
            "&:hover": { background: "#0b7046" },
            height: 40,
          }}
        >
          Send Remarks
        </Button>
      </div>
    </>
    )}
    </div>
  );
};

export default VersionDetails;
