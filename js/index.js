import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'

import App from './components/App';
import MainRouter from './router';
import { Router, Route, hashHistory, IndexRoute } from 'react-router'


ReactDOM.render((<MainRouter />), document.getElementById('app'));
