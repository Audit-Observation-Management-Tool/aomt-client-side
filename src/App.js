import { useEffect } from "react";
import { Routes, Route, useNavigationType, useLocation } from "react-router-dom";
import LandingPage from "./pages/landingPage/LandingPage";
import SupervisorTemplate from "./pages/supervisor/template/SupervisorTemplate";
import VersionDetails from "./pages/supervisor/versionDetails/versionDetails"


function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;

      case "/supervisor-dashboard":
        title = "Supervisor Dashboard";
        metadescription = "";
        break;
        
      case "/supervisor-page":
        title = "Dashboard";
        metaDescription = "";
        break;

        case "/version-details":
        title = "Version Details";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>

      <Route path="/" element={<LandingPage/>} />
      <Route path="/supervisor-page" element={<SupervisorTemplate />} />
      <Route path="/version-details" element={<VersionDetails />} />

    </Routes>
  );
}
export default App;
