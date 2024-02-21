import { useCallback, useState, useEffect } from "react";
import ViewDocumentationProgress from "../viewDocumentationProgress/ViewDocumentationProgress";
import SupervisorDashboard from "../dashboard/SupervisorDashboard";

const SupervisorTemplate = () => {

  const [selectedFrame, setSelectedFrame] = useState(localStorage.getItem('selectedFrame'));
  const handleOptionClick = useCallback((option) => {
    setSelectedFrame(option);
  }, []);
  useEffect(() => {
    localStorage.setItem('selectedFrame', selectedFrame);
  }, [selectedFrame]); 

  const [dashboardClicked, setDashboardClicked] = useState(true);
  const [addSoftwareClicked, setSoftwareClicked] = useState(false);

  const handleDashboardClicked = () => {
    localStorage.clear();
    setDashboardClicked(!dashboardClicked);
  }

  /***
   * 
   * USE AXIOS FETCH TO FETCH THE SUPERVISOR DIVISION, AND SEND THE RESULT AS PROPS TO THE SUPERVISOR DASHBOARD. USE .MAP TO TRAVERSE THROUGH THE RESULTING ARRAY AND RENDER SoftwareCards
   */

  return (
    <div className="h-[737px] w-full relative bg-gray-100 overflow-hidden flex flex-col items-start justify-start tracking-[normal] text-left text-base text-darkslategray-100 font-roboto">
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
                <div className="relative z-[1]">Mayeesha Musarrat</div>
                <div className="flex flex-row items-start justify-start py-0 pr-0 pl-5 text-xs text-slategray">
                  <div className="relative z-[1]">Dhaka,Bangladesh</div>
                </div>
              </div>
              <img
                className="h-[39px] w-[39px] relative object-cover min-h-[39px] z-[1]"
                loading="eager"
                alt=""
                src="/profilepic.png"
              />
            </div>
          </div>
        </div>
        <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-silver" />
      </div>
      <section className="self-stretch h-[684px] flex flex-row items-start justify-start max-w-full text-left text-xs text-white font-roboto mq900:pl-0 mq900:pr-0 mq900:box-border">
        <div className="w-[194px] bg-seagreen-200 overflow-hidden shrink-0 flex flex-col items-end justify-start pt-[30px] px-0 pb-[43px] box-border gap-[463px_0px] mq900:flex mq900:pt-5 mq900:pb-7 mq900:box-border">
        
          <div className="self-stretch flex flex-col items-end justify-start pt-0 px-0 pb-[5px] gap-[16px_0px]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[11px_0px]">
              <button className="cursor-pointer [border:none] py-2 pr-px pl-[21px] bg-seagreen-200 self-stretch overflow-hidden flex flex-row items-center justify-end hover:bg-seagreen-100"
               onClick={() => handleOptionClick("Dashboard")}>
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
                className={`self-stretch overflow-hidden flex flex-row items-center justify-end py-[5px] pr-0 pl-[21px] cursor-pointer hover:bg-seagreen-100 ${dashboardClicked ? 'bg-seagreen-100' : 'bg-seagreen-200'}`}
                onClick={handleDashboardClicked} 
               >
                <div className="flex-1 flex flex-row items-center justify-start gap-[0px_8px]"
                onClick={() => handleOptionClick("Add Software")}>
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
                <img
                  className="w-[15px] h-[14.6px] relative"
                  loading="eager"
                  alt=""
                  src="/calendar.svg"
                />
              </div>
              <div className="h-6 flex-1 relative font-medium flex items-center">
                VIEW CALENDAR
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-center justify-start py-0 pr-0 pl-5 gap-[0px_11px]">
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
          { selectedFrame === "Add Software" && <ViewDocumentationProgress /> }
          { selectedFrame === "Dashboard" && <SupervisorDashboard /> }
        </div>
      </section>
    </div>
  );
};

export default SupervisorTemplate;