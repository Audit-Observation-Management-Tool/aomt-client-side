import { useCallback } from "react";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const SoftwareCard1 = ({ title, deadline, description, createdOn, onClick }) => {
  const onRectangleClick = useCallback(() => {
    // Please sync "View Software" to the project
  }, []);

  return (
    <div className="w-[280px] flex flex-col items-center justify-start pt-4 px-[11px] pb-[13px] box-border relative gap-[23px_0px] text-left text-mini text-black rounded-8xs font-roboto cursor-pointer hover:shadow-[0px_0px_5px_4px_rgba(0,_0,_0,_0.1)] shadow-[0px_0px_20px_2px_rgba(0,_0,_0,_0.1)] "   
   >
      <div
        className="w-[280px] h-full absolute !m-[0] top-[0px] right-[6px] bottom-[0px] left-[0px] rounded-8xs bg-white "
      />
      <div className="self-stretch flex flex-col items-start justify-start gap-[3px_0px]">
        <div className="flex flex-row items-start justify-start pt-0 px-0 pb-1.5 gap-[0px_8px]">
          <h2 className="m-0 relative text-inherit font-medium font-inherit z-[1]">
           {title}
          </h2>
          <OpenInNewIcon 
            className="h-3.5 w-3.5 relative z-[1] text-gray-500 hover:text-blue"
            onClick={onClick}
          />
        </div>
        <div className="self-stretch h-2 flex flex-row items-start justify-start pt-0 px-0 pb-2 box-border">
          <div className="h-px flex-1 relative box-border z-[1] border-t-[1px] border-solid border-gray-300" />
        </div>
        <i className="w-[235px] h-[74px] relative text-2xs inline-block font-extralight text-justify shrink-0 z-[1] text-gray-200">
          {description}
        </i>
        <div className="w-[250px] flex flex-row items-start justify-start py-0 px-1 box-border text-xs text-red-200">
          <div className="flex-1 flex flex-row items-center justify-start gap-[0px_5px] pt-5">
            <img
              className="h-4 w-4 relative min-h-[16px] z-[1]"
              loading="lazy"
              alt=""
              src="/biclock.svg"
            />
            <div className="flex-1 relative z-[1]">
              {deadline}
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[3px] pl-px text-4xs">
        <div className="flex-1 flex flex-row items-center justify-between gap-[20px]">
          <div className="flex flex-row items-center justify-start gap-[0px_5px]">
            <div className="relative font-light z-[1]">2 Assignees</div>
          </div>
          <div className="relative font-light z-[1]">
            Created on {createdOn}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SoftwareCard1;