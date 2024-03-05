import { useState } from "react";
import AddSoftwareDatagrid from "../../../components/datagrids/addSoftwareDatagrid/AddSoftwareDatagrid";
import Checkbox from "@mui/material/Checkbox";

const AddSoftware = () => {
  const [frameWithEmptyChildrenChecked, setFrameWithEmptyChildrenChecked] =
    useState(false);
  const [
    userAcceptanceTestingFrameChecked,
    setUserAcceptanceTestingFrameChecked,
  ] = useState(false);
  const [emptyFrameSet1Checked, setEmptyFrameSet1Checked] = useState(false);
  return (
    <div className="w-full relative bg-whitesmoke-100 overflow-hidden flex flex-row items-start justify-start pt-4 pb-[37px] pr-[25px] pl-[20px] box-border tracking-[normal] [row-gap:10px] text-left text-sm text-gray-200 font-roboto mq1050:flex-wrap">
      <div className="w-[405px] flex flex-col items-start justify-start pt-[18px] px-0 pb-0 box-border min-w-[405px] max-w-full mq725:min-w-full mq1050:flex-1">
        <div className="self-stretch flex flex-col items-start justify-start gap-[20px_0px] max-w-full">
          <div className="w-[378px] flex flex-col items-start justify-start gap-[8px_0px] max-w-full">
            <div className="self-stretch h-8 relative font-medium flex items-center shrink-0">
              Software Name
            </div>
            <input
              className="w-[350px] [border:none] [outline:none] bg-white h-[41px] rounded-3xs shadow-[0px_0px_4px_rgba(0,_0,_0,_0.15)] overflow-hidden shrink-0 flex flex-row items-center justify-start pt-2.5 px-2.5 pb-[9px] box-border font-roboto text-xs text-gray-1000 max-w-full"
              placeholder="CoreTech: SaaS Core Banking Platform "
              type="text"
            />
          </div>
          <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[23px] box-border gap-[24px_0px] max-w-full text-smi">
            <div className="w-[378px] h-8 relative text-sm font-medium flex items-center shrink-0 max-w-full">
              Required Documentations
            </div>
            <div className="h-[49px] flex flex-row items-start justify-start pt-0 px-0 pb-1.5 box-border gap-[0px_10px]">
              <input
                className="accent-teal m-0 h-[17px] w-[17px] relative rounded-8xs box-border overflow-hidden shrink-0 border-[1px] border-solid border-gray-600"
                checked={frameWithEmptyChildrenChecked}
                type="checkbox"
                onChange={(event) =>
                  setFrameWithEmptyChildrenChecked(event.target.checked)
                }
              />
              <div className="flex flex-col items-start justify-start gap-[12px_0px]">
                <div className="relative">
                  System Requirement Specification (SRS)
                </div>
                <div className="flex flex-row items-start justify-start py-0 px-0.5 text-xs text-black">
                  <div className="flex flex-row items-center justify-start">
                    <div className="flex flex-col items-start justify-start py-0 px-0">
                      <div className="w-[110px] relative font-light flex items-center">
                        Due 24 April, 2024
                      </div>
                    </div>
                    <img
                      className="h-[9px] w-[9px] relative"
                      loading="lazy"
                      alt=""
                      src="/edit.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[10px_0px] max-w-full">
              <div className="flex flex-row items-start justify-start gap-[0px_10px]">
                <input
                  className="accent-teal m-0 h-[17px] w-[17px] relative box-border overflow-hidden shrink-0 min-h-[17px] border-[1px] border-solid border-gray-600"
                  checked={userAcceptanceTestingFrameChecked}
                  type="checkbox"
                  onChange={(event) =>
                    setUserAcceptanceTestingFrameChecked(event.target.checked)
                  }
                />
                <div className="relative">
                  System Design Specification (SDS)
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start gap-[0px_10px] max-w-full mq450:flex-wrap">
                <div className="flex flex-col items-start justify-start pt-[19px] px-0 pb-0">
                  <div className="flex flex-col items-start justify-start gap-[29px_0px]">
                    <input
                      className="m-0 w-[17px] h-[17px] relative rounded-8xs box-border overflow-hidden shrink-0 border-[1px] border-solid border-gray-600"
                      type="checkbox"
                    />
                    <input
                      className="accent-teal m-0 w-[17px] h-[17px] relative rounded-8xs box-border overflow-hidden shrink-0 border-[1px] border-solid border-gray-600"
                      checked={emptyFrameSet1Checked}
                      type="checkbox"
                      onChange={(event) =>
                        setEmptyFrameSet1Checked(event.target.checked)
                      }
                    />
                  </div>
                </div>
                <div className="flex-1 flex flex-col items-start justify-start gap-[29px_0px] min-w-[246px] max-w-full">
                  <div className="flex flex-row items-center justify-start text-xs text-black">
                    <div className="flex flex-col items-start justify-start py-0 px-0">
                      <div className="w-[110px] relative font-light flex items-center z-[1]">
                        Due 28 April, 2024
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-start max-w-full">
                    <div className="w-[378px] relative flex items-center shrink-0 max-w-full">
                      Business Requirement Document (BRD)
                    </div>
                    <div className="relative z-[1] ml-[-378px]">
                      Business Requirement Document (BRD)
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start gap-[11px_0px]">
                    <div className="relative">
                      User Acceptance Testing (UAT)
                    </div>
                    <div className="w-[110px] flex flex-row items-center justify-start py-0 pr-[15px] pl-0 box-border text-xs text-black">
                      <div className="flex-1 flex flex-row items-center justify-center">
                        <div className="flex-1 flex flex-row items-center justify-center">
                          <div className="flex-1 relative font-light">
                            + Add Deadline
                          </div>
                        </div>
                      </div>
                      <img
                        className="h-[9px] w-[9px] relative z-[1] ml-[-24px]"
                        loading="lazy"
                        alt=""
                        src="/vector1.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-24 rounded-8xs bg-seagreen-200 overflow-hidden flex flex-row items-center justify-center pt-2 px-0 pb-[7px] box-border whitespace-nowrap text-center text-xs text-white">
            <div className="flex-1 relative font-medium">Add Software</div>
          </div>
        </div>
      </div>
      <section className="flex-1 flex flex-row items-start justify-start py-0 px-[-20] box-border min-w-[562px] max-w-full mq725:min-w-full">
        <div className="w-[1000] h-[614px] relative bg-white rounded-8xs overflow-hidden shrink-0 max-w-[104%] z-[1]">
            <AddSoftwareDatagrid />
        </div>
      </section>
    </div>
  );
};

export default AddSoftware;