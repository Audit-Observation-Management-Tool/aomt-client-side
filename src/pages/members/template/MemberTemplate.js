import { useCallback, useState, useEffect } from "react";
import { useUserContext } from "../../../contexts/UserContext";
import axios from 'axios';
import Loader from "../../../components/loaders/Loader";
import UploadDocuments from "../uploadDocuments/UploadDocuments";

const MemberTemplate = () => {

  const memberID = localStorage.getItem('ID');
  const [memberData, setMemberData] = useState(null); 
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMemberData = async () => {
      try 
      {
        const apiUrl = process.env.REACT_APP_BASE_URL;
        const response = await axios.get(`${apiUrl}member/${memberID}`);
        setMemberData(response.data.memberData);
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
    fetchMemberData();
  }, []);


  const [selectedFrame, setSelectedFrame] = useState(localStorage.getItem('selectedFrame'));

  const handleChildrenClick = useCallback((option) => {
    setSelectedFrame(option);
  }, []);

  useEffect(() => {
    localStorage.setItem('selectedFrame', selectedFrame);
  }, [selectedFrame]); 

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
                  {memberData[0].Name}
                </div>
                <div className="flex flex-row items-start justify-start py-0 pr-0 pl-5 text-xs text-slategray">
                  <div className="relative z-[1]">Member, {memberData[0].Division} Division</div>
                </div>
              </div>
              <img
                className="h-[39px] rounded-xl w-[39px] relative object-cover min-h-[39px] z-[1]"
                loading="eager"
                alt=""
                src={memberData[0].ProfilePicture}
              />
            </div>
          </div>
        </div>
        <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-silver" />
      </div>


      <section className="self-stretch h-[684px] flex flex-row items-start justify-start max-w-full text-left text-xs text-white font-roboto mq900:pl-0 mq900:pr-0 mq900:box-border">
       
        <div className="self-stretch flex-1 relative overflow-hidden max-w-[calc(100% - 193px)] z-100 ml-1 mt-2 mr-2 mq900:max-w-full">
          {/* { selectedFrame === "Add Software" && <ViewDocumentationProgress /> } */}
          { selectedFrame === "uploadDocuments" && <UploadDocuments onSelectionClick={handleChildrenClick} /> }

          
        </div>
      </section>



       </>
     )}
    </div>
  );
};

export default MemberTemplate;