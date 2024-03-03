import PieChart from "../../charts/pieCharts/PieChart";

const CompletedTasksCard = () => {
  return (
    <div className="rounded-mini bg-white box-border overflow-hidden flex flex-row items-center justify-start pt-[22px] pb-[37px] pr-9 pl-[30px] gap-[0px_41px] min-w-[520px] max-w-full text-left text-mini text-dimgray-600 font-roboto border-[1px] border-solid border-lightgray-300 mq725:flex-wrap mq725:gap-[0px_41px] mq725:min-w-full mq1050:flex-1">
      <div className="h-[183px] w-[151px] flex flex-col items-start justify-start gap-[7px_0px]">
        <div className="relative font-medium">My Completed Works</div>
        <PieChart />
      </div>
      <div className="flex flex-col items-start justify-start pt-[45px] pb-0 pr-[25px] pl-0 text-mid text-dimgray-700">
        <div className="flex flex-col items-start justify-start gap-[56px_0px]">
          <div className="flex flex-row items-start justify-start py-0 pr-px pl-0 gap-[0px_8px]">
            <div className="h-8 w-1 relative rounded-8xs bg-royalblue overflow-hidden shrink-0" />
            <div className="flex flex-col items-start justify-start gap-[2px_0px]">
              <div className="relative font-medium">20 SRS</div>
              <div className="relative text-2xs text-darkgray-100">
                Completed
              </div>
            </div>
          </div>
          <div className="flex flex-row items-start justify-start py-0 pr-px pl-0 gap-[0px_8px]">
            <div className="h-8 w-1 relative rounded-8xs bg-deepskyblue overflow-hidden shrink-0" />
            <div className="flex flex-col items-start justify-start gap-[2px_0px]">
              <div className="relative font-medium">10 BRD</div>
              <div className="relative text-2xs text-darkgray-100">
                Completed
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start justify-start gap-[56px_0px] text-smi text-gray-500">
        <div className="flex flex-col items-start justify-start gap-[30px_0px]">
          <div className="h-[15px] flex flex-row items-start justify-start py-0 pr-px pl-8 box-border">
            <div className="relative font-medium">From Feb, 2020</div>
          </div>
          <div className="flex flex-row items-start justify-start py-0 pr-px pl-0 gap-[0px_8px] text-mid text-dimgray-700">
            <div className="h-8 w-1 relative rounded-8xs bg-tomato overflow-hidden shrink-0" />
            <div className="flex flex-col items-start justify-start gap-[2px_0px]">
              <div className="relative font-medium">5 SDS</div>
              <div className="relative text-2xs text-darkgray-100">
                Completed
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-start justify-start py-0 pr-px pl-0 gap-[0px_8px] text-mid text-dimgray-700">
          <div className="h-8 w-1 relative rounded-8xs bg-gold overflow-hidden shrink-0" />
          <div className="flex flex-col items-start justify-start gap-[2px_0px]">
            <div className="relative font-medium">10 UAT</div>
            <div className="relative text-2xs text-darkgray-100">Completed</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompletedTasksCard;