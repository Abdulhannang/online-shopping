const PropsDrillingChild2 = (y) => {
  console.log(y);//{props2:"Hello"}

  let {props2} = y
  
  return (
    <div>
      <h1>{props2} PropsDrillingChild2</h1>
    </div>
  )
}

export default PropsDrillingChild2
