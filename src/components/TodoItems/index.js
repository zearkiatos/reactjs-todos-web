import React from "react";
import TodoItem from "../TodoItem";
import LocalStorageTodosRepository from '../../Todos/Infrastructure/LocalStorageTodosRespository';

const renderTodoItems = ({ todos, setTodos }) =>
  todos
    ? todos.map((todo) => {
        const onComplete = (text, completed) => {
          const localStorageTodosRepository = new LocalStorageTodosRepository('TODOS');
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
          localStorageTodosRepository.save(todoMapped);
        };

        const onDelete = (text) => {
          let newTodos = todos.filter((todo) => todo.text !== text);
          setTodos(newTodos);
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
