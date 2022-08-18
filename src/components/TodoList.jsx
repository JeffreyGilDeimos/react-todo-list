import React, { useState } from "react";
import TodoBody from "./TodoBody";
import TodoHeader from "./TodoHeader";

export default function TodoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = (newTodo) => {
    if (!newTodo.text) {
      return;
    }
    const newTodos = [newTodo, ...todos];
    setTodos(newTodos);
  };

  const removeTodo = (id) => {
    const newTodos = [...todos].filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const updateTodo = (todoID, newValue) => {
    if (!newValue) {
      return;
    }
    const newTodos = todos.map((item) =>
      item.id === todoID ? newValue : item
    );
    setTodos(newTodos);
  };

  return (
    <header>
      <h1>Task List 2022</h1>
      <TodoHeader onSubmit={addTodo} />
      <br />
      <hr />
      <br />
      <br />
      <TodoBody todos={todos} removeTodo={removeTodo} updateTodo={updateTodo} />
    </header>
  );
}
