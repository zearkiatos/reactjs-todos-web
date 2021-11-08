import React from "react";
import TodoItem from "../TodoItem";
import useTodosLocalStorageRepository from '../../hooks/useTodosLocalStorageRepository';

const renderTodoItems = ({ todos, setTodos }) =>
  todos
    ? todos.map((todo) => {
        const { saveItems } = useTodosLocalStorageRepository("TODOS");
        console.log(saveItems);
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
          setTodos(todoMapped);
          saveItems(todoMapped);
        };

        const onDelete = (text) => {
          let newTodos = todos.filter((todo) => todo.text !== text);
          setTodos(newTodos);
          saveItems(newTodos);
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
