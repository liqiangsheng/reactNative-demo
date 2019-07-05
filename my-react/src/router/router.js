
import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import App from './../App'
import Home from './../pages/home/home'
import Login from './../pages/login/login'

const Root = () =>(
    <div>
        <Switch>
            <Route path='/'
                   render={props => (
                       <App>
                            <Switch>
                                <Route path='/' exact component={Login}/>
                                <Route path='/login/' exact component={Login}/>
                                <Route path='/home' exact component={Home}/>
                                {/*路由不正确时，默认跳回登录页面*/}
                                <Route render={() => <Redirect to="/" />} />
                            </Switch>
                       </App>
                   )}
            />

        </Switch>
    </div>
)

export default Root;