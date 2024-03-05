import { Button, Select, MenuItem, InputLabel } from "@mui/material";
import { useState } from "react";
import axios from 'axios';
import { Navigate } from "react-router-dom";


const SendRemarksPopup = ({ onClose, onSelectionClick }) => {
  const [status, setStatus] = useState('');
  const [remarks, setRemarks] = useState(''); 
  const [loading, setLoading] = useState(true);

  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };

  const handleRemarksChange = (event) => {
    setRemarks(event.target.value);
  };

  const handleSendClick = async () => {
    
    console.log('Selected Status:', status);
    console.log('Remarks: ', remarks);
    const documentID = localStorage.getItem('docID');

    try {
      const response = await axios.post(`${process.env.REACT_APP_BASE_URL}supervisor/review-doc`, {
        status,
        remarks,
        documentID,
      });

      if (!response.data || response.data.length === 0) {
        console.log('No data found');
        return;
      }
      else
      {
        onSelectionClick("viewVersionDetails");
        onClose();
      }

    } 
    catch (error) 
    {
      console.error('Error fetching data:', error);
    }

  };
  return (
    <div className="w-[326px] rounded-xl bg-white shadow-[0px_4px_10px_rgba(0,_0,_0,_0.3)] overflow-hidden flex flex-col items-center justify-start pt-4 pb-[37px] pr-5 pl-[35px] box-border gap-[5px_0px] max-w-full max-h-full">
      <div className="self-stretch flex flex-row items-start justify-end pt-0 px-0 pb-[26px]">
        <img
          className="h-[9.5px] w-[9.9px] relative"
          loading="eager"
          alt=""
          src="/vector.svg"
        />
      </div>
      <section className="self-stretch flex flex-row items-start justify-start py-0 pr-4 pl-0 text-center text-xs text-darkslategray-200 font-roboto">
        <div className="flex-1 flex flex-col items-start justify-start gap-[9px_0px]">
          <div className="relative">Set Status</div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[16px_0px] text-darkslategray-100">
            <div className="self-stretch flex flex-row items-center justify-center pt-0 px-0 pb-px">
              <div className="relative">
                {/* Dropdown for setting status */}
                <InputLabel id="status-label" className="text-darkslategray-200">
                </InputLabel>
                <Select
                  labelId="status-label"
                  id="status"
                  className="w-full"
                  value={status}
                  onChange={handleStatusChange}
                  style={{
                    height: '40px',     
                    width: '250px',      
                    backgroundColor: '#ffffff', 
                    borderRadius: '5px', 
                    fontSize: '13px',
                    fontFamily: 'Roboto',
                    color: '#656565',
                    textAlign: 'left',
                  }}
                  iconStyle={{ color: 'blue' }}
                >
                  <MenuItem value="accept">Accept</MenuItem>
                  <MenuItem value="return">Return</MenuItem>
                </Select>
              </div>
            </div>
            <div className="relative text-darkslategray-200">Add Comment</div>
          </div>
        </div>
      </section>
      <section className="self-stretch flex flex-row items-start justify-start pt-0 pb-[11px] pr-4 pl-0">
        <textarea
          className="bg-white h-[194px] w-auto [outline:none] flex-1 relative rounded-6xs box-border overflow-hidden border-[1px] border-solid border-gray-300"
          rows={10}
          cols={13}
          value={remarks}
          style={{
            color: '#656565',   
            fontSize: '13px',    
            fontFamily: 'Roboto', 
          }}
          onChange={handleRemarksChange}
        />

      </section>
      <footer className="self-stretch flex flex-row items-start justify-start py-0 pr-4 pl-0">
        <Button
          className="h-7 flex-1 hover:cursor-pointer hover:bg-seagreen-200"
          disableElevation={true}
          variant="contained"
          onClick={handleSendClick}
          sx={{
            textTransform: "none",
            color: "#fff",
            fontSize: "12",
            background: "#0b7046",
            borderRadius: "5px",
            "&:hover": { background: "#0b7046" },
            height: 28,
          }}
        >
          Send
        </Button>
      </footer>
    </div>
  );
};

export default SendRemarksPopup;
