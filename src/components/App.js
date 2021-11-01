import { Fragment } from "react";
import TodoCounter from "./TodoCounter";
import TodoSearch from "./TodoSearch";
import TodoList from "./TodoList";
import TodoItems from './TodoItems';
import CreateTodoButton from "./CreateTodoButton";
// import './App.css';

const App = () => {
  return (
    <Fragment>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        <TodoItems />
      </TodoList>
      <CreateTodoButton />
    </Fragment>
  );
};

export default App;
