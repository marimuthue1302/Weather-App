import React, { useState } from "react";
import "./App.css";
import Input from "./components/input";
import axios from "axios";

function App() {
  const [input, setInput] = useState("");
  const [temp, setTemp] = useState("");
  const [description, setDescription] = useState("");
  const [icon, setIcon] = useState("");

  const findWeather = async () => {
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
  };
  return (
    <div className="app">
      <Input input={input} setInput={setInput} findWeather={findWeather} />
    </div>
  );
}

export default App;
