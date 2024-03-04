import SoftwareCard1 from "../../../components/cards/SoftwareCard/SoftwareCard1";

const SupervisorDashboardNew = () => {
  return (
    <div className="w-full relative bg-gray-100 overflow-hidden flex flex-col items-center justify-start pt-[17px] pb-8 pr-[23px] pl-[30px] box-border gap-[12px_0px] tracking-[normal] text-left text-lg text-darkslategray-300 font-roboto">
      <div className="self-stretch flex flex-row items-start justify-start py-0 px-px box-border max-w-full">
        <h1 className="m-0 h-[31px] w-[451px] relative text-inherit font-medium font-inherit flex items-center shrink-0 max-w-full">
          Dashboard
        </h1>
      </div>
      <section className="self-stretch flex flex-row items-end justify-start gap-[0px_23px] max-w-full mq1225:flex-wrap">
       
        <div className="flex-1 bg-mediumslateblue overflow-hidden flex flex-row items-start justify-start pt-[7px] px-2.5 pb-[383px] box-border min-w-[255px] max-w-full mq750:pt-5 mq750:pb-[249px] mq750:box-border">
          <SoftwareCards1 />
        </div>
      </section>
    </div>
  );
};

export default SupervisorDashboardNew;
