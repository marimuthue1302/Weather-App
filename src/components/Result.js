import React, { useState, useEffect } from "react";
import Button from "@mui/joy/Button";
import "./result.css";
// import { IoMdOutlineLocation } from "react-icons/io5";

const Result = ({ city, temp, desc, icon, setTemp }) => {
  const [date, setDate] = useState(new Date());

  let hours = date.getHours();
  const minutes = date.getMinutes();

  let period = "AM";
  if (hours >= 12) {
    period = "PM";
    hours -= 12;
  }

  const timeString =
    hours.toString().padStart(2, "0") +
    ":" +
    minutes.toString().padStart(2, "0") +
    " " +
    period;

    

  useEffect(() => {
    var timer = setInterval(() => setDate(new Date()), 1000);
    return function cleanup() {
      clearInterval(timer);
    };
  });

  return (
    <div className="result">
      <div className="result_box">
        <p className="title">CURRENT WEATHER</p>
        <div className="time-city">
          <div className="time">{timeString}</div>
          <div className="location">
            <svg
              width="46"
              height="46"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 2.25c-3.727 0-6.75 2.878-6.75 6.422 0 4.078 4.5 10.54 6.152 12.773a.739.739 0 0 0 1.196 0c1.652-2.231 6.152-8.692 6.152-12.773 0-3.544-3.023-6.422-6.75-6.422Z"></path>
              <path d="M12 11.25a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Z"></path>
            </svg>
            <h5>{city.slice(0,1).toUpperCase() + city.slice(1, city.length)}</h5>
          </div>
        </div>
        <div className="temp">
        <img src={icon} alt="logo" />
        <h1>{temp} °C</h1>
        </div>
        <p>{desc}</p>
        
        <br />
        <div className="back">
        <Button
          varient="Solid"
          color="info"
          onClick={() => {
            setTemp("");
          }}
        >
          Back
        </Button>
        </div>
      
      </div>
    </div>
  );
};

export default Result;
