import { useState } from "react";

const CartBtn = () => {
  let [btnText, setBtnText] = useState("Add to cart");

  let updatebtn = () => setBtnText("Go to cart");

  return <button onClick={updatebtn}>{btnText}</button>;
};
export default CartBtn;
