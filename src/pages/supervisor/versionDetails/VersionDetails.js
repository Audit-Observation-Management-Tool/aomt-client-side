import React, { useCallback, useState, useEffect } from 'react';
import { Avatar, Button } from "@mui/material";
import { DataGrid, GridLoadingOverlay } from '@mui/x-data-grid';
import { convertDate } from '../../../utils/dateConverter/ConvertDate'; 
import axios from 'axios';
import Loader from '../../../components/loaders/Loader';
import SendRemarksPopup from '../../../components/popups/SendRemarksPopup';
import { RawDataToReadableDataConverter } from '../../../utils/rawDataToReadableDataConverter/RawDataToReadableDataConverter';
import PortalPopup from '../../../components/popups/PortalPopup';
import SnackbarComponent from '../../../components/snackbars/SnackbarComponent';

const VersionDetails = ({onSelectionClick}) => {

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
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isCommentPopupOpen, setCommentPopupOpen] = useState(false);
  const [variant, setVariant] = useState("");
  const [message, setMessage] = useState("");
  const storedData = localStorage.getItem('cardData');
  const cardData = storedData ? JSON.parse(storedData) : null;
  const Status = cardData.Status;
  const [softwareName, setSoftwareName] = useState(cardData.Software_Name);
  const [documentName, setDocumentName] = useState(" / " + cardData.Type);
  localStorage.setItem('docID', `${cardData.Document_ID}`);

  const showSnackbar = () => {
    setOpenSnackbar(true);
  };

  const [openSnackbar, setOpenSnackbar] = useState(false);
  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') return ;
    setOpenSnackbar(false);
  };

  const openCommentPopup = useCallback(() => {
    setCommentPopupOpen(true);
  }, []);

  const closeCommentPopup = useCallback(() => {
    setCommentPopupOpen(false);
  }, []);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.post(`${process.env.REACT_APP_BASE_URL}documents/fetch-version-details`, {
        softwareID: `${cardData.Software_ID}`,
        documentID: `${cardData.Document_ID}`,
      });

      if (!response.data || response.data.length === 0) {
        console.log('No data found');
        return;
      }

      const data = response.data;
      console.log("data: ", data);
      const rowsWithIds = data.map((row, index) => ({
        id: index + 1,
        name: row.Version_No || '',
        'submitted by': (
          <div style={{ display: 'flex', alignItems: 'center' }}>
            {row.ProfilePicture && (
              <img
                src={row.ProfilePicture}
                alt={`Profile Pic`}
                style={{ marginRight: '8px', width: '35px', height: '35px', borderRadius: '50%' }}
              />
            )}
            {row.Name || ''}
          </div>
        ),
        'submitted on': convertDate(row.Submission_Date) || '',
        status: row.Status || '',
        'change message': row.Change_log || '',
        'remarks': row.Remarks
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

  const downloadLatestDocument = () => {
    const data = {
      softwareID: cardData.Software_ID,
      documentType: cardData.Type
    };

    axios.post(`${process.env.REACT_APP_BASE_URL}documents/download-pdf`, data, { responseType: 'blob' })
      .then(response => {
        const url = URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', `${cardData.Software_Name}_${cardData.Type}.pdf`);
        document.body.appendChild(link);
        link.click();
        setVariant("success");
        setMessage("PDF Downloaded!");
        showSnackbar();
      })
      .catch(error => {
        console.error('Error:', error);
        setVariant("error");
        setMessage("There is no PDF file to download.");
        showSnackbar();
       // alert('There is no PDF file to download.');
      });
  };


  const handleClick = (option) => {
    onSelectionClick(option);
  }

  const getRowId = (row) => row.id;

  const columns = [
    { field: 'name', headerName: 'Version', width: 100, align: 'center', headerAlign: 'center'  },
    {
      field: 'submitted by',
      headerName: 'Submitted By',
      width: 240,
      //align: 'center',
      headerAlign: 'center',
      renderCell: (params) => (
        <div style={{ display: 'flex', alignItems: 'center' }}>
        {params.row.ProfilePicture && (
          <Avatar
            src={params.row.ProfilePicture}
            alt={`Profile Pic`}
          />
        )}
        {params.value}
      </div>
      ),
    },
    { field: 'submitted on', headerName: 'Submitted On', width: 230, align: 'center', headerAlign: 'center' },
    {
      field: 'status',
      headerName: 'Status',
      width: 140,
      align: 'center',
      headerAlign: 'center',
      renderCell: (params) => (
        <div style={{ color: params.value === 'Accepted' ? 'green' : (params.value === 'Not Reviewed' ? 'red' : 'inherit') }}>
          {params.value}
        </div>
      ),
    },
    { 
      field: 'change message', 
      headerName: 'Change Message', 
      width: 360, 
      headerAlign: 'center',
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
        headerName: 'Your Remarks', 
        width: 150, 
        align: 'center',
        headerAlign: 'center',
     },
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
      <header className="self-stretch flex flex-row items-start justify-start text-left text-xl text-gray-400 font-roboto mb-[-40px]">
      <SnackbarComponent
        open={openSnackbar} 
        message={message}
        variant={variant} 
        onClose={handleCloseSnackbar} 
      />
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
      <div className="w-[205px] h-10 flex flex-row items-start justify-start py-[-200] px-0.5 box-border mb-[-10px]">
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
          onClick={downloadLatestDocument}
        >
          Download Latest Version
        </Button>
      </div>

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
              '&.MuiDataGrid-root--densityComfortable .MuiDataGrid-cell': { py: '30px' },
            }}
          />
        </div>
      </footer>
      <div className="w-[135px] flex flex-row items-start justify-start py-0 px-0.5 box-border">
        <Button
          className="h-10 flex-1"
          disableElevation={true}
          variant="contained"
          disabled={Status === "Accepted"}
          sx={{
            textTransform: "none",
            color: "#fff",
            fontSize: "12",
            background: "#0b7046",
            borderRadius: "5px",
            "&:hover": { background: "#0b7046" },
            height: 40,
          }}
          onClick={openCommentPopup}
        >
          Send Remarks
        </Button>
      </div>
      {isCommentPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeCommentPopup}
        >
          <SendRemarksPopup onClose={closeCommentPopup} />
        </PortalPopup>
      )}
    </>
    )}
    </div>
  );
};

export default VersionDetails;
