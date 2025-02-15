import { useEffect, useState } from "react";

const LifecycleInFBC = () => {
  let [count, setCount] = useState({ value: 0 });

  useEffect(() => {
    console.log("MOUNTING PHASE");
  }, []);


  useEffect(() => {
    console.log("UPDATING PHASE");
  }, [count]);

  useEffect(() => {
    //clean-up function
    return () => {
      console.log("UNMOUNTING PHASE");
    };
  }, []);

  return (
    <div>
      <h1>Life-Cycle in FBC</h1>
      <h2>Counter {count.value}</h2>
      <button onClick={() => setCount({ value: count.value + 1 })}>
        increment
      </button>
    </div>
  );
};

export default LifecycleInFBC;
