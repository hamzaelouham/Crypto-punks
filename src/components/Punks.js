import React from "react";
import Card from "./Card";

export default function Punks({ punks }) {
  return (
    <div className="punks">
      {punks.map((punk, idx) => (
        <div key={idx}>
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
