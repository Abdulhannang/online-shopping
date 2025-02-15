import React from "react";

import Context from "./Context";
import Child1 from "./Child1";

const Parent3 = () => {
  return (
    <div>
      Parent 3
      <Context>
        <Child1 />
      </Context>
    </div>
  );
};

export default Parent3;
