import { useState } from "react";
import ProductItems from "./components/product-item";
import Button from "./components/button";

const initFlag = true;



function renderProductListBlock(getFlag, productData) {
  return getFlag ? (
    <ul>
      {productData.map((item, index) => {
        return <ProductItems singleProduct={item} keyId={index} />;
      })}
    </ul>
  ) : (
    <h1 className="text-red-500 border-2 border-red-500 mt-4 py-4">Nothing found </h1>
  );
}

function ProductList({ productData }) {

  const [flag, setFlag] = useState(initFlag);
  // const { productData } = props;
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Product List</h1>
      <Button onClick={() => setFlag(!flag)} label={"Toggle Cards"} className="bg-amber-400 text-black mt-3" />
      {/* <button onClick={() => setFlag(!flag)}>Toggle Flag</button> */}
      {renderProductListBlock(flag, productData)}

      {/* <ProductItems /> */}
    </div>
  );
}

export default ProductList;
