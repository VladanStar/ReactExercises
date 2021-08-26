import React from 'react';
import ReactDOM from 'react-dom';
import './app/index.css';
import App from './app/App';
import registerServiceWorker from './registerServiceWorker';
import  { HashRouter, Route, Switch } from "react-router-dom"; 
import About  from "./app/about/about";


ReactDOM.render(
    <HashRouter>
        <Switch>
    <Route exact path='/' component={App}/>
    <Route exact path='/about' component={About}/>

</Switch>
</HashRouter>
, document.getElementById('root'));
registerServiceWorker();
