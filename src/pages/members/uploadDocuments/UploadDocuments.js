import UploadDocumentsDatagrid from "../../../components/datagrids/uploadDocumentsDatagrid/UploadDocumentsDatagrid";
import UploadDocumentSection from "./UploadDocumentSection";

const UploadDocuments = () => {
  return (
    <div className="w-full relative overflow-hidden flex flex-col items-start justify-start py-[23px] pr-[39px] pl-[23px] box-border gap-[18px_0px] tracking-[normal] text-left text-xl text-dimgray-300 font-roboto">
      <h3 className="m-0 relative text-inherit font-medium font-inherit inline-block max-w-full mq450:text-base">
        CoreTech / System Requirement Specification Document
      </h3>
      <section className="self-stretch flex flex-row items-start justify-start py-0 px-[3px] box-border border-color:dimgray-300 max-w-full text-center text-sm text-white font-roboto">
        <div className="flex-1 flex flex-row items-center justify-start gap-[0px_19px] max-w-full mq1250:flex-wrap">
          <div className="flex-1 flex flex-col items-start justify-start gap-[60px_0px] min-w-[618px] max-w-full mq750:gap-[76px_0px] mq750:min-w-full mq1050:gap-[76px_0px]">
            <UploadDocumentsDatagrid />
           
            <div className="w-52 flex flex-row items-start justify-start py-0 px-0.5 box-border">
              <div className="flex-1 rounded-3xs bg-seagreen-200 gap-[60px_0px] overflow-hidden flex flex-row items-center justify-center pt-3.5 pb-[15px] pr-1.5 pl-[3px] whitespace-nowrap hover:cursor-pointer hover:bg-seagreen-300">
                <div className="flex-1 relative font-semibold">
                  Download Latest Document
                </div>
              </div>
            </div>


          </div>
          <UploadDocumentSection />
        </div>
      </section>
    </div>
  );
};

export default UploadDocuments;