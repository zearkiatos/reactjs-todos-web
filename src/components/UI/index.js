import React, { Fragment, useContext } from "react";
import TodoList from "../TodoList";
import TodoItems from "../TodoItems";
import CreateTodoButton from "../CreateTodoButton";
import { TodoContext } from "../../TodoContext";
import Modal from '../Modal';
import TodosForm from "../TodosForm";
import Error from '../Error';
import Loading from '../Loading';
import EmptyTodos from '../EmptyTodos';
import TodoCounter from "../TodoCounter";
import TodoSearch from "../TodoSearch";
import TodoHeader from "../TodoHeader";

const UI = () => {
  const { totalTodos, completedTodos, searchValue, setSearchValue } = useContext(TodoContext);
  return (
    <Fragment>
      <TodoHeader>
        <TodoCounter
          totalTodos={totalTodos}
          completedTodos={completedTodos}
        />
        <TodoSearch
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
      </TodoHeader>
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
