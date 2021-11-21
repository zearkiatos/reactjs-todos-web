import React, { Fragment } from "react";
import TodoList from "./TodoList";
import TodoItems from "./TodoItems";
import CreateTodoButton from "./CreateTodoButton";
import { useTodos } from "../hooks/useTodos";
import Modal from './Modal';
import TodosForm from "./TodosForm";
import Error from './Error';
import Loading from './Loading';
import EmptyTodos from './EmptyTodos';
import TodoCounter from "./TodoCounter";
import TodoSearch from "./TodoSearch";
import TodoHeader from "./TodoHeader";

const App = () => {
  const {
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    loading,
    error,
    todosFiltered,
    setTodos,
    openModal,
    setOpenModal,
    addTodos
  } = useTodos();
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
      <TodoList
        error={error}
        loading={loading}
        showEmptyTodos={!loading && !todosFiltered.length}
        showRender={!loading && todosFiltered}
        onError={() => <Error error={error} />}
        onLoading={() => <Loading quantity="5" />}
        onEmptyTodos={() => <EmptyTodos />}
        render={() => <TodoItems todos={todosFiltered} setTodos={setTodos} />}
      />
      <CreateTodoButton setOpenModal={setOpenModal} />
      {!!openModal && <Modal openModal={openModal}>
        <TodosForm
          setTodos={setTodos}
          setOpenModal={setOpenModal}
          addTodos={addTodos}
        />
      </Modal>}

    </Fragment>
  );
};

export default App;
