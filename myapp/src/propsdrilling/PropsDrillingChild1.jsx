import PropsDrillingChild2 from "./PropsDrillingChild2";
const PropsDrillingChild1 = (x) => {
  console.log(x);//{props:"Hello"}

  let {props} = x
  
  return (
    <div>
      <h1>PropsDrillingChild1</h1>

      <PropsDrillingChild2 props2={props}/>
    </div>
  );
};

export default PropsDrillingChild1;
