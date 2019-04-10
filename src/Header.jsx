import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    render () {
        return ( 
            <div>
                <NavLink exact to='/' activeStyle={{color : 'red'}}>Home</NavLink>
                <NavLink to='/notre-histoire' activeStyle={{color : 'red'}}> History</NavLink>
            </div>
        )
    }
}

export default Header;