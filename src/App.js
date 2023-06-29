import React, { useState } from "react";
import "./App.css";
import Input from "./components/input";
import axios from "axios";
import Result from "./components/Result";

function App() {
  const [input, setInput] = useState("");
  const [city, setCity] = useState("");
  const [temp, setTemp] = useState("");
  const [description, setDescription] = useState("");
  const [icon, setIcon] = useState("");

  const findWeather = async () => {
    try {
      const apikey = "e87ebd97ab8692cfd5691edbbf9bf3e2";
      const unit = "metric";
      const url =
        "https://api.openweathermap.org/data/2.5/weather?q=" +
        input +
        "&appid=" +
        apikey +
        "&units=" +
        unit;
      const response = await axios.get(url);
      const temp = await response.data.main.temp;
      const description = await response.data.weather[0].description;
      const icon = await response.data.weather[0].icon;
      const imageURL = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
      setTemp(temp);
      setDescription(description);
      setIcon(imageURL);
      setInput("");
    } catch (error) {
      if (error.response && error.response.status === 404) {
        alert("Enter the valid city name");
      } else if (input === "") {
        alert("The city name can't be empty!");
      }
    }
  };
  return (
    <div className="app">
      {temp === "" ? (
        <Input
          setInput={setInput}
          setCity={setCity}
          findWeather={findWeather}
        />
      ) : (
        <Result
          city={city}
          input={input}
          temp={temp}
          desc={description}
          icon={icon}
          setTemp={setTemp}
        />
      )}
    </div>
  );
}

export default App;
