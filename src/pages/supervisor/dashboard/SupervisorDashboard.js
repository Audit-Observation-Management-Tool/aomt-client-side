import SoftwareCards from "../../../components/cards/softwareCards/SoftwareCards";

const SupervisorDashboard = () => {
  return (
    <div className="flex flex-row flex-wrap items-start justify-start">
      <SoftwareCards
        softwareName={"Hi"}
        softwareDeadline={"Monday"}
       />
    </div>
  );
};

export default SupervisorDashboard;