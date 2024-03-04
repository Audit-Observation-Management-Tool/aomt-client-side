import PendingTasksCard from "../../../components/cards/pendingTasksCard/PendingTasksCard";
import PendingDocumentsDatagrid from "../../../components/datagrids/pendingDocumentsDatagrid/PendingDocumentsDatagrid";
import CompletedTasksCard from "../../../components/cards/completedTasksCard/CompletedTasksCard";
import { DataGrid, GridLoadingOverlay } from '@mui/x-data-grid';
import AcceptedDocumentsDatagrid from "../../../components/datagrids/acceptedDocumentsDatagrid/AcceptedDocumentsDatagrid";
import React, { useCallback, useState, useEffect } from 'react';
import { Avatar, Button } from "@mui/material";
import axios from 'axios';

const MemberDashboard = ({ onSelectionClick }) => {
  const [rows, setRows] = useState([]);
  const [selectedDocumentId, setSelectedDocumentId] = useState(null);


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
      const rowsWithIds = data.map((row, index) => ({
        id: index + 1,
        sw_name: row.Software_name || '',
        'doctype': row.Document_Type ,
        'deadline': row.Deadline,
        'status': row.Status || '',
        'view': row.Change_log || '',
      }));

      setRows(rowsWithIds);
    } 
    catch (error) 
    {
      console.error('Error fetching data:', error);
    }
    //finally 
    //{
    //   setLoading(false);
    //}
  };

  const columns = [
    { field: 'id', headerName: 'SI', width: 50, align: 'center', headerAlign: 'center'  },
    { field: 'sw_name', headerName: 'Software Name', width: 200, align: 'center', headerAlign: 'center'  },
    { field: 'doctype', headerName: 'Document Type', width: 180, align: 'center', headerAlign: 'center' },
    { field: 'deadline', headerName: 'Deadline', width: 180, align: 'center', headerAlign: 'center' },
    { field: 'status', headerName: 'Status', width: 100, align: 'center', headerAlign: 'center' },
    { field: 'view', headerName: 'View', width: 50, align: 'center', headerAlign: 'center' },
      
  ];

  const handleSelectionChange = useCallback((selectionModel) => {
    // Assuming you're only allowing single selection
    if (selectionModel.length === 1) {
      const selectedRow = rows.find((row) => row.id === selectionModel[0]);
      const selectedDocId = selectedRow ? selectedRow.docId : null;
      setSelectedDocumentId(selectedDocId);

      // Save the selected document ID to localStorage
      localStorage.setItem('selectedDocumentId', selectedDocId);
      console.log('Saved selected document ID:', selectedDocId);
    }
  }, [rows]);


  return (
    <section className="w-[1306px] flex flex-row items-start justify-start px-10 pt-5 pl-20 box-border max-w-full text-left text-xl text-dimgray-600 font-roboto">
      <div className="flex-1 flex flex-col items-start justify-start gap-[20px_0px] max-w-full">
        <div className="self-stretch flex flex-row items-end justify-start gap-[0px_37px] max-w-full mq725:gap-[0px_37px] mq1050:flex-wrap">
          <div className="w-[519px] flex flex-col items-start justify-start pt-0 px-0 pb-0.5 box-border min-w-[519px] max-w-full mq725:min-w-full mq1050:flex-1">
            <div className="self-stretch flex flex-col items-start justify-start max-w-full">
              <div className="w-[338px] h-[47px] relative font-medium flex items-center shrink-0 max-w-full box-border pr-5 mq450:text-base">
                Welcome back, Sanchita!
              </div>
              <div className="self-stretch flex flex-row items-center justify-center max-w-full">
                <PendingTasksCard />
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-[19px_0px] min-w-[485px] max-w-full text-sm text-black mq725:min-w-full">
            <div className="self-stretch rounded-8xs bg-white overflow-hidden flex flex-row items-center justify-start pt-[5px] px-[11px] pb-1 [row-gap:20px] border-[1px] border-solid border-gainsboro-400 mq450:flex-wrap">
              <div className="w-[82px] flex flex-col items-start justify-start py-0 px-0 box-border">
                <div className="w-[354px] h-10 relative font-medium flex items-center shrink-0 max-w-[432%]">{`Supervisor: `}</div>
              </div>
              <div className="flex flex-col items-start justify-start py-0 pr-[11px] pl-0">
                <img
                  className="w-8 h-8 relative rounded-31xl object-cover"
                  loading="lazy"
                  alt=""
                  src="/profilepic.png"
                />
              </div>
              <div className="relative text-gray-900">
                mose
              </div>
            </div>
            <div style={{ height: 300, width: 800, backgroundColor: "white" }}>
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
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0.5 pl-0 box-border gap-[0px_36px] max-w-full text-mini text-seagreen-300 mq725:gap-[0px_36px] mq1050:flex-wrap">
          <CompletedTasksCard />
          
        </div>
      </div>
    </section>
  );
};

export default MemberDashboard;