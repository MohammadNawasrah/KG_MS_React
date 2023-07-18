import React from 'react';

const Card = ({text , className , onSubmit}) => {
    const classNames = `btn ${className}`
    return (
        <button className={classNames} onSubmit={onSubmit}>{text}</button>
    );
};
export default Card;