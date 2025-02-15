import React from "react";
import Hoc from "./Hoc";
const Child2 = (x) => {
    console.log(x);//{data:"Hello child 2"}
    
  return (
    <div>
      <h1>Child 2 {x.data}</h1>
    </div>
  );
};

export default Hoc(Child2);
