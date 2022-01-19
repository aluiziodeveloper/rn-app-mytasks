import React from 'react';
import {TasksProvider} from './src/context/TasksContext';
import {Home} from './src/pages/Home';

const App = () => {
  return (
    <TasksProvider>
      <Home />
    </TasksProvider>
  );
};

export default App;
