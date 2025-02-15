import { useEffect, useState } from "react";

const SideEffects = () => {
    
  let [apiDATA, setApiData] = useState([]);

  async function callAPI() {
    let resp = await fetch("https://api.github.com/users");
    let data = await resp.json();
    console.log(data); //[{},{},.....]
    setApiData(data);
  }

  useEffect(() => {
    callAPI();
  }, []);

  return (
    <div>
      <h1>API call using useEffect</h1>
      {apiDATA.map((ele) => {
        return (
          <section key={ele.id}>
            <h3>{ele.login}</h3>
            <img src={ele.avatar_url} height={100} width={100} />
          </section>
        );
      })}
    </div>
  );
};

export default SideEffects;
