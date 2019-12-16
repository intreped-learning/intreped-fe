import React from 'react';
import ReactDOM from 'react-dom';
import './custom.scss';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from './reducers';
import { BrowserRouter as Router} from 'react-router-dom';

import * as serviceWorker from './serviceWorker';

const store = createStore(rootReducer, composeWithDevTools());

const router = (
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>
)

ReactDOM.render(router, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
