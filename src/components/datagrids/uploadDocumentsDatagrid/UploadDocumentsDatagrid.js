import * as React from 'react';
import { Avatar, Box } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';


const columns = [
  {
    field: 'MemberID',
    headerName: 'Member ID',
    width: 140,
    editable: false,
  },
  {
    field: 'MemberName',
    headerName: 'Member Name',
    width: 250,
    editable: false,
    renderCell: (params) => (
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <Avatar
          src="https://i.ibb.co/7Gm2zc8/pic-removebg-preview-1-transformed.png"
          alt={params.row.MemberName}
        />
        <span>{params.row.MemberName}</span>
      </div>
    ),
  },
  {
    field: 'Email',
    headerName: 'Email',
    type: 'string',
    width: 250,
    editable: false,
  },
  {
    field: 'ContactNumber',
    headerName: 'Contact Number',
    type: 'string',
    sortable: false,
    width: 180,
  },
];

const rows = [
  { id: 1, MemberID: '#481783', MemberName: 'Sumaya Sanchita', Email: 'sanchita@gmail.com', ContactNumber: '01811749489' },
];

const UploadDocumentsDatagrid = () => {
    return (
    <div className="top-[10px] self-stretch h-[445px] relative">
      <Box sx={{ height: 445, width: 950, backgroundColor: "white" }}>
            <DataGrid
              rows={rows}
              columns={columns}
              pagination
              pageSize={5}
              rowsPerPageOptions={[5]}
              checkboxSelection = {false}
            />
        </Box>
    </div>
    );
  };
  
  export default UploadDocumentsDatagrid;  