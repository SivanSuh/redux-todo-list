import React from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import AddTodos from "./components/AddTodos";

function App() {
  return (
    <div className="App">
      <div className="nav">
        <h1 className="navbar">Todo List</h1>
      </div>
      <AddTodos />
      <TodoList />
    </div>
  );
}

export default App;
