import React from 'react'
import Main from "./Main";

import NotFound from "../components/NotFound";
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Login from "../components/Login"
class App extends React.Component {
    render(){
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={Login}/>
                    <Route exact path='/main' component={Main}/>
                    <Route exact path='/notFound' component={NotFound}/>
                    <Route component={NotFound}/>
                </Switch>
            </BrowserRouter>
        )
    }
}

export default  App;