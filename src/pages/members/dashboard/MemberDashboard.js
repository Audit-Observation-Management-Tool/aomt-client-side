import PendingTasksCard from "../../../components/cards/pendingTasksCard/PendingTasksCard";
import PendingDocumentsDatagrid from "../../../components/datagrids/pendingDocumentsDatagrid/PendingDocumentsDatagrid";
import CompletedTasksCard from "../../../components/cards/completedTasksCard/CompletedTasksCard";
import { DataGrid, GridLoadingOverlay } from '@mui/x-data-grid';
import AcceptedDocumentsDatagrid from "../../../components/datagrids/acceptedDocumentsDatagrid/AcceptedDocumentsDatagrid";
import React, { useCallback, useState, useEffect } from 'react';
import { Avatar, Button, IconButton, Typography } from "@mui/material";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import axios from 'axios';
import Loader from "../../../components/loaders/Loader";
import { convertDate } from "../../../utils/dateConverter/ConvertDate";

const MemberDashboard = ({ onSelectionClick }) => {
  const [rows, setRows] = useState([]);
  const [selectedDocumentId, setSelectedDocumentId] = useState(null);
  const [supervisorName, setSupervisorName] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const member_ID = localStorage.getItem('ID');
  const fetchData = async () => {
    console.log(member_ID);
    try {
      const response = await axios.get(`${process.env.REACT_APP_BASE_URL}member/member-details/${member_ID}`
      );

      if (!response.data || response.data.length === 0) {
        console.log('No data found');
        return;
      }

      const data = response.data;
      setSupervisorName(data[0].Supervisor_name);
      const rowsWithIds = data.map((row, index) => ({
        id: index + 1,
        sw_name: row.Software_name || '',
        'doctype': row.Document_Type,
        'deadline': convertDate(row.Deadline),
        'status': row.Status || '',
        'view': row.Change_log || '',
        documentID: row.Document_ID,
        softwareID: row.Software_ID,
      }));

      setRows(rowsWithIds);
    }
    catch (error) {
      console.error('Error fetching data:', error);
    }
    finally {
      setLoading(false);
    }
  };

  console.log(rows);


  const handleViewClick = (documentID, softwareName, softwareID, doctype) => {
    localStorage.setItem('Document_ID', documentID);
    localStorage.setItem('Software_name', softwareName);
    localStorage.setItem('Software_ID', softwareID);
    localStorage.setItem('Document_name', doctype);
    onSelectionClick("uploadDocuments");
  };

  const columns = [
    { field: 'id', headerName: 'SI', width: 50, align: 'center', headerAlign: 'center' },
    { field: 'sw_name', headerName: 'Software Name', width: 200, align: 'center', headerAlign: 'center' },
    { field: 'doctype', headerName: 'Document Type', width: 180, align: 'center', headerAlign: 'center' },
    { field: 'deadline', headerName: 'Deadline', width: 180, align: 'center', headerAlign: 'center' },
    {
      field: 'status',
      headerName: 'Status',
      width: 100,
      align: 'center',
      headerAlign: 'center',
      renderCell: (params) => (
        <Typography style={{ color: params.row.status === 'Accepted' ? 'green' : 'red' }}>
          {params.row.status}
        </Typography>
      )
    },
    {
      field: 'view',
      headerName: 'View',
      width: 50,
      align: 'center',
      headerAlign: 'center',
      renderCell: (params) => (
        <IconButton
          onClick={() => handleViewClick(params.row.documentID, params.row.sw_name, params.row.softwareID, params.row.doctype)}
          disabled={params.row.status === 'Accepted'}
        >
          <OpenInNewIcon />
        </IconButton>
      )
    },
  ];


  const handleSelectionChange = useCallback((selectionModel) => {

    if (selectionModel.length === 1) {
      const selectedRow = rows.find((row) => row.id === selectionModel[0]);
      const selectedDocId = selectedRow ? selectedRow.docId : null;
      setSelectedDocumentId(selectedDocId);
      localStorage.setItem('selectedDocumentId', selectedDocId);
      console.log('Saved selected document ID:', selectedDocId);
    }
  }, [rows]);


  return (
    <section className="w-[1306px] flex flex-row  items-start justify-start px-10 pt-5 pl-20 box-border max-w-full text-left text-xl text-dimgray-600 font-roboto">
      <div className="flex-1 flex flex-col  items-start justify-start gap-[20px_0px] max-w-full">
        <div className="self-stretch flex flex-row items-end justify-start gap-[0px_37px] max-w-full mq725:gap-[0px_37px] mq1050:flex-wrap">
          <div className="w-[519px] items-start justify-start pt-0 px-0 pb-0.5 box-border min-w-[519px] max-w-full mq725:min-w-full mq1050:flex-1">
            <div className="self-stretch flex  flex-col  items-start justify-start" style={{ maxWidth: '619px' }}>
              <div className="w-[338px] h-[47px]  relative font-medium flex items-center shrink-0 max-w-full box-border pr-5 mq450:text-base top-[10px]">
                {/* {"Welcome back " + rows[0].Name + "!"} */}
              </div>
              <div className=" pb-5 self-stretch flex flex-row items-center justify-center max-w-full">
                <PendingTasksCard />
              </div>
              <div className=" left-[10px] px-10  self-stretch flex flex-row items-start justify-start py-0 pr-0.5 pl-0 box-border max-w-full text-mini text-seagreen-300 mq725:gap-[0px_0px] mq1050:flex-wrap">
                <CompletedTasksCard />
              </div>
            </div>
          </div>

          <div className="flex-1 flex flex-col  items-start justify-start gap-[19px_0px]  min-w-[485px] max-w-full text-sm text-black mq725:min-w-full">
            <div className="self-stretch rounded-8xs bg-white overflow-hidden flex flex-row items-center justify-start pt-[5px] px-[11px] pb-1 [row-gap:20px] border-[1px] border-solid border-gainsboro-400 mq450:flex-wrap">
              <div className="w-[82px] flex flex-col  items-start justify-start py-0 px-0 box-border">
                <div className="w-[354px] h-10 relative font-medium flex items-center shrink-0 max-w-[432%]">{`Supervisor: `}</div>
              </div>
              <div className="flex flex-col bg-black items-start justify-start py-0 pr-[11px] pl-0">

              </div>
              <div className="relative text-gray-900 ">
                {supervisorName}
              </div>
            </div>
            {loading && (
              <Loader />
            )}

            {!loading && (
              <div style={{ height: 500, width: 800, backgroundColor: "white", display: 'flex', justifyContent: 'flex-start', marginLeft: '0' }}>
              <DataGrid
                rows={rows}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5, 5, 20]}
                getRowHeight={() => 'auto'}
                onSelectionModelChange={handleSelectionChange}
                sx={{
                  '&.MuiDataGrid-root--densityCompact .MuiDataGrid-cell': { py: '8px' },
                  '&.MuiDataGrid-root--densityStandard .MuiDataGrid-cell': { py: '15px' },
                  '&.MuiDataGrid-root--densityComfortable .MuiDataGrid-cell': { py: '30px' },
                }}
              />
            </div>
            
            )}

          </div>
        </div>

      </div>
    </section>
  );
};

export default MemberDashboard;