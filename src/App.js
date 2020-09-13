import React, {Component} from 'react';
import './App.css';
import Header from './components/header';
import {connect} from "react-redux";
import {getTodos} from "./actions";
import {getLists} from "./actions/lists";
import MyTodos from './containers/myTodos'
import {Route, Switch} from 'react-router';
import Lists from './containers/mytodolists';
import Login from './components/login';
import Logout from './components/logout';
import Signup from './components/signup';
import PrivateRoute from './containers/privateroute';
import {UserDataProvider} from './containers/logincontext';

class App extends Component {
    render() {
        return (<UserDataProvider>
            <div className="App">
                <Header/>
                <Switch>
                    <PrivateRoute path="(/todos|/)"
                        component={MyTodos}/>
                    <PrivateRoute path="/lists/:list([0-9]+)/todos"
                        component={MyTodos}/>
                    <PrivateRoute path="/lists"
                        component={Lists}/>

                    <Route path="/signup"
                        component={Signup}/>
                    <Route path="/login"
                        component={Login}/>
                    <PrivateRoute path="/logout"
                        component={Logout}/>

                </Switch>
            </div>
        </UserDataProvider>);
    }
}

export default connect(null, {getTodos, getLists})(App);
