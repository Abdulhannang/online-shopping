const PropsChild =(x)  => {
  console.log(x); //{props: 'Hello world', user: {…}}

  let {str,user: { ename }} = x; // destructuring props
  console.log(str);
  console.log(ename);

  return (
    <div>
      <h1>PropsChild </h1>
      <h1>
        {str} {ename}
      </h1>
    </div>
  );
};

export default PropsChild;
