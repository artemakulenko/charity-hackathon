import PropTypes from "prop-types";
import styles from "./Button.module.css";

export const Button = ({ onClick, children, style, value }) => {
  return (
    <button className={styles[style]} onClick={onClick} value={value}>
      {children}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.any,
};
