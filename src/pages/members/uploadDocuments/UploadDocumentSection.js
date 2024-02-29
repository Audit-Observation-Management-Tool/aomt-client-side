import { TextField } from "@mui/material";

const UploadDocumentSection = () => {
    return (
      <div className="w-[492px] rounded-3xs bg-white box-border overflow-hidden shrink-0 flex flex-col items-center justify-start pt-8 pb-[25px] pr-[26px] pl-7 gap-[22px_0px] min-w-[492px] max-w-full text-center text-sm text-white font-roboto border-[1px] border-solid border-silver mq1250:flex-1 mq750:pt-[21px] mq750:pb-5 mq750:box-border mq750:min-w-full">

      {/* Upload File Section */}
        <div className="cursor-pointer pt-[13px] px-0 pb-[15px] self-stretch rounded-8xs overflow-hidden flex flex-col items-center justify-start gap-[9px_0px] whitespace-nowrap border-[1px] border-solid border-silver bg-gray-500">
          <img
            className="w-[50px] h-[50px] relative"
            alt=""
            src="/uploadDocument.svg"
          />
          <div className="self-stretch h-[23px] relative text-sm font-roboto text-gray-400 text-center flex items-center justify-center shrink-0">
            Upload Your Document Here
          </div>
        </div>

          {/* Write Change Message Section */}
           <TextField
            className = "bg-white h-[296px] w-auto [outline:none] self-stretch relative rounded-8xs box-border overflow-hidden shrink-0 border-[1px] border-solid border-silver"
            variant="outlined"
            color="success"
            multiline 
            rows={11}
            placeholder="Write your change message within 50 words..."
          />
        <div className="self-stretch rounded-3xs bg-seagreen-200 overflow-hidden flex flex-row items-center justify-center pt-px px-0 pb-0 box-border whitespace-nowrap max-w-full">
          <div className="h-11 flex-1 relative font-semibold flex items-center justify-center max-w-full">
            Upload Document
          </div>
        </div>
      </div>
    );
  };
  
  export default UploadDocumentSection;  