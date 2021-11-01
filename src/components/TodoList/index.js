import TodoItem from "../TodoItem";
const todosMock = [
  {
    text: "Cut onions",
    completed: false,
  },
  {
    text: "Take the reactjs introduction course",
    completed: false,
  },
  {
    text: "Cry with the crier 😭",
    completed: false,
  },
  {
    text: "Study reactjs ⚛️",
    completed: false,
  },
];
const TodoList = () => {
  const renderTodoItems = todosMock.map((todo) => (
    <TodoItem key={todo.text} text={todo.text} completed={todo.completed} />
  ));
  return <div>{renderTodoItems}</div>;
};

export default TodoList;
