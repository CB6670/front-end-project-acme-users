import React, {Component} from "react";
import {Link, Route, HashRouter} from "react-router-dom";
import Home from "./Home";
import Users from "./Users";

export default class App extends Component{
    constructor(props){
        super(props);

    }
    render(){
        return(
            <HashRouter>
            <div id = "links">
                <div>
                <Link to = "/">Home</Link>
                </div>
                <div>
                <Link to = "/users">Users</Link>
                </div>
                <Route exact path = "/" component = {Home}/>
                <Route path = "/users" component = {Users}/>
            </div>
            </HashRouter>
        );
    }
}
