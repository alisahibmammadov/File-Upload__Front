import { Outlet } from "react-router-dom";
import Footer from "../layout/Footer";
import Navbar from "../layout/Navbar";
import PropTypes from "prop-types";

function Layout({ selectedLink, setSelectedLink }) {
  return (
    <>
      <Navbar selectedLink={selectedLink} setSelectedLink={setSelectedLink}/>
      <Outlet />
      <Footer selectedLink={selectedLink} setSelectedLink={setSelectedLink}/>
    </>
  );
}

export default Layout;
Layout.propTypes = {
  selectedLink: PropTypes.number.isRequired,
  setSelectedLink: PropTypes.func.isRequired,
};
