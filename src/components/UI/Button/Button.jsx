import PropTypes from "prop-types";

export const Button = ({ onClick, children }) => {
	return <button onClick={onClick}> {children} </button>;
};

Button.propTypes = {
	onClick: PropTypes.func,
	children: PropTypes.any,
};
