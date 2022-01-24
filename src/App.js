import React from "react";
import Header from "./components/Header";
import Punks from "./components/Punks";
import "./App.css";
import { data } from "./data";

function App() {
  return (
    <div className="app">
      <Header />
      <Punks punks={data} />
    </div>
  );
}

export default App;
