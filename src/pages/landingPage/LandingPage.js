import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, InputAdornment, IconButton, Button } from "@mui/material";
import { useState } from "react";
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import axios from 'axios';
import SnackbarComponent from '../../components/snackbars/SnackbarComponent';
import { useUserContext } from '../../contexts/UserContext';


const LandingPage = () => {

  const navigate = useNavigate();
  const { setUserAsSupervisor } = useUserContext();
  const [showPassword, setShowPassword] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [userID, setUserID] = useState("");
  const [password, setPassword] = useState("");
  const [variant, setVariant] = useState("");
  const [message, setMessage] = useState("");
  
  const handleShowPasswordClick = () => {
    setShowPassword(!showPassword);
  }
  const showSnackbar = () => {
    setOpenSnackbar(true);
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') return ;
    setOpenSnackbar(false);
  };

  const handleSigninClick = (e) => {
    e.preventDefault();
    const userInputtedSigninData = {
      userID: userID,
      password: password
    };
    const apiUrl = process.env.REACT_APP_BASE_URL;
    axios.post(`${apiUrl}authenticate`, userInputtedSigninData)
      .then(response => {
        console.log(response.status);
        if(response.status === 200)
        {
          localStorage.clear();
       //   localStorage.setItem('selectedFrame', 'dashboard');
          setVariant("success");
          setMessage("Sign-in successful!");
          showSnackbar();
        }
        if(response.data.isSupervisor)
        {
          setUserAsSupervisor(response.data.userID);
          localStorage.setItem('selectedFrame', 'dashboard');
          localStorage.setItem('ID', response.data.userID);
          setTimeout(() => {
            navigate("/supervisor-page");
          }, 1220);
        }
        else if(!response.data.isSupervisor)
        {
        //  setUserAsMember(response.data.userID);
          localStorage.setItem('selectedFrame', 'memberDashboard');
          localStorage.setItem('ID', response.data.userID);
          setTimeout(() => {
            navigate("/member-page");
          }, 1220);
        }
      })
      .catch(error => {
        console.error('Error:', error);
        setVariant("error");
        setMessage("Invalid sign-in attempt!");
        showSnackbar();
      });
  };

  return (
    <div className="h-[735px] w-full relative bg-whitesmoke overflow-visible flex flex-row items-end justify-start pt-7 px-[27px] pb-[105px] box-border gap-[0px_122px] tracking-[normal] text-center text-[30px] text-gray font-roboto mq450:gap-[0px_122px] mq800:gap-[0px_122px] mq1325:flex-wrap mq1325:gap-[0px_122px]">

     <SnackbarComponent
        open={openSnackbar} 
        message={message}
        variant={variant} 
        onClose={handleCloseSnackbar} 
      />


      <div className="w-[686px] flex flex-col items-start justify-start min-w-[686px] min-h-[617px] max-w-full mq800:min-w-full mq1325:flex-1">
        <div className="self-stretch flex flex-row items-start justify-start gap-[0px_50px] max-w-full mq800:flex-wrap mq800:gap-[0px_50px]">
          <img
            className="h-[23px] w-[103px] relative object-cover top-[20px]"
            loading="eager"
            alt=""
            src="/TBL-Logo.png"
          />
          <div className="flex-1 flex flex-col items-start justify-start pt-32 px-0 pb-0 box-border min-w-[346px] max-w-full mq450:min-w-full mq800:pt-[83px] mq800:box-border">
            <div className="self-stretch h-[437px] flex flex-col items-center justify-start gap-[38px_0px] mq800:gap-[38px_0px]">
              <img
                className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
                loading="eager"
                alt=""
                src="/LandingPage.png"
              />
              <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[13px] pl-[7px]">
                <h1 className="m-0 relative text-inherit tracking-[0.5px] leading-[76px] font-extrabold font-inherit mq450:text-lg mq450:leading-[46px] mq800:text-[24px] mq800:leading-[61px] text-seagreen-100">
                  <span>Audit Observation Management tool</span>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[530px] flex flex-col items-start justify-start gap-[4px_0px] min-w-[530px] max-w-full text-left text-[32px] mq800:min-w-full mq1325:flex-1">
        <h1 className="m-0 relative text-inherit tracking-[0.5px] leading-[40px] font-bold font-inherit mq450:text-[19px] mq450:leading-[24px] mq800:text-[26px] mq800:leading-[32px] text-seagreen-100">
          Welcome!
        </h1>
        <div className="flex flex-row items-start justify-start pt-0 px-px pb-[7px] text-[13px] text-darkslategray">
          <b className="relative tracking-[0.5px] leading-[40px]">
            Login with your credentials
          </b>
        </div>

      <form onSubmit = {handleSigninClick}>
        <div className="self-stretch rounded-3xs bg-white box-border overflow-hidden flex flex-col items-center justify-start pt-9 pb-14 pr-[29px] pl-7 gap-[36px_0px] max-w-full text-mini text-black border-[1px] border-solid border-silver-100 mq450:pt-[23px] mq450:pb-9 mq450:box-border mq800:gap-[36px_0px]">

          <div className="self-stretch h-[105px] flex flex-col items-start justify-start pt-0 px-0 pb-[19px] box-border gap-[10px_0px]">
            <div className="flex flex-row items-start justify-start py-0 px-[3px]">
              <div className="relative tracking-[0.5px] leading-[20px] font-medium">
                User ID
              </div>
            </div>

            {/* USER ID SIGN IN  */}
            <div className="self-stretch flex-1 relative rounded-2xs bg-gainsboro-200 overflow-visible">
              <TextField 
                className="w-[472px]"
                required
                placeholder="Enter your user ID"
                variant="outlined"
                color="success"
                value = {userID}
                onChange = {(e) => setUserID(e.target.value)}
              /> 
            </div>


          </div>
          <div className="self-stretch h-[121px] flex flex-col items-start justify-start gap-[9px_0px]">
            <div className="flex flex-row items-start justify-start py-0 px-[3px]">
              <div className="relative tracking-[0.5px] leading-[20px] font-medium">
                Password
              </div>
            </div>
            <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[16px_0px] text-[12px]">


            {/* USER PASSWORD SIGN IN  */}
            <div className="self-stretch flex-1 relative rounded-2xs bg-gainsboro-200 overflow-visible">
              <TextField 
                  className="w-[472px] [border:none] bg-[transparent]"
                  required
                  type = { showPassword ? "text" : "password" }
                  placeholder="Enter your password"
                  variant="outlined"
                  color="success"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position = "end">
                        <IconButton
                          onClick={handleShowPasswordClick}
                        >
                         { showPassword ? <VisibilityIcon /> : <VisibilityOffIcon /> }
                        </IconButton>
                      </InputAdornment>
                  ),
                }}
                value = {password}
                onChange = {(e) => setPassword(e.target.value)}
              /> 
            </div>


              <div className="flex flex-row items-start justify-start py-0 px-[3px]">
                <div className="relative tracking-[0.5px] leading-[20px] hover:[text-decoration:underline] hover:cursor-pointer">
                  Forgot Password?
                </div>
              </div>
            </div>
          </div>

          {/* SIGN IN BUTTON */}
          <button className="self-stretch rounded-3xs bg-seagreen-200 overflow-hidden flex flex-row items-center justify-center py-[18px] pr-0 pl-1 box-border max-w-full whitespace-nowrap text-center text-lg text-white hover:cursor-pointer hover:bg-seagreen-100 active:bg-seagreen-100" type="submit">
            <div className="flex-1 relative tracking-[0.5px] leading-[20px] font-medium inline-block max-w-full">
              Sign in
            </div>
          </button>
        </div>
      </form>
      </div>
    </div>
  );
};

export default LandingPage;