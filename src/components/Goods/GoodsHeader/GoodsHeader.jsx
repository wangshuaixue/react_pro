import React, {Component} from 'react';
import {Route, Switch,NavLink} from 'react-router-dom'
import './GoodsHeader.less'
export default class GoodsHeader extends Component {
  
  render() {
    return (
      <div>
        <div className="wrap-items">
          <div className="nav-bar">
            <NavLink to="/home" className="left-home"></NavLink>
      
            <NavLink to="/home" className="center">
              <span className="logo"></span>
            </NavLink>
      
            <NavLink to="/cart" className="right">
              <span className="search"></span>
              <span className="cart"></span>
            </NavLink>
          </div>
        </div>
      </div>
    )
  }
}