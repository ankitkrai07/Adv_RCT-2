import React from "react";
import PropTypes from "prop-types";

export const Button = ({ children, size, color }) => {
  return <button className={`${size} ${color}`}>{children}</button>;
};

Button.propTypes = {
  color: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
};
