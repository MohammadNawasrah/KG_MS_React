import React from "react";
import "../static/css/widgetStyle/customButton.css";

const Button = ({ text, typeB, onSubmit, className }) => {
  const classNames = `btn ${className}`;
  return (
    <button type={typeB} className={classNames} onSubmit={onSubmit}>
      {text}
    </button>
  );
};
export default Button;
