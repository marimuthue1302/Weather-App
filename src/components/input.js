import React from "react";
import Input from "@mui/joy/Input";
import Button from "@mui/joy/Button";
import "./Input.css";

const input = ({ input, setInput, setCity, findWeather }) => {
  const handleChange = (event) => {
    setInput(event.target.value);
    setCity(event.target.value);
  };
  const handleClick = (event) => {
    event.preventDefault();
    findWeather();
  };

  return (
    <>
      <div className="inputBox">
        <div className="inputBox__field">
          <h1>Google Weather App</h1>
          <p>Powered By</p>
          <img
            src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png"
            alt="logo"
            className="google-logo"
          />
          <form>

            <Input
              placeholder="Enter the city name"
              onChange={handleChange}
              value={input}
              className="text_input"
            />
            <Button variant="solid" type="submit" onClick={handleClick}>
              Search
            </Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default input;
