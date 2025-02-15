const DBChild2 = ({ users }) => {
  console.log(users);

  return (
    <div>
      <h1>DBChild2</h1>
      {users.map((singleuser) => {
        let {id,name,email,hobbies,profile: {age,gender,address: { city }}} = singleuser;
        return (
          <section key={id}>
            <h3>Name : {name}</h3>
            <p>Email : {email}</p>
            <p>Age : {age}</p>
            <p>Gender : {gender}</p>
            <p>City : {city}</p>
            <p>Hobbies :</p>
            <ul>
              {hobbies.map((ele,i) => {
                return <li key={i}>{ele}</li>;
              })}
            </ul>
          </section>
        );
      })}
    </div>
  );
};

export default DBChild2;
