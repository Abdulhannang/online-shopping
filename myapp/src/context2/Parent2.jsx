import { createContext } from "react";
import Child1 from "./Child1";

export let Global = createContext();

const Parent2 = () => {
  let user = { id: 1, ename: "John" };

  return (
    <div>
      Parent
      <Global.Provider value={user}>
        <Child1 />
      </Global.Provider>
    </div>
  );
};

export default Parent2;
