import UploadDocuments from "../uploadDocuments/UploadDocuments";

const MemberTemplate = () => {
  const [selectedFrame, setSelectedFrame] = useState(localStorage.getItem('selectedFrame'));
    
  const handleChildrenClick = useCallback((option) => {
    setSelectedFrame(option);
  }, []);

  useEffect(() => {
    localStorage.setItem('selectedFrame', selectedFrame);
  }, [selectedFrame]); 

  useEffect(() => {
    const fetchMemberData = async () => {
      try 
      {
        const apiUrl = process.env.REACT_APP_BASE_URL;
        const response = await axios.get(`${apiUrl}member/${supervisorID}`);
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

    return (
      <div className=" w-full relative bg-gray-100 overflow-hidden flex flex-col items-start justify-start tracking-[normal]">
        <header className="self-stretch bg-white overflow-hidden flex flex-row items-center justify-between py-0 pr-[74px] pl-[79px] sticky top-[0] z-[99] gap-[20px] text-left text-base text-darkslategray-100 font-roboto mq750:pl-[39px] mq750:pr-[37px] mq750:box-border">
          <div className="h-[66px] w-[302px] relative flex items-center shrink-0 whitespace-nowrap mq450:hidden">
            Audit Observation Management Tool
          </div>
          <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0 text-right text-sm text-gray-200 font-inter">
            <div className="flex flex-col items-end justify-start gap-[5px_0px] mq450:hidden">
              <div className="relative whitespace-nowrap">Sumaya Sanchita</div>
              <div className="relative text-xs text-slategray whitespace-nowrap">
                Member, IT Division
              </div>
            </div>
          </div>
          <div className="h-[741px] w-full absolute !m-[0] right-[0px] bottom-[-682px] left-[0px]">
            <img
              className="absolute top-[0px] left-[14px] w-[55px] h-[55px] object-cover"
              loading="lazy"
              alt=""
              src="/TBL-logo-2.png"
            />
            <img
              className="absolute top-[7px] left-[1463px] rounded-[50px] w-[39px] h-[39px] object-cover"
              loading="lazy"
              alt=""
              src="/profilepic.png"
            />
            <div className = "absolute top-[51px] left-[0px] w-[1530px] h-[690px] overflow-hidden z-[1]"/>
          </div>
        </header>
        <section className="self-stretch h-[671px] relative bg-red-300 overflow-hidden shrink-0" >
            { selectedFrame === "uploadDocuments" && <UploadDocuments onSelectionClick={handleChildrenClick} /> }
        </section>
      </div>
    );
  };
  
  export default MemberTemplate;  