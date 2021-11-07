import React, { useState } from 'react';
import UI from './UI';
import LocalStorageTodosRepository from '../Todos/Infrastructure/LocalStorageTodosRespository';

const App = () => {
  const localStorageTodosRepository = new LocalStorageTodosRepository('TODOS');
  let todosParsed = localStorageTodosRepository.find();
  const [searchValue, setSearchValue] = useState('');
  const [todos, setTodos] = useState(todosParsed);
  const completedTodos = todos.filter(todo => todo.completed).length;
  const totalTodos = todos.length;
  let todosFiltered = todos
  if (searchValue)
    todosFiltered = todosParsed.filter(todo => todo.text.toLowerCase().includes(searchValue));
  return (
    <UI
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
