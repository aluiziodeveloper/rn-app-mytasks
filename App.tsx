import React from 'react';
import {TasksContext} from './src/context/TasksContext';
import {Home} from './src/pages/Home';

const App = () => {
  return (
    <TasksContext.Provider value={{id: '1', title: 'Task01'}}>
      <Home />
    </TasksContext.Provider>
  );
};

export default App;
