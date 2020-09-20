import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { store } from 'state/store';
import RouterComponent from './RouterComponent';


function App() {
  return (
    <Provider store={store}>
    <RouterComponent/>
    </Provider>
  );
}

export default App;
