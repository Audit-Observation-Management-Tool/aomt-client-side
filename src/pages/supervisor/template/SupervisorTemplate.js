import { useCallback, useState, useEffect } from "react";
import SupervisorDashboard from "../dashboard/SupervisorDashboard";
import { useUserContext } from "../../../contexts/UserContext";
import axios from 'axios';
import Loader from "../../../components/loaders/Loader";
import ViewDocumentationProgress from "../viewDocumentationProgress/ViewDocumentationProgress";
import VersionDetails from "../versionDetails/VersionDetails";
import PortalPopup from "../../../components/popups/PortalPopup";
import SignoutConfirmationPopup from "../../../components/popups/SignoutConfirmationPopup";

const SupervisorTemplate = () => {

  const supervisorID = localStorage.getItem('ID');
  const [supervisorData, setSupervisorData] = useState(null); 
  const [loading, setLoading] = useState(true);

  const [isSignoutConfirmationPopupOpen, setSignoutConfirmationPopupOpen] =
  useState(false);

  const openSignoutConfirmationPopup = useCallback(() => {
    setSignoutConfirmationPopupOpen(true);
  }, []);

  const closeSignoutConfirmationPopup = useCallback(() => {
    setSignoutConfirmationPopupOpen(false);
  }, []);

  useEffect(() => {
    const fetchSupervisorData = async () => {
      try 
      {
        const apiUrl = process.env.REACT_APP_BASE_URL;
        const response = await axios.get(`${apiUrl}supervisor/${supervisorID}`);
        setSupervisorData(response.data.supervisorData);
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
    fetchSupervisorData();
  }, []);


  const [selectedFrame, setSelectedFrame] = useState(localStorage.getItem('selectedFrame'));

  const handleChildrenClick = useCallback((option) => {
    setSelectedFrame(option);
  }, []);

  useEffect(() => {
    localStorage.setItem('selectedFrame', selectedFrame);
  }, [selectedFrame]); 

  const [dashboardClicked, setDashboardClicked] = useState(true);
  const [addSoftwareClicked, setSoftwareClicked] = useState(false);

  const handleDashboardClicked = () => {
    localStorage.clear();
    setDashboardClicked(dashboardClicked);
    setSoftwareClicked(!addSoftwareClicked);
  }

  return (
    <div className="h-[735px] w-full relative bg-gray-100 overflow-hidden flex flex-col items-start justify-start tracking-[normal] text-left text-base text-darkslategray-100 font-roboto">
    {
      loading && (
          <Loader />
      )
     }
     {!loading && (
      <>
      <div className="self-stretch bg-white flex flex-col items-center justify-start max-w-full">
        <div className="self-stretch h-[65px] relative bg-white hidden" />
        <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[23px] pl-3.5 box-border max-w-full">
          <div className="flex-1 flex flex-row items-center justify-between gap-[20px] max-w-full mq675:flex-wrap">
            <div className="w-[367px] flex flex-row items-center justify-start gap-[0px_10px] max-w-full mq450:flex-wrap">
              <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                <img
                  className="w-[55px] h-[55px] relative object-cover z-[1]"
                  loading="eager"
                  alt=""
                  src="/TBL-logo-2.png"
                />
              </div>
              <div className="h-[66px] flex-1 relative flex items-center min-w-[196px] z-[1]">
                Audit Observation Management Tool
              </div>
            </div>
            <div className="flex flex-row items-end justify-start gap-[0px_12px] text-right text-[14px] text-gray-200 font-inter">
              <div className="flex flex-col items-end justify-start gap-[5px_0px]">
                <div className="relative z-[1]"> 
                  {supervisorData[0].Name}
                </div>
                <div className="flex flex-row items-start justify-start py-0 pr-0 pl-5 text-xs text-slategray">
                  <div className="relative z-[1]">Supervisor, {supervisorData[0].Division} Division</div>
                </div>
              </div>
              <img
                className="h-[39px] rounded-xl w-[39px] relative object-cover min-h-[39px] z-[1]"
                loading="eager"
                alt=""
                src={supervisorData[0].ProfilePicture}
              />
            </div>
          </div>
        </div>
        <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-silver-100" />
      </div>
      <section className="self-stretch h-[692px] flex flex-row items-start justify-start max-w-full text-left text-xs text-white font-roboto mq900:pl-0 mq900:pr-0 mq900:box-border">
        <div className="w-[194px] bg-seagreen-200 overflow-hidden shrink-0 flex flex-col items-end justify-start pt-[30px] px-0 pb-[38px] box-border gap-[463px_0px] mq900:flex mq900:pt-5 mq900:pb-7 mq900:box-border">
        
          <div className="self-stretch flex flex-col items-end justify-start pt-0 px-0 pb-[5px] gap-[16px_0px]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[11px_0px]">
              <button className="cursor-pointer [border:none] py-2 pr-px pl-[21px] bg-seagreen-200 self-stretch overflow-hidden flex flex-row items-center justify-end hover:bg-seagreen-100"
              >
                <div className="flex-1 flex flex-row items-start justify-start gap-[0px_7px]">
                  <img
                    className="h-[17px] w-[17px] relative"
                    alt=""
                    src="/homeIcon.svg"
                  />
                  <div className="flex-1 relative text-xs font-medium font-roboto text-white text-left">
                    DASHBOARD
                  </div>
                </div>
              </button>
              <div
                className="self-stretch overflow-hidden flex flex-row items-center justify-end py-[5px] pr-0 pl-[21px] cursor-pointer hover:bg-seagreen-100" 
              >
                <div className="flex-1 flex flex-row items-center justify-start gap-[0px_8px]"
                >
                  <img
                    className="h-[18px] w-[16.7px] relative"
                    loading="eager"
                    alt=""
                    src="/addSoftware.svg"
                  />
                  <div className="h-6 flex-1 relative font-medium flex items-center">
                    ADD SOFTWARE
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-center justify-start py-0 pr-0 pl-5 gap-[0px_10px]">
              <div className="h-[17px] flex flex-col items-start justify-start pt-0 px-0 pb-0.5 box-border">
               
              </div>
              <div className="h-6 flex-1 relative font-medium flex items-center">
                
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-center justify-start py-0 pr-0 pl-5 gap-[0px_11px] hover:bg-seagreen-100 h-[33px] cursor-pointer"
          onClick={openSignoutConfirmationPopup}>
            <img
              className="h-[19px] w-[15px] relative"
              loading="eager"
              alt=""
              src="/logoutIcon.svg"
            />
            <div className="h-6 flex-1 relative font-medium flex items-center">
              LOG OUT
            </div>
          </div>
        </div>
        <div className="self-stretch flex-1 relative overflow-hidden max-w-[calc(100% - 193px)] z-10 ml-1 mt-2 mr-2 mq900:max-w-full">
          {/* { selectedFrame === "Add Software" && <ViewDocumentationProgress /> } */}
          { selectedFrame === "dashboard" && <SupervisorDashboard onSelectionClick={handleChildrenClick} /> }
          { selectedFrame === "viewDocumentationProgress" && <ViewDocumentationProgress onSelectionClick={handleChildrenClick} /> }
          { selectedFrame === "viewVersionDetails" && <VersionDetails onSelectionClick={handleChildrenClick} /> }
          
        </div>
      </section>
      {isSignoutConfirmationPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeSignoutConfirmationPopup}
        >
          <SignoutConfirmationPopup onClose={closeSignoutConfirmationPopup} />
        </PortalPopup>
      )}
       </>
     )}
    </div>
  );
};

export default SupervisorTemplate;