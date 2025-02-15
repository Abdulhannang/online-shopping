import { useReducer } from "react";

let initialState = 0;

function reducerFunc(state, action) {
  console.log(state, action);

  switch (action.payload) {
    case "increment":
      return state + 1;
  }
}

const Reducer = () => {
  let [state, dispatch] = useReducer(reducerFunc, initialState);

  return (
    <div>
      <h1>Learn useReducer</h1>
      <h2>Counter : {state}</h2>
      <button onClick={() => dispatch({payload:"increment"})}>Increment</button>
    </div>
  );
};

export default Reducer;
