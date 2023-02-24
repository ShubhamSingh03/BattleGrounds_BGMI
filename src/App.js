import "./App.css";

// routes
import { Routes, Route } from "react-router-dom";

//layout
import PageLayout from "./layout/PageLayout";

//pages
import HomePage from "./pages/home/HomePage";
import AboutusPage from "./pages/aboutus/AboutUsPage";
import EsportsPage from "./pages/esports/EsportsPage";

const App = () => {
  return (
    <>
      <Routes>
        <Route element={<PageLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/esports" element={<EsportsPage />} />
          <Route path="/about" element={<AboutusPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
