import React from "react";
import Card from "./Card";

export default function Punks({ punks, setSelectedPunk }) {
  return (
    <div className="punks">
      {punks.map((punk, idx) => (
        <div onClick={() => setSelectedPunk(punk)} key={idx}>
          <Card
            id={punk.id}
            name={punk.name}
            imgurl={punk.img}
            price={punk.price}
          />
        </div>
      ))}
    </div>
  );
}
