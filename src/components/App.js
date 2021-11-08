import React, { useState, useEffect } from 'react';
import useTodosLocalStorageRepository from '../hooks/useTodosLocalStorageRepository';
import UI from './UI';

const App = () => {
  const { items, loading } = useTodosLocalStorageRepository('TODOS');
  const [searchValue, setSearchValue] = useState('');
  const [todos, setTodos] = useState(items);
  const completedTodos = todos.filter(todo => todo.completed).length;
  const totalTodos = todos.length;
  let todosFiltered = todos;
  if (searchValue)
    todosFiltered = items.filter(todo => todo.text.toLowerCase().includes(searchValue));
  console.log('Render before the use effect');
  useEffect(() => {
    console.log('Use Effect');
  }, [totalTodos]);
  console.log('Render after the use effect');
  return (
    <UI
      loading={loading}
      setSearchValue={setSearchValue}
      setTodos={setTodos}
      completedTodos={completedTodos}
      totalTodos={totalTodos}
      todosFiltered={todosFiltered}
      searchValue={searchValue}
    />
  );
};

export default App;
