import React, { useEffect } from "react";

export default function Banner({ selectpunk }) {
  useEffect(() => {}, [selectpunk]);

  return (
    <div className="main">
      <div className="container">
        <div className="punk">
          <img src={selectpunk.img} alt={selectpunk.name} />
        </div>
        <div className="punkdetails">
          <h1>{selectpunk.name}</h1>
        </div>
        <div className="more">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
