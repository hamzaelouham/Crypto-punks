import React from "react";
import weth from "../assets/weth.png";

export default function Card({ id, name, imgurl, price }) {
  return (
    <div className="collection">
      <img src={imgurl} alt={name} />
      <div className="details">
        <div className="name">
          {name}
          <h5 className="id">.#{id} </h5>
        </div>
        <div className="price">
          <img src={weth} alt="eth" className="etherume" />
          <h4 className="ethprice">{price}</h4>
        </div>
      </div>
    </div>
  );
}
