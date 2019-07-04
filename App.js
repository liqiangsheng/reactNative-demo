/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import Login from './components/login'
import Home from './components/home/home'
import React, { Component } from 'react';
// import { Text, View } from 'react-native';
import { Actions,Router,Scene } from 'react-native-router-flux';
export default class HelloWorldApp extends Component {
    render() {
        return <Router>
            <Scene key="root">
                <Scene key="login" component={Login} title="Login"/>
                <Scene key="home" component={Home}/>
            </Scene>
        </Router>
    }
}
