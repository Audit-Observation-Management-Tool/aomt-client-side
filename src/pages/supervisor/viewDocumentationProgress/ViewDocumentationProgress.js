import ProgressPieChart from "../../../components/charts/progressPieChart/ProgressPieChart";
import BarChart from "../../../components/charts/barCharts/BarChart";
import DocumentationProgressCards from "../../../components/cards/ProgressCards/DocumentationProgressCards";
import TeamMembersDatagrid from "../../../components/datagrids/teamMembersDatagrid.js/TeamMembersDatagrid";
import { useState, useEffect } from "react";

const ViewDocumentationProgress = ({onSelectionClick}) => {
  const [cardCount, setCardCount] = useState(0);
  const [height, setHeight] = useState(400);

  const software = JSON.parse(localStorage.getItem('software'));

  useEffect(() => {
    if (cardCount > 2) 
    {
      setHeight(200);
    }
  }, [cardCount]);

  const handleGoBackClick = () => {
    onSelectionClick('dashboard');
  }


  return (
    <div className="w-[1337px] overflow-hidden flex flex-col items-center justify-start pt-3 pb-[61px] pr-[22px] pl-[25px] box-border tracking-[normal]">
      <header className="self-stretch flex flex-row items-start justify-start text-left text-[20px] text-dimgray-200 font-roboto">
        <h2 className="m-0 h-[41px] w-[213px] relative text-inherit font-bold font-inherit flex items-center shrink-0 whitespace-nowrap">
          <span className="hover:[text-decoration:underline] cursor-pointer"
          onClick = {() => handleGoBackClick("dashboard")}
          >Softwares </span>/{software.softwareName}
        </h2>
    </header>

      <section className="self-stretch flex flex-row items-start justify-start gap-[0px_20px] max-w-full text-left text-xs text-dimgray-400 font-roboto mq1050:flex-wrap">
        <div className="w-[385px] flex flex-col items-start justify-start pt-2.5 px-0 pb-0 box-border min-w-[385px] max-w-full mq725:min-w-full mq1050:flex-1">
          <div className="self-stretch flex flex-col items-start justify-start gap-[19px_0px] max-w-full">
            <div className="self-stretch rounded-6xs bg-white shadow-[0px_0px_4px_rgba(0,_0,_0,_0.15)] flex flex-row items-end justify-start pt-[26px] pb-[31px] pr-[37px] pl-[27px] gap-[0px_16px] mq450:flex-wrap">

              <ProgressPieChart progress = {0.8} />

              <div className="w-[130px] flex flex-col items-start justify-start py-0 pr-px pl-0 box-border gap-[21px_0px] min-w-[129px] mq450:flex-1 mq450:pr-0 mq450:box-border">
                <div className="relative font-medium">Required Documents</div>
                <div className="self-stretch flex flex-row items-start justify-center pt-0 px-0 pb-[98px]">
                  <div className="h-[23px] flex-1 rounded-8xs bg-gainsboro-100 flex flex-row items-start justify-start py-[3px] pr-[7px] pl-4 box-border">
                    <div className="h-[22px] w-32 relative rounded-8xs bg-gainsboro-100 hidden" />
                    <div
                      className="w-[calc(100%_-_40.4px)] [border:none] [outline:none] font-medium font-roboto text-xs bg-[transparent] h-4 flex-1 relative text-dimgray-400 text-left flex items-center min-w-[53px] z-[1]"
                    >
                    UAT
                    </div>
                    <img
                      className="h-[16.7px] w-[17.4px] relative z-[1]"
                      alt=""
                      src="/user-acceptance-testing.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch bg-red overflow-hidden flex flex-row items-center justify-top box-border max-w-full">
              <BarChart />
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-center justify-start gap-[23px_0px] min-w-[575px] max-w-full mq725:min-w-full">
      <div className="self-stretch overflow-hidden flex flex-row items-start justify-start pt-[11px] px-3 pb-[10px] box-border max-w-full">
        <div className="flex flex-wrap gap-2">
          <DocumentationProgressCards />
          <DocumentationProgressCards />
          <DocumentationProgressCards />
        </div>
      </div>
      <div className={`self-stretch h-full flex flex-row items-start justify-start py-0 pr-2 pl-6 box-border max-w-full`}>
        <div className="self-stretch flex-1 relative bg-white overflow-hidden max-w-full">
          <TeamMembersDatagrid
          height={280}
          // 260 for card > 2 and 400 for card <= 2
          />
        </div>
      </div>
    </div>
      </section>
    </div>
  );
};

export default ViewDocumentationProgress;