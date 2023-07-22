import React from "react";
import "../static/css/customButton.css";

const Button = ({ text, typeB, onSubmit, className }) => {
  const classNames = `btns ${className}`;
  return (
    <button type={typeB} className={classNames} onSubmit={onSubmit}>
      {text}
    </button>
  );
};
export default Button;
