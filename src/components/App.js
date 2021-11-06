import React, { useState } from 'react';
import { Fragment } from "react";
import TodoCounter from "./TodoCounter";
import TodoSearch from "./TodoSearch";
import TodoList from "./TodoList";
import TodoItems from './TodoItems';
import CreateTodoButton from "./CreateTodoButton";
import todosMock from '../mock/todosMock.json'

const App = () => {
  const [searchValue, setSearchValue] = useState('');
  const [todos, setTodos] = useState(todosMock);
  const completedTodos = todos.filter(todo => todo.completed).length;
  const totalTodos = todos.length;
  let todosFiltered = todos
  if (searchValue)
    todosFiltered = todosMock.filter(todo => todo.text.toLowerCase().includes(searchValue));
  return (
    <Fragment>
      <TodoCounter 
        total={totalTodos}
        completed={completedTodos}
      />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      <TodoList>
        <TodoItems todos={todosFiltered} setTodos={setTodos} />
      </TodoList>
      <CreateTodoButton />
    </Fragment>
  );
};

export default App;
