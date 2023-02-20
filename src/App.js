import "./App.css";

// routes
import { Routes, Route } from "react-router-dom";

//layout
import PageLayout from "./layout/PageLayout";

//pages
import HomePage from "./pages/home/HomePage";

const App = () => {
  return (
    <>
      <Routes>
        <Route element={<PageLayout />}>
          <Route index element={<HomePage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
