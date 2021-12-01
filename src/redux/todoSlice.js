import { createSlice, nanoid } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: Date.now(),
        title: action.payload.title,
        complated: false,
      };
      state.push(todo);
    },
    deleteTodo: (state, action) => {
      return state.filter((todos) => todos.id !== action.payload.id);
    },
  },
});

export const { addTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
