import Button from '@mui/joy/Button';
import React from "react";
import "./result.css";

const Result = ({ temp, desc, icon, setTemp }) => {
  return (
    <div className="result">
      <div className="result_box">
        <h1>Temp: {temp} °C</h1>
        <p>{desc}</p>
        <img src={icon} alt="logo" />
        <br />
        <Button
          varient="Solid"
          color='info'
          onClick={() => {
            setTemp("");
          }}
        >
          Back
        </Button>
      </div>
    </div>
  );
};

export default Result;
