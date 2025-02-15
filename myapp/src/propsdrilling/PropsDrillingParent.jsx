import PropsDrillingChild1 from "./PropsDrillingChild1";
const PropsDrillingParent = () => {
  let data = "Hello";

  return (
    <div>
      <h1>{data} Parent</h1>

      <PropsDrillingChild1 props={data} />
    </div>
  );
};

export default PropsDrillingParent;
