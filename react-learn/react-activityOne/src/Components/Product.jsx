import React from "react";
import Price from "./Price";

const Product = ({ title, idx }) => {
  let oldPrice = ["13,499", "15,399", "10,999", "16,299"];
  let newPrice = ["8,499", "10,399", "7,999", "9,299"];
  let Description = [
    ["8,000 DPI","Programmable buttons"],
    ["intuitive surface","good quality"],
    ["designed for moto","smooth"],
    ["Wireless","easy and smooth"],
  ];
  return (
    <>
      <div className="Product">
        <h3>{title}</h3>
        <p>{Description[idx][0]}</p>
        <p>{Description[idx][1]}</p>
        <Price oldPrice={oldPrice[idx]} newPrice={newPrice[idx]} />
      </div>
    </>
  );
};

export default Product;
