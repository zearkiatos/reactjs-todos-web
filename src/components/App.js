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
    todos,
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
      <TodoHeader loading={loading}>
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
        showEmptyTodos={!loading && !todos.length}
        showRender={!loading && todosFiltered}
        showEmptySearchResults={(!totalTodos && todos.length)}
        onError={() => <Error error={error} />}
        onLoading={() => <Loading quantity="5" />}
        onEmptyTodos={() => <EmptyTodos> <p>Create your first TODO</p> </EmptyTodos>}
        onEmptySearchResults={() => <EmptyTodos><p>There is not result for: {searchValue} </p></EmptyTodos>}
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
