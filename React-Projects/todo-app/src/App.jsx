import React from "react";
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import "./App.css";
import TodoItems from "./components/TodoItems";
import { useState } from "react";
import WelcomeMessage from "./components/WelcomeMessage";
function APP() {

  const [todoItems, setTodoItems] = useState([]);

  const handleNewItem = (itemName, itemDueDate) => {
    // console.log(`new item  ${itemName} added Date : ${itemDueDate}`);
    const newTodoItems = [
      ...todoItems,
      { name: itemName, dueDate: itemDueDate },
    ];
    setTodoItems(newTodoItems);
  };
  return (
    <center className="todo-content">
      <AppName />
      <AddTodo onNewItem={handleNewItem} />
      {todoItems.length ===0&&<WelcomeMessage ></WelcomeMessage>}
      <TodoItems todoItems={todoItems}></TodoItems>
    </center>
  );
}
export default APP;
