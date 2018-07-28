import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom'
import '../../common/less/mixins.less'
import './Cart.less'

export default class Cart extends Component {
  
  render() {
    return (
      <div>
        <div className="cart-wrap">
          <div className="header-cart">
            <span className="title">购物车</span>
            <span className="quan">领券</span>
          </div>
          <div className="cart-con">
            <div className="list-info">
        <span className="info">
          <span className="icon"></span>
          <span className="text">30天无忧退货</span>
        </span>
              <span className="info">
          <span className="icon"></span>
          <span className="text">48小时快速退款</span>
        </span>
              <span className="info">
          <span className="icon"></span>
          <span className="text">满88元减邮费</span>
        </span>
            </div>
            <div className="cart-logo">
              <div className="shop-car"></div>
              <div className="text">去添加点什么吧`</div>
              <div className="login">
                <div className="inner">
                  登录
                </div>
              </div>
            </div>
    
          </div>
        </div>
      </div>
    )
  }
}