import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { store } from 'state/store';
import RouterComponent from './RouterComponent';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


// import history from 'utils/history';
// import { BrowserRouter as Router } from 'react-router-dom'



function App() {
  return (
    // <Router history={history}>
    <Provider store={store}>
      <RouterComponent />
      <ToastContainer />

    </Provider>
    // </Router>

  );
}

export default App;
