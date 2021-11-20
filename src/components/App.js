import React, { Fragment, useState } from 'react';
// import { TodoProvider } from '../TodoContext';
// import TodoList from './TodoList';
// import TodoHeader from './TodoHeader';
// import UI from './UI';


const App = () => {
  const [state, setState] = useState('shared state');
  return (
    <Fragment>
      <TodoHeader>
        <TodoCounter />
        <TodoSearch />
      </TodoHeader>
      <TodoList>
        <TodoItem state={state} />
      </TodoList>
    </Fragment>
  );
};

const TodoHeader = ({ children }) => {
  return (
    <header>
      {children}
    </header>
  )
};

const TodoList = ({ children }) => {
  return (
    <section className="todolist-container">
      {children}
    </section>
  )
};

const TodoCounter = () => {
  return <p>TodoCounter</p>
};

const TodoSearch = () => {
  return <p>TodoSearch</p>
};

const TodoItem = ({ state }) => {
  return <p>TodoItem: {state}</p>
};


// const App = () => {
//   return ;
// }

// const App = () => {
//   return (
//     <TodoProvider>
//       <UI/>
//     </TodoProvider>
//   );
// };

export default App;
