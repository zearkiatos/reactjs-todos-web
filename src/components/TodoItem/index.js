const TodoItem = ({ text, completed }) => {
  return (
    <div>
      <header>
        <h1>{text}</h1>
        <span>{completed ? "✅ " : "❌"}</span>
      </header>
    </div>
  );
};

export default TodoItem;
