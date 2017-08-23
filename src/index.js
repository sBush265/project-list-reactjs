import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'; /* Importing Provider which will be used to pass down its store down to the entire application*/
import { createStore } from 'redux'; /*Importing createStore from redux to use below*/
import reducer from './reducers';
import App from './components/App';

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
, document.getElementById('root'));
