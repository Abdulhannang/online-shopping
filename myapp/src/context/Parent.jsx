import Child1 from "./Child1";
import Child2 from "./Child2";
import Child3 from "./Child3";
import Child4 from "./Child4";
import { createContext } from "react";

// ! STEP-1
export let MyContext = createContext();

const Parent = () => {
  let data = "Hello World";

  return (
    <div>
      <Child1 />
      <Child2 />
      <Child4/>

     {/* STEP-2 */}
      <MyContext.Provider value={data}>
        <Child3 />
      </MyContext.Provider>
    </div>
  );
};

export default Parent;
