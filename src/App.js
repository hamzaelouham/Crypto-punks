import React from "react";
import Header from "./components/Header";
import Card from "./components/Card";
import "./App.css";
import pandas from "./assets/5.jpg";

function App() {
  return (
    <div className="app">
      <Header />
      <Card id={1} name={"pandas"} price={15} imgurl={pandas} />
    </div>
  );
}

export default App;
