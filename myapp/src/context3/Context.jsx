import { createContext } from "react";
export let GlobalData = createContext();

const Context = ({children}) => {
//   console.log(x); //{children:{$$typeof:.....}}

  let str = "Hello World";

  return (
    <GlobalData.Provider value={str}>
      {/* <Child1 /> */}

      {children}
    </GlobalData.Provider>
  );
};

export default Context;
