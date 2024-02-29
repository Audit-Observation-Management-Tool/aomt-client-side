import UploadDocumentsDatagrid from "../../../components/datagrids/uploadDocumentsDatagrid/UploadDocumentsDatagrid";

const UploadDocuments = () => {
  return (
    <div className="w-full relative overflow-hidden flex flex-col items-start justify-start py-[23px] pr-[39px] pl-[23px] box-border gap-[18px_0px] tracking-[normal] text-left text-xl text-dimgray-600 font-roboto">
      <h3 className="m-0 relative text-inherit font-medium font-inherit inline-block max-w-full mq450:text-base">
        CoreTech / System Requirement Specification Document
      </h3>
      <section className="self-stretch flex flex-row items-start justify-start py-0 px-[3px] box-border max-w-full text-center text-sm text-white font-roboto">
        <div className="flex-1 flex flex-row items-center justify-start gap-[0px_19px] max-w-full mq1250:flex-wrap">
          <footer className="flex-1 flex flex-col items-start justify-start gap-[76px_0px] min-w-[618px] max-w-full text-center text-sm text-white font-roboto mq750:gap-[76px_0px] mq750:min-w-full mq1050:gap-[76px_0px]">
            <UploadDocumentsDatagrid />
            <div className="w-52 flex flex-row items-start justify-start py-0 px-0.5 box-border">
              <div className="flex-1 rounded-3xs bg-seagreen-200 overflow-hidden flex flex-row items-center justify-center pt-3.5 pb-[15px] pr-1.5 pl-[3px] whitespace-nowrap">
                <div className="flex-1 relative font-semibold">
                  Download Latest Document
                </div>
              </div>
            </div>
          </footer>
          <div className="w-[492px] rounded-3xs bg-white box-border overflow-hidden shrink-0 flex flex-col items-center justify-start pt-8 pb-[25px] pr-[26px] pl-7 gap-[22px_0px] min-w-[492px] max-w-full border-[1px] border-solid border-lightgray-100 mq1250:flex-1 mq750:pt-[21px] mq750:pb-5 mq750:box-border mq750:min-w-full">
            <button className="cursor-pointer pt-[13px] px-0 pb-[15px] bg-whitesmoke-200 self-stretch rounded-3xs overflow-hidden flex flex-col items-center justify-start gap-[9px_0px] whitespace-nowrap border-[1px] border-solid border-gainsboro-300 hover:bg-lightgray-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-silver-200">
              <img
                className="w-[50px] h-[50px] relative"
                alt=""
                src="/iondocumentoutline.svg"
              />
              <div className="self-stretch h-[23px] relative text-sm font-roboto text-gray-400 text-center flex items-center justify-center shrink-0">
                Upload Your Document Here
              </div>
            </button>
            <textarea
              className="bg-white h-[296px] w-auto [outline:none] self-stretch relative rounded-3xs box-border overflow-hidden shrink-0 border-[1px] border-solid border-gainsboro-300"
              rows={15}
              cols={22}
            />
            <div className="self-stretch rounded-3xs bg-seagreen-200 overflow-hidden flex flex-row items-center justify-center pt-px px-0 pb-0 box-border whitespace-nowrap max-w-full">
              <div className="h-11 flex-1 relative font-semibold flex items-center justify-center max-w-full">
                Upload Document
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UploadDocuments;