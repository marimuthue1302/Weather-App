import React from "react";
import Input from "@mui/joy/Input";
import Button from "@mui/joy/Button";
import "./Input.css";

const input = () => {
  return (
    <div className="inputBox">
      <div className="inputBox__field">
        <h1>Google Weather App</h1>
        <p>Powered By</p>
        <img
          src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png"
          alt="logo"
        />
        <form>
          <Input placeholder="Enter the city name" />
          <Button variant="solid" type="submit">Search</Button>
        </form>
      </div>
    </div>
  );
};

export default input;
