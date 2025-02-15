import { useRef } from "react";

const UncontrolledForms = () => {
  let usernameRef = useRef();
  let emailRef = useRef();
  let passwordRef = useRef();

  function formSubmit(e) {
    e.preventDefault();
    console.log("form submitted");
    let userData = {
      username: usernameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };
    console.log(userData);
    
  }

  return (
    <div>
      <h1>Uncontrolled Forms</h1>
      <form onSubmit={formSubmit}>
        <label>Username</label>
        <input type="text" ref={usernameRef} />
        <br />
        <br />
        <label>email</label>
        <input type="text" ref={emailRef} />
        <br />
        <br />
        <label>password</label>
        <input type="text" ref={passwordRef} />
        <br />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
};

export default UncontrolledForms;
