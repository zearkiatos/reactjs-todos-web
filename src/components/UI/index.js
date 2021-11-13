import React, { Fragment } from "react";
import TodoCounter from "../TodoCounter";
import TodoSearch from "../TodoSearch";
import TodoList from "../TodoList";
import TodoItems from "../TodoItems";
import CreateTodoButton from "../CreateTodoButton";
import { TodoContext } from "../../TodoContext";
import Modal from '../Modal';

const UI = () => {
  return (
    <Fragment>
      <TodoCounter />
      <TodoSearch />
      <TodoContext.Consumer>
        {({
          loading,
          error,
          todosFiltered,
          setTodos
        }) => (
          <TodoList>
            {error && <p>Something was wrong</p>}
            {loading && <p>Loading...</p>}
            {!loading && !todosFiltered.length && <p>Create your first TODO</p>}
            {!loading && todosFiltered && <TodoItems todos={todosFiltered} setTodos={setTodos} />}
          </TodoList>
        )}

      </TodoContext.Consumer>
      <TodoContext.Consumer>
        {({ openModal, setOpenModal }) => (
          <Fragment>
            <CreateTodoButton openModal={openModal} setOpenModal={setOpenModal} />
            {!!openModal && <Modal openModal={openModal}>
              <p>I'm a modal</p>
            </Modal>}
          </Fragment>
        )}
      </TodoContext.Consumer>

    </Fragment>
  );
};

export default UI;
