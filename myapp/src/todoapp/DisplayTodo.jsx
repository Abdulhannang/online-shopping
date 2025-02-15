const DisplayTodo = ({ allTodos, setAllTodos, setText }) => {
  function deleteTodo(id) {
    let filtredTodos = allTodos.filter((ele) => {
      return ele.id !== id;
    });
    setAllTodos(filtredTodos);
  }

  function editTodo(id) {
    console.log(id, "edit it");

    let filtredTodos = allTodos.filter((ele) => {
      return ele.id !== id;
    });
    setAllTodos(filtredTodos);

    let val = allTodos.find((ele) => {
      return ele.id === id;
    });
    console.log(val);
    setText(val.text);
  }

  return (
    <div>
      <ul>
        {allTodos.map((ele) => {
          return (
            <li key={ele.id}>
              {ele.text}
              <button onClick={() => editTodo(ele.id)}>edit</button>
              <button onClick={() => deleteTodo(ele.id)}>delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default DisplayTodo;
