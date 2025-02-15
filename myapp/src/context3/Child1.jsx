import { useContext } from "react";
import { GlobalData } from "./Context";
const Child1 = () => {
  let val = useContext(GlobalData);
  console.log(val);

  return <div>Child 1</div>;
};

export default Child1;
