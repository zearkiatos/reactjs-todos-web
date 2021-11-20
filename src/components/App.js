import React, { Fragment, useState } from 'react';
import { TodoProvider } from '../TodoContext';
import TodoList from './TodoList';
import TodoHeader from './TodoHeader';
import UI from './UI';

const App = () => {
  return (
    <TodoProvider>
      <UI/>
    </TodoProvider>
  );
};

export default App;
