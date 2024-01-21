import { useState, useRef, useContext } from "react";
import { BiMessageAdd } from "react-icons/bi";
import { TodoItemsContext } from "../store/todo-items-store";

function AddTodo() {
  const {addNewItem}=useContext(TodoItemsContext);
  const todoNameElement = useRef();
  const dueDateElement = useRef();

  const handleAddButtonClicked = () => {
    const todoName = todoNameElement.current.value;
    const dueDate = dueDateElement.current.value;
    todoNameElement.current.value = "";
    dueDateElement.current.value = "";
    addNewItem(todoName, dueDate);
  };

  return (
    <div className="container text-center">
      <div className="row ms-row">
        <div className="col-6">
          <input
            type="text"
            ref={todoNameElement}
            placeholder="Enter Todo Here"
          />
        </div>
        <div className="col-4">
          <input
            type="date"
            ref={dueDateElement}
            placeholder="dd/mm/yyyy"
          />
        </div>
        <div className="col-2">
          <button
            className="btn btn-success ms-button"
            onClick={handleAddButtonClicked}
          >
            <BiMessageAdd></BiMessageAdd>
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
