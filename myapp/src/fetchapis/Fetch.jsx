import React, { useState } from "react";

const Fetch = () => {
  let [allusers, setAlluser] = useState([]);

  async function getAllUsers() {
    let resp = await fetch("https://api.github.com/users");
    let data = await resp.json();
    console.log(data); // [{},{},{},....]
    setAlluser(data); // setting data to state variable
  }
  return (
    <div>
      <h1>Fetch APIs</h1>
      <button onClick={getAllUsers}>fetch all users</button>

      {allusers.map((ele) => {
        let { id, login, avatar_url, type, site_admin } = ele;
        return (
          <section key={id}>
            <img src={avatar_url} height={200} width={200} />
            <h1>Name : {login}</h1>
            <h2>Type : {type}</h2>
            <h2>Site : {site_admin ? "Admin" : "User"}</h2>
          </section>
        );
      })}
    </div>
  );
};

export default Fetch;

