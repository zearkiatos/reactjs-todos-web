import "./todoList.css";
const TodoList = ({
  children,
  error,
  loading,
  showEmptyTodos,
  showRender,
  showEmptySearchResults,
  onError,
  onLoading,
  onEmptyTodos,
  onEmptySearchResults,
  render
}) => {
  return (
    <section className="todolist-container">
      {error && onError()}
      {loading && onLoading()}
      {showEmptyTodos && onEmptyTodos()}
      {showEmptySearchResults && onEmptySearchResults()}
      {showRender && render()}
      <ul>{children}</ul>
    </section>
  );
};

export default TodoList;
