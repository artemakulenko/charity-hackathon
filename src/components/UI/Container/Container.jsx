import styles from "./Container.module.css";
import PropTypes from "prop-types";

function Container({ children }) {
	return <div className={styles.container}>{children}</div>;
}

Container.propTypes = {
	children: PropTypes.any,
};

export default Container;
