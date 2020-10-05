import React from 'react';
import ReactDOM from 'react-dom';
import 'assets/css/common.scss';
import { BrowserRouter } from 'react-router-dom';
import firebase from 'utils/firebase';
import App from './App';
import * as serviceWorker from './serviceWorker';

// eslint-disable-next-line
const _ = firebase.firestore();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
