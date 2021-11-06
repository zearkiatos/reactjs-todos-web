import React, { Fragment } from "react";
import TodoCounter from "../TodoCounter";
import TodoSearch from "../TodoSearch";
import TodoList from "../TodoList";
import TodoItems from "../TodoItems";
import CreateTodoButton from "../CreateTodoButton";

const UI = ({
  totalTodos,
  completedTodos,
  searchValue,
  todosFiltered,
  setSearchValue,
  setTodos,
}) => {
  return (
    <Fragment>
      <TodoCounter total={totalTodos} completed={completedTodos} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      <TodoList>
        <TodoItems todos={todosFiltered} setTodos={setTodos} />
      </TodoList>
      <CreateTodoButton />
    </Fragment>
  );
};

export default UI;
