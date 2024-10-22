import React, { Fragment } from "react";
import '../global.css';

import { v4 as uuidv4 } from "uuid";

const CreateTodo = ({ setTodos, todos }) => {
  function handleTodo(e) {
    setTodos({ ...todos, text: e.target.value });
  }

  function todoSubmit(e) {
    e.preventDefault();
    console.log(todos);
    let newTodo = {
      id: uuidv4(),
      text: todos.text,
    };
    todos.allTodos.push(newTodo);
    setTodos({ text: "", allTodos: [...todos.allTodos] });
  }
  return (
    <Fragment>
      <form id="todoForm">
        <input
          type="text"
          placeholder="enter todo..."
          onChange={handleTodo}
          value={todos.text}
        />
        <button onClick={todoSubmit}>{todos.toggle ? "Edit" : "Add"}</button>
      </form>
    </Fragment>
  );
};

export default CreateTodo;
