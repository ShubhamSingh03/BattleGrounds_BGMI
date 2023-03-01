import "./App.css";

// routes
import { Routes, Route } from "react-router-dom";

// layout
import PageLayout from "./layout/PageLayout";

// components
import BackToTop from "./components/common/BackToTop";

// pages
import HomePage from "./pages/home/HomePage";
import AboutusPage from "./pages/aboutus/AboutUsPage";
import EsportsPage from "./pages/esports/EsportsPage";
import NewsPage from "./pages/news/NewsPage";
import NewsInDetailPage from "./pages/news/newsInDetailPage/NewsInDetailPage";
import StreamerPage from "./pages/streamers/StreamerPage";
import PageNotFound from "./pages/pageNotFound/PageNotFound";

const App = () => {
  return (
    <>
      <Routes>
        <Route element={<PageLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/esports" element={<EsportsPage />} />
          <Route path="/about" element={<AboutusPage />} />
          <Route exact path="/news" element={<NewsPage />} />
          <Route path="/news/:id" element={<NewsInDetailPage />} />
          <Route exact path="/streamers" element={<StreamerPage />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <BackToTop />
    </>
  );
};

export default App;
