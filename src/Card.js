import React, { forwardRef } from "react";
import { Grid, Paper , Box } from "@material-ui/core";

import "./card.css";
const Card = forwardRef(({ title, name, id, color, className, htmlId }, ref) => {
  return (
    <div id={htmlId} ref={ref} className={`card-layout inline-block ${className}`} style={{ outline: `2px solid ${color}` }}>
      <div className="card-id" style={{ outline: `2px solid ${color}` }}>
        <p className="m-0 "> {id} رمز </p>
      </div>
      <div className="card-title-custom" style={{ background: color }}>
        <p className="m-0 py-1">{title}</p>
      </div>
      <div className="card-title-value">
        <p className="m-0 py-1">{name}</p>
      </div>
    </div>
  );
});

export default Card;
