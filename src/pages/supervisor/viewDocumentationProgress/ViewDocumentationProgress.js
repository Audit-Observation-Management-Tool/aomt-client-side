import ProgressPieChart from "../../../components/charts/progressPieChart/ProgressPieChart";
import BarChart from "../../../components/charts/barCharts/BarChart";
import CompletionCard from "../../../components/cards/CompletionCard/CompletionCard";
import DocumentationProgressCards from "../../../components/cards/ProgressCards/DocumentationProgressCards";
import TeamMembersDatagrid from "../../../components/datagrids/teamMembersDatagrid.js/TeamMembersDatagrid";
import axios from 'axios';
import { DataGrid, GridLoadingOverlay } from '@mui/x-data-grid';
import Loader from "../../../components/loaders/Loader";
import { convertDate } from "../../../utils/dateConverter/ConvertDate";
import { useState, useEffect } from "react";

const ViewDocumentationProgress = ({ onSelectionClick }) => {
  const [cardCount, setCardCount] = useState(0);
  const [height, setHeight] = useState(400);
  const [loading, setLoading] = useState(true);
  const [rows, setRows] = useState([]);
  const [data, setData] = useState([]);
  const software = JSON.parse(localStorage.getItem('software'));
  const [documentData, setDocumentData] = useState([]);

  const columns = [
    { field: 'id', headerName: 'Member ID', width: 180, align: 'center', headerAlign: 'center' },
    {
      field: 'name',
      headerName: 'Name',
      width: 220,
      headerAlign: 'center',
      renderCell: (params) => (
        <div style={{ display: 'flex', }}>
          {params.row.ProfilePicture && (
            <Avatar src={params.row.ProfilePicture} alt={`Profile Pic`} className="rounded-xs" />
          )}
          {params.value}
        </div>
      ),
    },
    { field: 'email', headerName: 'Email', width: 210, align: 'center', headerAlign: 'center' },
    { field: 'contact', headerName: 'Contact', width: 200, align: 'center', headerAlign: 'center' },
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiUrl = process.env.REACT_APP_BASE_URL;
        const response = await axios.get(
          `${apiUrl}documents/fetch-document-progress/${software.softwareID}`
        );

        if (Array.isArray(response.data) && response.data.length > 0) {
          const extractedData = response.data.map(([result]) => ({
            Type: result?.[0]?.Type,
            Status: result?.[0]?.Status,
            Deadline: result?.[0]?.Deadline,
            Team_Member_ID: result?.map(({ Team_Members }) => Team_Members) || [],
            Software_ID: result?.[0]?.Software_ID,
            Software_Name: result?.[0]?.Software_name,
            Document_ID: result?.[0]?.Document_ID,
          })).filter(
            (item) =>
              item.Type !== null &&
              item.Status !== null &&
              item.Deadline !== null &&
              item.Team_Member_ID.length > 0
          );

          setData(extractedData);
          setCardCount(extractedData.length);
        } else {
          console.error('Empty or invalid response data:', response.data);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    const fetchMemberData = async () => {
      try {
        const apiUrl = process.env.REACT_APP_BASE_URL;
        const response = await axios.post(`${apiUrl}documents/fetch-member-list`, {
          softwareID: software.softwareID,
        });

        const data = response.data;

        const rowsWithIds = data.map((row) => ({
          id: row.Member_ID,
          name: (
            <div style={{ display: 'flex', }}>
              {row.ProfilePicture && (
                <img
                  src={row.ProfilePicture}
                  alt={`Profile Pic`}
                  className="mr-2 w-10 h-10 rounded-full"
                />
              )}
              {row.Name || ''}
            </div>
          ),
          email: row.Email,
          contact: row.Phone,
        }));

        setRows(rowsWithIds);
      } catch (error) {
        console.error('Error fetching member data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    fetchMemberData();
  }, [software.softwareID]);

  useEffect(() => {
    if (cardCount === 0) {
      setHeight(550);
    } else if (cardCount <= 2) {
      setHeight(390);
    } else if (cardCount > 2) {
      setHeight(260);
    }
  }, [cardCount]);

  const handleClick = (option) => {
    onSelectionClick(option);
  };

  const handleCardClick = (data) => {
    console.log('item: ', data);
    localStorage.setItem('cardData', JSON.stringify(data));
  };

  return (
    <div className="w-[1337px] overflow-hidden flex flex-col items-center justify-start pt-3 pb-[61px] pr-[22px] pl-[25px] box-border tracking-[normal]">

      {
        loading &&
        (
          <Loader />
        )

      }

      {
        !loading &&
        (
          <>
            <header className="self-stretch flex flex-row items-start justify-start text-left text-[20px] text-dimgray-200 font-roboto">
              <h2 className="m-0 h-[41px] w-[213px] relative text-inherit font-bold font-inherit flex items-center shrink-0 whitespace-nowrap">
                <span className="hover:[text-decoration:underline] cursor-pointer"
                  onClick={() => handleClick("dashboard")}
                >Softwares </span>/{software.softwareName}
              </h2>
            </header>


            <section className="self-stretch flex flex-row items-start justify-start gap-[0px_20px] max-w-full text-left text-xs text-dimgray-400 font-roboto mq1050:flex-wrap">
              <div className="w-[385px] flex flex-col items-start justify-start pt-2.5 px-0 pb-0 box-border min-w-[385px] max-w-full mq725:min-w-full mq1050:flex-1 ">
                <div className="self-stretch flex flex-col items-start justify-start gap-[19px_0px] max-w-full">
                  <div className="self-stretch rounded-6xs bg-white shadow-[0px_0px_4px_rgba(0,_0,_0,_0.15)] flex flex-row items-end justify-start pt-[26px] pb-[31px] pr-[37px] pl-[27px] gap-[0px_16px] mq450:flex-wrap">

                    <ProgressPieChart />

                    <CompletionCard documentData={documentData} />
                  </div>
                  <div className="self-stretch bg-red overflow-hidden flex flex-row items-center justify-top box-border max-w-full">
                    <BarChart />
                  </div>
                </div>
              </div>
              <div className="flex-1 flex flex-col items-center justify-start gap-[15px_0px] min-w-[575px] max-w-full mq725:min-w-full">
                <div className="self-stretch overflow-hidden flex flex-row items-start justify-start pt-[11px] px-3 pb-[5px] box-border max-w-full">
                  <div onClick={() => handleClick("viewVersionDetails")} className="flex flex-wrap gap-2">
                    {data.map((item, index) => (
                      <div key={index}>
                        <DocumentationProgressCards
                          documentationName={item.Type}
                          documentationDeadline={item.Deadline}
                          status={item.Status}
                          onClick={() => handleCardClick(item)}
                        />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="self-stretch h-full flex flex-row items-start justify-start py-0 pr-2 pl-4 box-border max-w-full">
                  <div className="self-stretch flex-1 relative overflow-hidden max-w-full h-[800px]">
                    <DataGrid
                      rows={rows}
                      columns={columns}
                      pageSize={5}
                      rowsPerPageOptions={[5, 5, 20]}
                      getRowHeight={() => 'auto'}
                      sx={{
                        '&.MuiDataGrid-root--densityCompact .MuiDataGrid-cell': { py: '8px' },
                        '&.MuiDataGrid-root--densityStandard .MuiDataGrid-cell': { py: '15px' },
                        '&.MuiDataGrid-root--densityComfortable .MuiDataGrid-cell': { py: '30px' },
                      }}
                    />
                  </div>
                </div>
              </div>
            </section>
          </>
        )
      }


    </div>
  );
};

export default ViewDocumentationProgress;