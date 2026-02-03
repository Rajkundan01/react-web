import React from "react";
import Product from "./Product";

const ProductTab = () => {

  return (
    <>
      <div className= "ProductTab">
        <Product title="Tech Max Master" idx={0} />
        <Product title="window laptop" idx={1} />
        <Product title="moto pencil" idx={2} />
        <Product title="sony soundBar" idx={3} />
      </div>
    </>
  );
};

export default ProductTab;
