import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
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
                                {`Deadline: ${deadline}`}
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    style={{
                        position: 'absolute',
                        bottom: -40,
                        right: 4,
                        width: '50%', // Set the width to control the size of the red division
                        height: '60%', // Set the height to control the size of the red division
                        backgroundColor: 'red', // Change the color as needed

                    }}
                />
            </CardContent>
        </Card>
    );
};

const YourParentComponent = () => {
    const [softwareData, setSoftwareData] = useState([]);

    // Update your frontend fetch request
    useEffect(() => {
        const supervisorIdString = '1'; // Replace with your actual supervisor ID

       fetch(`${process.env.REACT_APP_BASE_URL}supervisor-dashboard`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ supervisorId: supervisorIdString }),
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                console.log("Received data:", data);

                if (Array.isArray(data)) {
                    const formattedSoftwareData = data.map(result => ({
                        softwareID: result.SID,
                        softwareName: result.Name,
                        deadline: new Date(result.Deadline).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
                    }));

                    setSoftwareData(formattedSoftwareData);
                } else {
                    console.error('Error: Data is not an array');
                }
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);




    const handleCardClick = (softwareID) => {
        console.log(`Card Clicked! Software ID: ${softwareID}`);

        // Store softwareID in localStorage
        localStorage.setItem('selectedSoftwareID', softwareID);
    };

    return (
        <div className="flex flex-wrap gap-3">
            {softwareData.map((software, index) => (
                <SoftwareCard
                    key={index}
                    title={software.softwareName}
                    deadline={software.deadline}
                    onClick={() => handleCardClick(software.softwareID)}
                />
            ))}
        </div>
    );
};

export default YourParentComponent;
