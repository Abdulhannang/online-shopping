const Hoc = (WrappedComp) => {
  let data = "hello Child 2";

  return () => {
    return <WrappedComp data={data} />;
  };
};
export default Hoc;
