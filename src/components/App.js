import { Fragment } from "react";
import TodoCounter from "./TodoCounter";
import TodoSearch from "./TodoSearch";
import TodoList from "./TodoList";
import CreateTodoButton from "./CreateTodoButton";
// import './App.css';

const App = () => {
  return (
    <Fragment>
      <TodoCounter />
      <TodoSearch />
      <TodoList />
      <CreateTodoButton />
    </Fragment>
  );
};

export default App;
