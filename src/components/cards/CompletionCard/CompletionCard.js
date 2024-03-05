import React, { useState, useEffect } from "react";
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

const CompletionCard = () => {
    const [documentData, setDocumentData] = useState([]);
    const software = JSON.parse(localStorage.getItem('software'));
    console.log("re: ",software.softwareID);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const apiUrl = process.env.REACT_APP_BASE_URL;
                const response = await axios.get(`${apiUrl}documents/arcprogress/${software.softwareID}`);
                const resultData = response.data;

            

                setDocumentData(resultData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="pb-10">
           
            {documentData.map((document) => (
                <div key={document.Document_ID} className="my-0.025 p-0.05 border rounded flex items-center">
                <p className="text-xs font-semibold flex-1">{document.Document_Type}</p>
                {document.Status === 'Accepted' ? (
                  <p className="text-xs text-green-600">
                   ' ' <FontAwesomeIcon icon={faCheckCircle} /> Accepted
                  </p>
                ) : (
                  <p className="text-xs text-red-600">
                    <FontAwesomeIcon icon={faTimesCircle} /> Pending
                  </p>
                )}
              </div>
              
            ))}
        </div>
    );
};

export default CompletionCard;
