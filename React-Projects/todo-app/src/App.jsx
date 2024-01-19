import React from "react";
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import "./App.css";
import TodoItems from "./components/TodoItems";
function APP() {
  const todoItems = [
    {
      name: "Buy Milk",
      dueDate: "15/01/2024",
    },
    {
      name: "Go To College",
      dueDate: "15/01/2024",
    },
    {
      name: "Live",
      dueDate: "Right now",
    }
  ];
  return (
    <center className="todo-content">
      <AppName />
      <AddTodo />
      <TodoItems todoItems={todoItems}></TodoItems>
      
    </center>
  );
}
export default APP;
