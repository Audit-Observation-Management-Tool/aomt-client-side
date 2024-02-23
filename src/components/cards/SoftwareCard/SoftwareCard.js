import React, { useState, useEffect, useContext } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useUserContext } from "../../../contexts/UserContext";
import ViewDocumentationProgress from "../../../pages/supervisor/viewDocumentationProgress/ViewDocumentationProgress";
import axios from 'axios';

const SoftwareCard = ({ title, deadline, onClick }) => {
    return (
        <Card
            className="w-[270px] bg-white shadow-[0px_0px_10px_rgba(0,_0,_0,_0.15)] overflow-hidden shrink-0 flex flex-row items-center justify-center pt-0.5 pb-[5px] pr-[5px] pl-2.5 box-border text-left text-base text-black font-roboto h-40 cursor-pointer mr-2 relative"
            sx={{ borderRadius: '30px', boxShadow: '0px 1px 8px rgba(0, 0, 0, 0.1)' }}
            onClick={onClick}
        >
            <CardContent className="flex-1 flex flex-col items-end justify-start pt-[13px] px-3 pb-1 gap-[32px_0px] relative">
                <div className="self-stretch flex flex-row items-start justify-start py-0 px-[5px]">
                    <div className="flex flex-col items-start justify-start mt-[-50px] pt-[-50px] py- pr-px pl-0 gap-[6px_0px]">
                        <div className="flex flex-row  pt-[-10px]items-center justify-center">
                            <div className="relative">
                                <Typography variant="body1" component="p" className="m-0">
                                    {title}
                                </Typography>
                            </div>
                        </div>
                        <div className="flex flex-row items-center justify-center text-xs text-red">
                            <div className="relative font-medium">
                                {deadline}
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    style={{
                        position: 'absolute',
                        bottom: -40,
                        right: 4,
                        width: '50%', 
                        height: '60%', 
                        backgroundColor: 'red', 

                    }}
                />
            </CardContent>
        </Card>
    );
};

export default SoftwareCard;