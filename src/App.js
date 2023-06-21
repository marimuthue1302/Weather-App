import React, { useState } from "react";
import "./App.css";
import Input from "./components/input";

function App() {
  const [input, setInput] = useState();
  return (
    <div className="app">
      <Input />
    </div>
  );
}

export default App;
