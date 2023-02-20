import { Outlet } from "react-router-dom";

//components
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

/****************************************
 *
 * Page Layout
 *
 ***************************************/

const PageLayout = () => (
  <>
    <Navbar />
    <Outlet />
    <Footer />
  </>
);

export default PageLayout;
