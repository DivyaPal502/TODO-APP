import React from "react";
import '../global.css';


const Todos = ({ allTodos, deleteTodo, editTodo }) => {
  console.log(allTodos);

  return (
    <div>
      {allTodos?.map((todo) => {
        return (
          <article key={todo.id}>
            <h1>{todo.text}</h1>
            <button onClick={() => editTodo(todo.id)}>edit</button>
            <button onClick={() => deleteTodo(todo.id)}>delete</button>
          </article>
        );
      })}
    </div>
  );
};

export default Todos;
