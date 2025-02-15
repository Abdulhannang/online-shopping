import Fbc from "./typesOfComponents/Fbc";
import Cbc from "./typesOfComponents/Cbc";
import StatesInFbc from "./states/StatesInFbc";
import CounterInFbc from "./states/CounterInFbc";
import CartBtn from "./states/CartBtn";
import PropsParent from "./props/PropsParent";
import PropsDrillingParent from "./propsdrilling/PropsDrillingParent";
import Database from "./propsdrilling/Database";
import Inline from "./reactCSS/Inline";
import MyntraNav from "./reactCSS/MyntraNav";
import ControlledForm1 from "./controlledforms/ControlledForm1";
import ControlledForm2 from "./controlledforms/ControlledForm2";
import TodoWrapper from "./todoapp/TodoWrapper";
import UncontrolledForms from "./uncontrolledforms/UncontrolledForms";
import Fetch from "./fetchapis/Fetch";
import LifecycleInCBC from "./lifecycle/LifecycleInCBC";
import { useState } from "react";
import LifecycleInFBC from "./lifecycle/LifecycleInFBC";
import SideEffects from "./sideeffects/SideEffects";
import Parent from "./context/Parent";
import Parent2 from "./context2/Parent2";
import Parent3 from "./context3/Parent3";
import HocParent from "./hoc/Parent";
import Reducer from "./reducer/Reducer";
import Memo from "./memoAndCallback/Memo";
const App = () => {
  let [toggle, setToggle] = useState(false);

  return (
    <div>
      {/*  <Fbc />
      <Cbc /> */}
      {/* <StatesInFbc /> */}

      {/* <CounterInFbc /> */}

      {/* <CartBtn /> */}

      {/*  <PropsParent/> */}

      {/* <PropsDrillingParent /> */}

      {/* <Database /> */}

      {/* <Inline /> */}

      {/* <MyntraNav/> */}

     {/* <ControlledForm2 />  */}
      {/*  <ControlledForm2 /> */}

      {/* <TodoWrapper /> */}

      {/* <UncontrolledForms /> */}

      {/* <Fetch /> */}

      {/*  <button onClick={() => setToggle(!toggle)}>click</button>
      {toggle ? <LifecycleInCBC /> : "No Component"} */}

      {/* <button onClick={() => setToggle(!toggle)}>click</button>
      {toggle ? <LifecycleInFBC/> : "No Component"} */}

      {/* <SideEffects/> */}

      <Parent/>

      {/* <Parent2 /> */}

      {/* <Parent3 /> */}

      {/* <HocParent /> */}

      {/* <Reducer/> */}

      {/* <Memo /> */}
    </div>
  );
};

export default App;
