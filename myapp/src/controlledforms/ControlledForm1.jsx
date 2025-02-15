import { useState } from "react";

const ControlledForm1 = () => {
  let [username, setUsername] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  function handleUsername(e) {
    console.log(e);
    
    setUsername(e.target.value);
  }

  function handleEmail(e) {
    setEmail(e.target.value);
  }

  function handlePassword(e) {
    setPassword(e.target.value);
  }

  function formSubmit(e) {
    e.preventDefault();
    console.log({ username, email, password });
  }

  return (
    <div>
      <h1>Controlled Form 1</h1>
      <form onSubmit={formSubmit}>
        <label>username</label>
        <input type="text" value={username}  onChange={handleUsername} />
        <br />
        <br />
        <label>email</label>
        <input type="text" value={email} onChange={handleEmail} />
        <br />
        <br />
        <label>password</label>
        <input type="text" value={password} onChange={handlePassword} />
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
export default ControlledForm1;
