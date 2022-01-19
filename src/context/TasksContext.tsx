import React from 'react';

interface IProps {
  children: React.ReactElement;
}

export interface ITasksContext {
  id: string;
  title: string;
}

export const TasksContext = React.createContext<ITasksContext>(
  {} as ITasksContext,
);

export const TasksProvider: React.FunctionComponent<IProps> = ({children}) => {
  return (
    <TasksContext.Provider value={{id: '1', title: 'Task01'}}>
      {children}
    </TasksContext.Provider>
  );
};
