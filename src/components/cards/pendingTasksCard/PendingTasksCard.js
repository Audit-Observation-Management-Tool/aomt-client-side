import PieChart from "../../charts/pieCharts/PieChart";

const PendingTasksCard = () => {
  return (
    <div className="flex-1 rounded-mini bg-white box-border overflow-hidden flex flex-col items-center justify-start pt-[27px] pb-[33px] pr-[17px] pl-[29px] gap-[27px_0px] max-w-full text-left text-mini text-dimgray-600 font-roboto border-[1px] border-solid border-lightgray-100">
      <div className="self-stretch flex flex-row items-end justify-between gap-[20px] mq450:flex-wrap">
        <div className="relative font-medium z-[1]">My Pending Works</div>
        <div className="relative text-smi font-medium text-gray-500 z-[1]">
          From 19 Feb, 2024
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start max-w-full text-mid text-dimgray-700">
        <div className="w-[430px] flex flex-row items-center justify-start gap-[0px_32px] max-w-full mq450:flex-wrap mq450:gap-[0px_32px]">
          <PieChart />
          <div className="w-[104px] flex flex-col items-start justify-start pt-[19px] px-0 pb-0 box-border">
            <div className="flex flex-col items-start justify-start gap-[59px_0px]">
              <div className="flex flex-row items-center justify-start gap-[0px_9px]">
                <div className="h-8 w-1 relative rounded-8xs bg-royalblue overflow-hidden shrink-0 z-[1]" />
                <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                  <div className="relative font-medium z-[1]">1 SRS</div>
                </div>
              </div>
              <div className="flex flex-row items-center justify-start gap-[0px_9px]">
                <div className="h-8 w-1 relative rounded-8xs bg-deepskyblue overflow-hidden shrink-0 z-[1]" />
                <div className="flex flex-col items-start justify-start pt-0 px-0 pb-0.5">
                  <div className="relative font-medium z-[1]">0 BRD</div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start pt-[19px] px-0 pb-0">
            <div className="flex flex-col items-start justify-start gap-[59px_0px]">
              <div className="flex flex-row items-center justify-start gap-[0px_8px]">
                <div className="h-8 w-1 relative rounded-8xs bg-tomato overflow-hidden shrink-0 z-[1]" />
                <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                  <div className="relative font-medium z-[1]">0 SDS</div>
                </div>
              </div>
              <div className="flex flex-row items-end justify-start gap-[0px_9px]">
                <div className="h-8 w-1 relative rounded-8xs bg-gold overflow-hidden shrink-0 z-[1]" />
                <div className="flex flex-col items-start justify-start pt-0 px-0 pb-1">
                  <div className="relative font-medium z-[1]">1 UAT</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PendingTasksCard;