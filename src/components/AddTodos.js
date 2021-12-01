import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/todoSlice";

const AddTodos = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(
      addTodo({
        title: value,
      })
    );
    setValue("");
  };
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="add somethink"
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddTodos;
