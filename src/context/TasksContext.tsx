import React from 'react';

export interface ITasksContext {
  id: string;
  title: string;
}

export const TasksContext = React.createContext<ITasksContext>(
  {} as ITasksContext,
);
