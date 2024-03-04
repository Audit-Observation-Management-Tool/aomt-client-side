import React, { useState, useEffect } from "react";
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

const CompletionCard = () => {
    const [documentData, setDocumentData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const apiUrl = process.env.REACT_APP_BASE_URL;
                const response = await axios.get(`${apiUrl}documents/arcprogress`);
                const resultData = response.data;

                setDocumentData(resultData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="mt-0.05">
            <p className="text-sm font-semibold text-center text-gray">Required Documents</p>
            {documentData.map((document) => (
                <div key={document.Document_ID} className="my-0.025 p-0.05 border rounded bg-gray-100 flex items-center">
                <p className="text-xs font-semibold flex-1">{document.Document_Type}</p>
                {document.Status === 'Accepted' ? (
                  <p className="text-xs text-green-600">
                    <FontAwesomeIcon icon={faCheckCircle} /> Accepted
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
