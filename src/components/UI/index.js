import React, { Fragment } from "react";
import TodoCounter from "../TodoCounter";
import TodoSearch from "../TodoSearch";
import TodoList from "../TodoList";
import TodoItems from "../TodoItems";
import CreateTodoButton from "../CreateTodoButton";
import { TodoContext } from "../../TodoContext";
import Modal from '../Modal';
import TodosForm from "../TodosForm";
import Error from '../Error';
import Loading from '../Loading';
import EmptyTodos from '../EmptyTodos';

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
            {error && <Error error={error} />}
            {loading && <Loading quantity="5" />}
            {!loading && !todosFiltered.length && <EmptyTodos />}
            {!loading && todosFiltered && <TodoItems todos={todosFiltered} setTodos={setTodos} />}
          </TodoList>
        )}

      </TodoContext.Consumer>
      <TodoContext.Consumer>
        {({ openModal, setOpenModal }) => (
          <Fragment>
            <CreateTodoButton setOpenModal={setOpenModal} />
            {!!openModal && <Modal openModal={openModal}>
              <TodosForm />
            </Modal>}
          </Fragment>
        )}
      </TodoContext.Consumer>

    </Fragment>
  );
};

export default UI;
