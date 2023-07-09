import React from 'react';
import "../static/css/customButton.css";

const Button = ({ text, onSubmit, className }) => {
    const classNames = `btn ${className}`
    return (
        <button className={classNames} onSubmit={onSubmit}>{text}</button>
    );
};
export default Button;