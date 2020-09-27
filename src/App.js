import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { store } from 'state/store';
import RouterComponent from './RouterComponent';
// import history from 'utils/history';
// import { BrowserRouter as Router } from 'react-router-dom'



function App() {
  return (
    // <Router history={history}>
    <Provider store={store}>
      <RouterComponent />
    </Provider>
    // </Router>

  );
}

export default App;
