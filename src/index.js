import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import MyProvider from './MyProvider'

ReactDOM.render(<BrowserRouter><MyProvider><App /></MyProvider></BrowserRouter>, document.getElementById('root'))