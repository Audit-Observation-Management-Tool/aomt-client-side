import { Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";
import SnackbarComponent from "../snackbars/SnackbarComponent";

const SignoutConfirmationPopup = ({ onClose }) => {
  const navigate = useNavigate();

  const [variant, setVariant] = useState("");
  const [message, setMessage] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const showSnackbar = () => {
    setOpenSnackbar(true);
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') return ;
    setOpenSnackbar(false);
  };

  const handleLogout = () => {
    setVariant("error");
    setMessage("Logging out.");
    showSnackbar();
    localStorage.clear();
    setTimeout(() => {
      navigate("/");
    }, 1000);
   // navigate("/");
  }
    return (
      <> 
      <SnackbarComponent
      open={openSnackbar} 
      message={message}
      variant={variant} 
      onClose={handleCloseSnackbar} 
    />
      <div className="w-[436px] h-[153px] max-w-full max-h-full overflow-auto text-center text-mini text-black font-inter">
        <div className="absolute top-[300px] left-[550px] w-[430px] h-[141px]">
          <div className="absolute top-[0px] left-[0px] rounded-3xs bg-white shadow-[0px_0px_15px_rgba(0,_0,_0,_0.25)] box-border w-[427px] h-[141px] border-[1px] border-solid border-silver-100" />
          <button
            className="cursor-pointer [border:none] p-2.5 bg-[transparent] absolute top-[83px] left-[0px] w-[214px] h-[50px] flex flex-row flex-wrap items-center justify-center box-border hover:gap-[10px] hover:cursor-pointer"
            id="cancel"
            onClick={onClose}
          >
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] w-[212px] relative text-mini capitalize font-bold font-poppins text-black text-center flex items-center justify-center shrink-0" onClick={onClose}>
              Cancel
            </button>
          </button>
          <div className="absolute top-[32px] left-[0px] w-[430px] h-[109px]">
            <button
              className="cursor-pointer [border:none] p-2.5 bg-[transparent] absolute top-[48px] left-[214px] w-[213px] h-[60px] flex flex-row flex-wrap items-center justify-center box-border"
              id="signOut"
            >
              <button className="cursor-pointer [border:none] p-0 bg-[transparent] w-[212px] relative text-mini capitalize font-bold font-poppins text-black text-center flex items-center justify-center shrink-0 hover:text-red-100"
              onClick={handleLogout}>
                Log out
              </button>
            </button>
            <div className="absolute top-[48.8px] left-[213.8px] box-border w-[0.5px] h-[60.5px] border-r-[0.5px] border-solid border-silver-100" />
            <div className="absolute top-[0px] left-[37px] capitalize flex items-center justify-center w-[355px] h-[33px]">
              Are you sure you want to Log out?
            </div>
            <div className="absolute top-[48.5px] left-[-0.5px] box-border w-[431px] h-px border-t-[1px] border-solid border-silver-100" />
          </div>
        </div>
      </div>
      </>
    );
  };
  
  export default SignoutConfirmationPopup;
  