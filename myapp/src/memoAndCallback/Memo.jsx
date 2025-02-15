import React, {  useMemo, useCallback, Fragment } from "react";
import Child from "./Child";

const Memo = () => {
  let [add, setAdd] = React.useState(0);
  let [minus, setMinus] = useState(100);

  //! it returns memorized value
  let memorizedVal = useMemo(() => {
    console.log("multiply func");
    return add * 10;
  }, [add]);

  //   function multiply() {
  //     console.log("multiply func");
  //     return add * 10;
  //   }

  //! it returns memorized function
  let memorizedFunc = useCallback(() => {
    console.log("i am data func");
  }, []);
  //   function data() {
  //     console.log("i am data func");
  //   }

  return (
   <Fragment key="">
   <h1>Hello</h1>
   <h2>Hii</h2>
   </Fragment>
  );
};

export default Memo;
