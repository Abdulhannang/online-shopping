const Inline = () => {

  let h1Style = {
    color: "red",
    backgroundColor: "black",
  };

  return (
    <div>
      <h1 style={h1Style}>Inline CSS example</h1>
      <div style={{height:"300px",width:"300px",backgroundColor:"yellow"}}>
          container
      </div>
    </div>
  );
};
export default Inline;
