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
    completed: true,
  },
  {
    text: "Study reactjs ⚛️",
    completed: false,
  },
];

const renderTodoItems = todosMock.map((todo) => (
  <TodoItem key={todo.text} text={todo.text} completed={todo.completed} />
));

const TodoItems = () => renderTodoItems;

export default TodoItems;
