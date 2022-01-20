import React from 'react';
import {render} from '@testing-library/react-native';
import App from '../App';

it('renders correctly', () => {
  const {debug} = render(<App />);

  debug();
});
