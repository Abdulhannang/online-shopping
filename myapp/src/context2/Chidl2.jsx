import { useContext } from "react";
import { Global } from "./Parent2";
const Chidl2 = () => {
  let val = useContext(Global);
  console.log(val);

  return <div>Child 2 {val.ename}</div>;
};

export default Chidl2;
