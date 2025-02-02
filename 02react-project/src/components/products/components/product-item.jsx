import { useState } from "react";
import Button from "./button";

function addToCardAlert(singleProduct) {
  alert(`${singleProduct} added to cart!`);
}

function ProductItems({ singleProduct, keyId }) {
  let [counter, setCounter] = useState(0);
  return (
    <li key={keyId} className="border-2 border-amber-400 my-2 py-4">
      <p className="mb-5">{singleProduct}</p>
      <div>
        <Button
          onClick={() => {
            if (counter > 0) setCounter(counter - 1)
          }}
          className="bg-red-900 text-white p-1"
          label={"-"}
        />
        <span className="px-4">{counter}</span>
        <Button
          onClick={() => {
            setCounter(counter + 1);
          }}
          className="bg-green-900 text-white p-1"
          label={"+"}
        />
      </div>
      <Button
        onClick={() => {
          addToCardAlert(singleProduct);
        }}
        label={"Add to Cart"}
        key={keyId}
        className="bg-indigo-500 mt-3"
      />
    </li>
  );
}

export default ProductItems;
