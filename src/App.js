import { useEffect } from "react";
import { Routes, Route, useNavigationType, useLocation } from "react-router-dom";
import LandingPage from "./pages/landingPage/LandingPage";
import SupervisorTemplate from "./pages/supervisor/template/SupervisorTemplate";
import ViewDocumentationProgress from "./pages/supervisor/viewDocumentationProgress/ViewDocumentationProgress";
import MemberTemplate from "./pages/members/template/MemberTemplate";
import MemberDashboard from "./pages/members/dashboard/MemberDashboard";
import Error404 from "./pages/error/Error404";

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

      case "/supervisor-page":
        title = "Dashboard";
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
      <Route path="/member-page" element = {<MemberTemplate />} />
      <Route path="/dashboard" element = {<MemberDashboard />} />
      <Route path="/error" element = {<Error404 />} />
    </Routes>
  );
}
export default App;
