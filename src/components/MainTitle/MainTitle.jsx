// import css from "./MainTitle.module.css";
import PropTypes from "prop-types";

const MainTitle = ({ children }) => {
  return (
    <>
      <h1>{children}</h1>
    </>
  );
};

MainTitle.propTypes = {
  children: PropTypes.node,
};

export default MainTitle;
