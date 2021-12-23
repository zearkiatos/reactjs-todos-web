import React from "react";
import TodoItem from "../TodoItem";
import useTodosLocalStorageRepository from '../../hooks/useTodosLocalStorageRepository';
import constants from '../../constants'

const renderTodoItems = ({ todos, onSave }) =>
  todos
    ? todos.map((todo) => {
        const { save } = useTodosLocalStorageRepository(constants.STORAGE_NAME);
        const onComplete = (text, completed) => {
          alert(`You complete the todo ${text}`);
          const todoMapped = todos.map((todo) =>
            todo.text === text
              ? {
                  text,
                  completed: !completed,
                }
              : todo
          );
          onSave(todoMapped);
          save(todoMapped);
        };

        const onDelete = (text) => {
          let newTodos = todos.filter((todo) => todo.text !== text);
          console.log(newTodos);
          onSave(newTodos);
          save(newTodos);
        };

        return (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={onComplete}
            onDelete={onDelete}
          />
        );
      })
    : "";

const TodoItems = (props) => renderTodoItems(props);

export default TodoItems;
