import { useCallback } from "react";
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import { styled } from '@mui/material/styles';
import { convertDate } from "../../../utils/dateConverter/ConvertDate"; 
import { DaysLeftTillDeadline } from "../../../utils/daysLeftTillDeadline/DaysLeftTillDeadline";
import LinearProgressLine from "../../charts/linearProgressLine/LinearProgressLine";

const DocumentationProgressCards = ({ documentationName, documentationDeadline, status }) => {

  const deadline = convertDate(documentationDeadline);

  const SmallAvatar = styled(Avatar)(() => ({
    width: 22,
    height: 22,
  }));

  const avatars = [
    <Avatar alt="Remy Sharp" src="" />,
    <Avatar alt="Travis Howard" src="" />,
    <Avatar alt="Cindy Baker" src="" />,
    <Avatar alt="Agnes Walker" src="" />,
    <Avatar alt="Trevor Henderson" src="" />,
  ];

  return (
    <div
      className="w-[423px] rounded-3xs bg-white shadow-[0px_0px_2px_rgba(0,_0,_0,_0.4)] overflow-hidden shrink-0 flex flex-col items-center justify-start py-[17px] pr-5 pl-3 box-border gap-[18px_0px] max-w-full cursor-pointer text-left text-base text-dimgray-300 font-roboto hover:shadow-[0px_0px_2px_rgba(0,_0,_0,_0.6)]"
    >
      <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0.5 pl-0 box-border max-w-full">
        <div className="flex-1 flex flex-col items-start justify-start gap-[10px_0px] max-w-full">
          <div className="self-stretch flex flex-row items-start justify-start gap-[0px_51px] mq450:flex-wrap mq450:gap-[0px_51px]">
            <div className="flex-1 flex flex-col items-start justify-start gap-[18px_0px] min-w-[146px]">
              <h3 className="m-0 relative text-inherit font-medium font-inherit text-[12px]">
                {documentationName}
              </h3>
              <div className="relative text-2xs text-red-100 whitespace-pre-wrap shrink-0">
                {DaysLeftTillDeadline(deadline)}
              </div>
            </div>
            <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0 text-2xs">
              <div className="relative">Deadline: {deadline}</div>
            </div>
          </div>

          <div className="self-stretch rounded-xl overflow-hidden flex flex-row items-center justify-start">
          <LinearProgressLine deadline = {deadline} />
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[9px] box-border max-w-full text-4xs text-dimgray-100">
        <div className="flex-1 flex flex-row items-center justify-between gap-[20px] max-w-full mq450:flex-wrap">
          <div className="w-[151px] flex flex-row items-center justify-start gap-[0px_6px]">
            <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
              <div className="relative">Assigned To</div>
            </div>
            <div className="h-[21px] flex-1 relative">
              <AvatarGroup max={6}>
                {avatars.map((avatar, index) => (
                  <SmallAvatar alt={`Avatar ${index}`} src="" />
                ))}
              </AvatarGroup>
            </div>
          </div>
          <div className="flex flex-row items-start justify-start gap-[0px_2px] text-2xs text-dimgray-300">
            <div className="relative">Latest Submission:</div>
            <div className="relative text-darkorange">{status}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocumentationProgressCards;