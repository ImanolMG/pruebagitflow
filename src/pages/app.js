import React from 'react'
import Main from "./Main";

import NotFound from "../components/NotFound";
import { BrowserRouter, Switch, Route } from 'react-router-dom'
class App extends React.Component {
    render(){
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={Main}/>
                    <Route exact path='/notFound' component={NotFound}/>
                    <Route component={NotFound}/>
                </Switch>
            </BrowserRouter>
        )
    }
}

export default  App;