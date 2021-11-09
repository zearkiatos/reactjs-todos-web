import React from 'react';
import { TodoProvider } from '../TodoContext';
import UI from './UI';

const App = () => {
  return (
    <TodoProvider>
      <UI/>
    </TodoProvider>
  );
};

export default App;
