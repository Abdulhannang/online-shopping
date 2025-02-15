import { useContext } from "react";
import { MyContext } from "./Parent";
const Child3 = () => {
    
  let val = useContext(MyContext);
  console.log(val);

  return (
    <div>
      <h1>Child3</h1>
    </div>
  );
};

export default Child3;
