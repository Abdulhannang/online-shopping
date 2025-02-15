import { useState } from "react";

const CreateTodo = ({ setAllTodos, allTodos, text, setText }) => {
  let formSubmit = (e) => {
    e.preventDefault();
    if (text.trim() !== "") {
      let newTodo = {
        id: Date.now(),
        text: text.trim(),
      };
      setAllTodos([...allTodos, newTodo]);
      setText(""); // clearing input field
    } else {
      alert("please enter todo");
    }
  };
  //   console.log(allTodos);
  return (
    <div>
      <form onSubmit={formSubmit}>
        <input
          type="text"
          placeholder="Enter todo.."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit">add</button>
      </form>
    </div>
  );
};

export default CreateTodo;
