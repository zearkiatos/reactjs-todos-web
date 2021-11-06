import React, { useState } from 'react';
import UI from './UI';
import todosMock from '../mock/todosMock.json'

const App = () => {
  const [searchValue, setSearchValue] = useState('');
  const [todos, setTodos] = useState(todosMock);
  const completedTodos = todos.filter(todo => todo.completed).length;
  const totalTodos = todos.length;
  let todosFiltered = todos
  if (searchValue)
    todosFiltered = todosMock.filter(todo => todo.text.toLowerCase().includes(searchValue));
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
