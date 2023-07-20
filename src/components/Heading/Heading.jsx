import React from "react";
import "./Heading.css";

const Heading = ({ text, align, background, color, fontSize }) => (
  <h1
    style={{
      textAlign: align,
      backgroundColor: background,
      color: color,
      fontSize: fontSize,
    }}
    className='Heading'>
    {text}
  </h1>
);

export default Heading;
