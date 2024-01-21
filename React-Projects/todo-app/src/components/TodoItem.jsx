import { useContext } from "react";
import { AiFillDelete } from "react-icons/ai";
import { TodoItemsContext } from "../store/todo-items-store";
function TodoItem({ todoName, todoDate }) {
  const { deleteItem } = useContext(TodoItemsContext);
  return (
    <div className="container ms-row">
      <div className="row">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button
            className="btn btn-danger ms-button"
            onClick={() => deleteItem(todoName)}
          >
            <AiFillDelete></AiFillDelete>
          </button>
        </div>
      </div>
    </div>
  );
}
export default TodoItem;
