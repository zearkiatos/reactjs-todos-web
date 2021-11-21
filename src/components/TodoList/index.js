import "./todoList.css";
const TodoList = ({
  children,
  error,
  loading,
  showEmptyTodos,
  showRender,
  onError,
  onLoading,
  onEmptyTodos,
  render
}) => {
  return (
    <section className="todolist-container">
      {error && onError()}
      {loading && onLoading()}
      {showEmptyTodos && onEmptyTodos()}
      {showRender && render()}
      <ul>{children}</ul>
    </section>
  );
};

export default TodoList;
