import { useState } from "react";
import CreateTodo from "./CreateTodo";
import DisplayTodo from "./DisplayTodo";

const TodoWrapper = () => {
  let [text, setText] = useState("");
  let [allTodos, setAllTodos] = useState([{ id: 1, text: "hello world" }]);

  return (
    <div>
      <CreateTodo
        allTodos={allTodos}
        setAllTodos={setAllTodos}
        text={text}
        setText={setText}
      />
      <DisplayTodo allTodos={allTodos} setAllTodos={setAllTodos} setText={setText}/>
    </div>
  );
};

export default TodoWrapper;
