import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'

import App from './components/App';

//ReactDOM.render((<App />), document.getElementById('app'));
import { Switch, Route } from 'react-router-dom'



ReactDOM.render((

    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={App} />
            <Route path='/charts' component={App} />
            <Route path='/truc' component={App} />
        </Switch>
    </BrowserRouter>
), document.getElementById('app'))