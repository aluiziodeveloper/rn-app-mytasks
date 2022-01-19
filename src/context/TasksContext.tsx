import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';

interface IProps {
  children: React.ReactElement;
}

export interface ITask {
  id: string;
  title: string;
}

export interface ITasksContext {
  tasks: ITask[];
  addTask(task: ITask): void;
}

const tasksData = '@MyTasks:Tasks';

export const TasksContext = React.createContext<ITasksContext>(
  {} as ITasksContext,
);

export const TasksProvider: React.FunctionComponent<IProps> = ({children}) => {
  const [data, setData] = React.useState<ITask[]>([]);

  React.useEffect(() => {
    async function loadTasks() {
      const taskList = await AsyncStorage.getItem(tasksData);

      if (taskList) {
        setData(JSON.parse(taskList));
      }
    }

    loadTasks();
  }, []);

  const addTask = async (task: ITask) => {
    try {
      const newTaskList = [...data, task];
      setData(newTaskList);
      await AsyncStorage.setItem(tasksData, JSON.stringify(newTaskList));
    } catch (error) {
      throw new Error(error as string);
    }
  };

  return (
    <TasksContext.Provider value={{tasks: data, addTask}}>
      {children}
    </TasksContext.Provider>
  );
};

export function useTaskList(): ITasksContext {
  const context = React.useContext(TasksContext);

  if (!context) {
    throw new Error('useTaskList deve ser usado em um TasksProvider');
  }

  return context;
}
