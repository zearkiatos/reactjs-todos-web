import React from 'react';
import TodoItem from "../TodoItem";

const renderTodoItems = ({ todos, setTodos }) => todos.map((todo) => {

  const onComplete = (text, completed) => {
    alert(`You complete the todo ${text}`);
    const todoMapped = todos.map(todo => (todo.text === text ? {
      text,
      completed: !completed
    } : todo))
    setTodos(todoMapped);
  };

  const onDelete = (text) => {
    let newTodos = todos.filter(todo => todo.text !== text);
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
});

const TodoItems = (props) => renderTodoItems(props);

export default TodoItems;
