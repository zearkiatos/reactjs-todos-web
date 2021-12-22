import React, { Fragment } from "react";
import TodoList from "./TodoList";
import TodoItems from "./TodoItems";
import CreateTodoButton from "./CreateTodoButton";
import { useTodos } from "../hooks/useTodos";
import Modal from "./Modal";
import TodosForm from "./TodosForm";
import Error from "./Error";
import Loading from "./Loading";
import EmptyTodos from "./EmptyTodos";
import TodoCounter from "./TodoCounter";
import TodoSearch from "./TodoSearch";
import TodoHeader from "./TodoHeader";
import { ChangeAlertWithStorageListener } from "./StorageChangeAlert";

const App = () => {
  const {
    totalTodos,
    todos,
    completedTodos,
    searchValue,
    onSearchValue,
    loading,
    error,
    todosFiltered,
    onSave,
    openModal,
    onOpenModal,
    addTodos,
    sincronize: sincronizeTodos
  } = useTodos();
  return (
    <Fragment>
      <TodoHeader loading={loading}>
        <TodoCounter totalTodos={totalTodos} completedTodos={completedTodos} />
        <TodoSearch searchValue={searchValue} onSearchValue={onSearchValue} />
      </TodoHeader>
      <TodoList
        error={error}
        loading={loading}
        showEmptyTodos={!loading && !todos.length}
        showRender={!loading && todosFiltered}
        showEmptySearchResults={!totalTodos && todos.length}
        onError={() => <Error error={error} />}
        onLoading={() => <Loading quantity="5" />}
        onEmptyTodos={() => (
          <EmptyTodos>
            {" "}
            <p>Create your first TODO</p>{" "}
          </EmptyTodos>
        )}
        onEmptySearchResults={() => (
          <EmptyTodos>
            <p>There is not result for: {searchValue} </p>
          </EmptyTodos>
        )}
        render={() => <TodoItems todos={todosFiltered} onSave={onSave} />}
      />
      <CreateTodoButton onOpenModal={onOpenModal} />
      {!!openModal && (
        <Modal openModal={openModal}>
          <TodosForm
            onSave={onSave}
            onOpenModal={onOpenModal}
            addTodos={addTodos}
          />
        </Modal>
      )}
      <ChangeAlertWithStorageListener sincronizeTodos={sincronizeTodos} />
    </Fragment>
  );
};

export default App;
