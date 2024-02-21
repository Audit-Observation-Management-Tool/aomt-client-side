import { useCallback } from "react";

const SoftwareCards = ( { softwareName, softwareDeadline } ) => {
  const onSoftwareCardClick = useCallback(() => {
    // Please sync "View Software" to the project
  }, []);

  return (
    <div className="h-[135px] w-[249px] flex flex-col items-start justify-start py-[26px] px-[17px] box-border relative text-left text-base text-black font-roboto">
      <div
        className="w-full h-full absolute my-0 mx-[!important] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-xl bg-white shadow-[0px_0px_5px_rgba(0,_0,_0,_0.15)] cursor-pointer"
        onClick={onSoftwareCardClick}
      />
      <div className="w-[186px] flex flex-col items-start justify-start py-0 pr-5 pl-0 gap-[12px_0px]">
        <div className="relative z-[1]">
          { softwareName }
        </div>
        <div className="self-stretch relative text-xs font-medium text-red-500 z-[1]">
          { softwareDeadline }
        </div>
      </div>
      <div className="w-[86px] h-7 absolute my-0 mx-[!important] right-[20px] bottom-[15px] bg-royalblue overflow-hidden shrink-0 z-[1]" >
        { /* RENDER REACT MUI AVATARGROUP HERE */ }
      </div>
    </div>
  );
};

export default SoftwareCards;