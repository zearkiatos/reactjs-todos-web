import React, { Fragment } from "react";
import TodoCounter from "../TodoCounter";
import TodoSearch from "../TodoSearch";
import TodoList from "../TodoList";
import TodoItems from "../TodoItems";
import CreateTodoButton from "../CreateTodoButton";
import { TodoContext } from "../../TodoContext";

const UI = () => {
  return (
    <TodoContext.Consumer>
      {({
        loading,
        error,
        totalTodos,
        completedTodos,
        searchValue,
        todosFiltered,
        setSearchValue,
        setTodos
      }) => (
        <Fragment>
          <TodoCounter total={totalTodos} completed={completedTodos} />
          <TodoSearch
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
          <TodoList>
            {error && <p>Something was wrong</p>}
            {loading && <p>Loading...</p>}
            {!loading && !todosFiltered.length && <p>Create your first TODO</p>}
            <TodoItems todos={todosFiltered} setTodos={setTodos} />
          </TodoList>
          <CreateTodoButton />
        </Fragment>
      )}
    </TodoContext.Consumer>
  );
};

export default UI;
