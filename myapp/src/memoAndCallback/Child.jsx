import React from "react";

const Child = (x) => {
  console.log("I am Child");
  x.prop();
  return (
    <div>
      <mark>Child</mark>
    </div>
  );
};

export default React.memo(Child);
