import React from "react";
import PropTypes from "prop-types";

export default function Input({ type, name, value, onChange }) {
  return <input type={type} value={value} name={name} onChange={onChange} />;
}

Input.defaultProps = {
  name: 'name'
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
