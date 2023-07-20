import React from "react";
import "./Box.css";

const Box = ({ Heading, Number }) => {
  return (
    <div className='Box'>
      <p>{Heading}</p>
      <h4>{Number}</h4>
    </div>
  );
};

export default Box;
