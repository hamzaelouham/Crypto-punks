import React from "react";
import logo from "../assets/cryptopunk-logo.png";
import searchIcon from "../assets/search.png";
import theme from "../assets/theme-switch.png";

export default function Header() {
  return (
    <header className="header">
      <div className="logocontainer">
        <img src={logo} className="logo" alt="logo" />
      </div>
      <div className="searchbar">
        <div className="searchicon">
          <img src={searchIcon} alt="searchicon" />
        </div>
        <input
          type="text"
          className="searchinput"
          placeholder="collection , items or user..."
        />
      </div>
      <div className="headeritems">
        <p>Create</p>
        <p>Marketpace</p>
        <p>Drops</p>
      </div>
      <div className="actions">
        <div className="themeswitch">
          <img src={theme} alt="theme" />
        </div>
        <button className="gotin"> GOT IN</button>
      </div>
    </header>
  );
}
