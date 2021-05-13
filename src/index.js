import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'semantic-ui-css/semantic.min.css';
import axios from 'axios';
import './style.css';

axios.defaults.baseURL = 'https://fake-newzzzz.herokuapp.com/api';

ReactDOM.render(<App />, document.getElementById('root'));

reportWebVitals();
