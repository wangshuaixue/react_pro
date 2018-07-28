import React, {Component} from 'react';
import {Route, Switch,NavLink} from 'react-router-dom'
import Swiper from 'swiper'
import BScroll from 'better-scroll'
import './Interlayer.less'
import {connect} from 'react-redux'


export default class Interlayer extends Component {
  
  render() {
    return (
      <div>
        <div className="wrap">
          <div className="bgImg">
            <img src={require('./img/top1.jpg')} alt=""/>
              <img src={require('./img/top2.jpg')} alt=""/>
          </div>
          <div className="bgImg">
            <img src={require('./img/bottom.jpg')} alt=""/>
              <a href="javascript:;"></a>
              <a href="javascript:;" className="backBtn"></a>
              <NavLink to="/home" className="backBtn"></NavLink>
          </div>
        </div>
      </div>
    )
  }
}