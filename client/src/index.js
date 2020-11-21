import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Route, BrowserRouter as Router} from "react-router-dom";

import {Provider} from "react-redux";
import store from "./store";

import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Main from "./components/Main";
import withAuth from "./hoc/auth/withAuth";

import 'antd/dist/antd.css';
import Header from "./components/view/Header/Header";

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Header/>
            <Route exact path={"/"} component={App}/>
            <Route exact path={"/register"} component={Register}/>
            <Route exact path={"/login"} component={Login}/>
            <Route exact path={"/main"} component={withAuth(Main)}/>
        </Router>
    </Provider>,
    document.getElementById('root')
);
