import React from 'react';
import ReactDOM from 'react-dom';
import './general-styles/index.css';

/*components*/
import {App} from './app/App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);