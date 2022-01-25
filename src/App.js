import React from "react";
import Header from "./components/Header";
import Punks from "./components/Punks";
import Banner from "./components/Banner";
import "./App.css";
import { data } from "./data";

function App() {
  const [selectpunk, setSelectedPunk] = React.useState(data[1]);

  return (
    <div className="app">
      <Header />
      <Banner selectpunk={selectpunk} />
      <Punks punks={data} setSelectedPunk={setSelectedPunk} />
    </div>
  );
}

export default App;
