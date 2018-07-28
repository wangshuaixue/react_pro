import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom'
import Swiper from 'swiper'
import BScroll from 'better-scroll'
import './ClassifyHeader.less'
import {connect} from 'react-redux'


export default class ClassifyHeader extends Component {
  
  render() {
    return (
      <div>
        <div className="header-con">
          <div className="search-top">
            <div className="s-wrap">
              <span className="icon"></span>
              <span className="shops">搜索商品,共10259个好物</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}