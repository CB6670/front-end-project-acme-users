import React, {Component} from "react";
import {NavLink} from 'react-router-dom';


export default class Users extends Component {
    constructor(props){
        super(props);
        this.state = {
            users : []
        }
    }

    async componentDidMount(){
        //const res = await fetch(`https://acme-users-api-rev.herokuapp.com/api/users/`);
       // const data = await res.json();
        //console.log(data);
        //this.setState({users:data});
    }
    render(){
        const {users} = this.state;
        return (
            <div id = "users">
                <div>
               <ul>
                   <h3>First Name</h3>
                   {
                       users.map(user => (<li key = {user.id}>{user.firstName}</li>))
                   }
                </ul>
                </div>
                <div>
                <ul>
                   <h3>Last Name</h3>
                   {
                       users.map(user => (<li key = {user.id}>{user.lastName}</li>))
                   }
               </ul>
               </div>
               <div>
               <ul>
                   <h3>Middle Name</h3>
                   {
                       users.map(user => (<li key = {user.id}>{user.middleName}</li>))
                   }
               </ul>
               </div>
               <div>
                   <ul>
                       <h3>Email</h3>
                       {
                           users.map(user => (<li key = {user.id}>{user.email}</li>))
                       }
                   </ul>
               </div>
            </div>
        )
    }
}
