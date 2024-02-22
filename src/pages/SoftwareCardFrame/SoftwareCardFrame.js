import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, InputAdornment, IconButton, Button } from "@mui/material";
import SoftwareCard from "../SoftwareCard/SoftwareCard";

const SoftwareCardFrame = () => {
  return (
    <div className="w-[1275px] h-[604px] bg-grayy overflow-hidden flex flex-row items-start justify-start pt-[52px] px-[59px] pb-[410px] box-border">
      <SoftwareCard />
    </div>
  );
};

export default SoftwareCardFrame;
