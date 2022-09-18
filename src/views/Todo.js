import React from "react";

const Todo = (props) => {
  // const todos = props.todos;
  const { todos, title, deleteDataTodo } = props;
  const handleDelete = (id) => {
    deleteDataTodo(id);
  };
  return (
    <div>
      <div className="todos-container">
        <div className="title">{title}</div>
        {todos.map((todo) => {
          return (
            <div className="" key={todo.id}>
              <li className="todo-child">
                {todo.title} &nbsp;
                <span onClick={() => handleDelete(todo.id)}>x</span>
              </li>
            </div>
          );
        })}
        <hr />
      </div>
    </div>
  );
};

export default Todo;
