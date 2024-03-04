import PendingTasksCard from "../../../components/cards/pendingTasksCard/PendingTasksCard";
import PendingDocumentsDatagrid from "../../../components/datagrids/pendingDocumentsDatagrid/PendingDocumentsDatagrid";
import CompletedTasksCard from "../../../components/cards/completedTasksCard/CompletedTasksCard";
import AcceptedDocumentsDatagrid from "../../../components/datagrids/acceptedDocumentsDatagrid/AcceptedDocumentsDatagrid";

///Fetch the pending tasks 

const MemberDashboard = ( { onSelectionClick } ) => {
  return (
      <section className="w-[1306px] flex flex-row items-start justify-start px-10 pt-5 pl-20 box-border max-w-full text-left text-xl text-dimgray-600 font-roboto">
        <div className="flex-1 flex flex-col items-start justify-start gap-[20px_0px] max-w-full">
          <div className="self-stretch flex flex-row items-end justify-start gap-[0px_37px] max-w-full mq725:gap-[0px_37px] mq1050:flex-wrap">
            <div className="w-[519px] flex flex-col items-start justify-start pt-0 px-0 pb-0.5 box-border min-w-[519px] max-w-full mq725:min-w-full mq1050:flex-1">
              <div className="self-stretch flex flex-col items-start justify-start max-w-full">
                <div className="w-[338px] h-[47px] relative font-medium flex items-center shrink-0 max-w-full box-border pr-5 mq450:text-base">
                  Welcome back, Sanchita!
                </div>
                <div className="self-stretch flex flex-row items-center justify-center max-w-full">
                  <PendingTasksCard />
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start gap-[19px_0px] min-w-[485px] max-w-full text-sm text-black mq725:min-w-full">
              <div className="self-stretch rounded-8xs bg-white overflow-hidden flex flex-row items-center justify-start pt-[5px] px-[11px] pb-1 [row-gap:20px] border-[1px] border-solid border-gainsboro-400 mq450:flex-wrap">
                <div className="w-[82px] flex flex-col items-start justify-start py-0 px-0 box-border">
                  <div className="w-[354px] h-10 relative font-medium flex items-center shrink-0 max-w-[432%]">{`Supervisor: `}</div>
                </div>
                <div className="flex flex-col items-start justify-start py-0 pr-[11px] pl-0">
                  <img
                    className="w-8 h-8 relative rounded-31xl object-cover"
                    loading="lazy"
                    alt=""
                    src="/profilepic.png"
                  />
                </div>
                <div className="relative text-gray-900">
                  Mayeesha Musarrat (IT Division)
                </div>
              </div>
              <PendingDocumentsDatagrid />
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0.5 pl-0 box-border gap-[0px_36px] max-w-full text-mini text-seagreen-300 mq725:gap-[0px_36px] mq1050:flex-wrap">
            <CompletedTasksCard />
            <div className="flex-1 flex flex-col items-start justify-start min-w-[484px] max-w-full mq725:min-w-full">
              <div className="self-stretch rounded-t-3xs rounded-b-none bg-white overflow-hidden flex flex-row items-center justify-start py-[21px] px-[30px] border-[1px] border-solid border-gainsboro-400">
                <div className="relative font-medium">1 Accepted Documents</div>
              </div>
              <AcceptedDocumentsDatagrid />
            </div>
          </div>
        </div>
      </section>
  );
};

export default MemberDashboard;