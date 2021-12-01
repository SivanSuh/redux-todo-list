import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../redux/todoSlice";

const TodoItem = ({ id, title, completed }) => {
  const dispatch = useDispatch();

  const deleteHandle = () => {
    dispatch(deleteTodo({ id }));
  };
  return (
    <li>
      <div className="todoItem">
        <span>
          {/* <input type="checkbox" checked={completed} /> */}
          {title}
        </span>
        <button onClick={deleteHandle} className="deleteBtn">
          Delete
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
