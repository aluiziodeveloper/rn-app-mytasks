import React from 'react';
import SplashScreen from 'react-native-splash-screen';
import {TasksProvider} from './src/context/TasksContext';
import {Home} from './src/pages/Home';

const App = () => {
  React.useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <TasksProvider>
      <Home />
    </TasksProvider>
  );
};

export default App;
