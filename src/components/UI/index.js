import React, { Fragment } from "react";
import TodoCounter from "../TodoCounter";
import TodoSearch from "../TodoSearch";
import TodoList from "../TodoList";
import TodoItems from "../TodoItems";
import CreateTodoButton from "../CreateTodoButton";
import { TodoContext } from "../../TodoContext";

const UI = () => {
  return (
    <Fragment>
      <TodoCounter />
      <TodoSearch />
      <TodoContext.Consumer>
        {({ error, loading, todosFiltered, setTodos }) => (
          <TodoList>
            {error && <p>Something was wrong</p>}
            {loading && <p>Loading...</p>}
            {!loading && !todosFiltered.length && <p>Create your first TODO</p>}
            <TodoItems todos={todosFiltered} setTodos={setTodos} />
          </TodoList>
        )}
      </TodoContext.Consumer>
      <CreateTodoButton />
    </Fragment>
  );
};

export default UI;
