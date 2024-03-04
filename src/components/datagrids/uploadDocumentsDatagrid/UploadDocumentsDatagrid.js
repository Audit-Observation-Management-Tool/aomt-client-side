import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import DOMPurify from 'dompurify';
import Loader from '../../loaders/Loader';
import { convertDate } from '../../../utils/dateConverter/ConvertDate';
import { RawDataToReadableDataConverter } from '../../../utils/rawDataToReadableDataConverter/RawDataToReadableDataConverter';

const UploadDocumentsDatagrid = () => {

  const isJSON = (content) => {
    try 
    {
      JSON.parse(content);
      return true;
    } 
    catch (error) 
    {
      return false;
    }
  };

  const [richTextContent, setRichTextContent] = useState([]);
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.post(`${process.env.REACT_APP_BASE_URL}documents/fetch-version-details`, {
      /*softwareID: `${cardData.Software_ID}`,
        documentID: `${cardData.Document_ID}`,  */

        softwareID: 1,
        documentID: 1,
      });

      if (!response.data || response.data.length === 0) {
        console.log('No data found');
        return;
      }

      const data = response.data;
      const rowsWithIds = data.map((row, index) => ({
        id: index + 1,
        name: row.Version_No || '',
        'submitted by': (
          <div style={{ display: 'flex'}}>
            {row.ProfilePicture && (
              <img
                src={row.ProfilePicture}
                alt={`Profile Pic`}
                style={{ marginRight: '8px', width: '24px', height: '24px', borderRadius: '50%' }}
              />
            )}
            {row.Name || ''}
          </div>
        ),
        'submitted by': (
          <div style={{ display: 'flex' }}>
            {row.ProfilePicture && (
              <img
                src={row.ProfilePicture}
                alt={`Profile Pic`}
                style={{ marginRight: '8px', width: '24px', height: '24px', borderRadius: '50%' }}
              />
            )}
            {row.Name || ''}
          </div>
        ),
        'submitted on': convertDate(row.Submission_Date) || '',
        status: row.Status || '',
        'change message': row.Change_log || '',
        remarks: row.Remarks
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

  console.log(rows);

  const getRowId = (row) => row.id;

  const columns = [
    { field: 'name', headerName: 'Version', width: 70 },
    {
      field: 'submitted by',
      headerName: 'Submitted By',
      width: 200,
      renderCell: (params) => (
        <div style={{ display: 'flex' }}>
          {params.row.ProfilePicture && (
            <Avatar
              src={params.row.ProfilePicture}
              alt={`Profile Pic`}
              className="rounded-xs"
            />
          )}
          {params.value}
        </div>
      ),
    },
    { field: 'submitted on', headerName: 'Submitted On', width: 100 },
    {
      field: 'status',
      headerName: 'Status',
      width: 90,
      renderCell: (params) => (
        <div style={{ color: params.value === 'Accepted' ? 'green' : (params.value === 'Not Reviewed' ? 'red' : 'inherit') }}>
          {params.value}
        </div>
      ),
    },
    {
      field: 'change message',
      headerName: 'Change Message',
      width: 420,
      renderCell: (params) => {
        if (isJSON(params.value)) 
        {
          return (
            <div style={{ whiteSpace: 'pre-line' }}>
              {RawDataToReadableDataConverter(params.value)}
            </div>
          );
        } 
        else 
        {
          return (
            <div style={{ whiteSpace: 'pre-line' }}>
              {params.value.split('\n').map((item, index) => (
                <React.Fragment key={index}>
                  {item}
                  <br />
                </React.Fragment>
              ))}
            </div>
          );
        }
      },
    },
    {
      field: 'remarks',
      headerName: 'Supervisor Remarks',
      width: 200,
    },
  ];
  

  return (
    <div style={{ height: 450, width: '100%', backgroundColor:"white" }}>
    { loading && (
      <Loader />
    )}

    { !loading && (
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5, 10, 20]}
        disablecheckboxSelection
        getRowHeight={() => 'auto'}
            sx={{
              '&.MuiDataGrid-root--densityCompact .MuiDataGrid-cell': { py: '8px' },
              '&.MuiDataGrid-root--densityStandard .MuiDataGrid-cell': { py: '15px' },
              '&.MuiDataGrid-root--densityComfortable .MuiDataGrid-cell': { py: '30px' },
            }}
      />
    )}
      
    </div>
  );
};

export default UploadDocumentsDatagrid;
