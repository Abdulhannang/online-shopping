import { useState } from "react";

const ControlledForm2 = () => {
  let [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  function handleChange(e) {
    let { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  function formSubmit(e) {
    e.preventDefault();
    console.log(formData);
  }

  return (
    <div>
      <h1>ControlledForm2</h1>
      <form onSubmit={formSubmit}>
        <label>email</label>
        <input
          type="text"
          value={formData.email}
          onChange={handleChange}
          name="email"
        />
        <br />
        <label>password</label>
        <input
          type="text"
          value={formData.password}
          onChange={handleChange}
          name="password"
        />
        <br />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default ControlledForm2;
