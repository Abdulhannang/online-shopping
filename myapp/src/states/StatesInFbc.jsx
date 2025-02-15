import { useState } from "react";

const StatesInFbc = () => {
  // useState() is a hook which is used to store the data in the component level. it return an array [undefined,f]
  //   the function is called as setter function which is used to change the value of state dynamically

  let [state, setState] = useState("hello");

  function update() {
    setState("Byeee");
  }

  return (
    <div>
      <h1>StatesInFbc {state}</h1>
      <button onClick={update}>click</button>
    </div>
  );
};
export default StatesInFbc;
