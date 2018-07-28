import React, {Component} from 'react';
import {Route, Switch,NavLink} from 'react-router-dom'
import '../../common/less/mixins.less'
import GoodsHeader from '../../components/Goods/GoodsHeader/GoodsHeader'
import './Personal.less'

export default class Personal extends Component {
  
  render() {
    return (
      <div>
        <div className="personal-wrap">
          <GoodsHeader/>
          <div className="login-wrap">
            <div className="login-type">
              <div className="login-logo">
                <div className="img-wrap">
                  <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt=""/>
                </div>
              </div>
              <div className="login-con">
                <NavLink to="/login" className="login">
                  <div className="phone-login" >
              <span className="tel-con">
                <span className="icon"></span>
                <span className="tel">手机号码登录</span>
              </span>
                    </div>
                  </NavLink>
                  <div className="email-login">
              <span className="email-con">
                <span className="icon"></span>
                <span className="email">邮箱账号登录</span>
              </span>
                </div>
                <div className="phone-regist">手机号快捷注册 <span className="right-i"></span></div>
              </div>
            </div>
            <div className="login-ways-wrap">
              <div className="login-way">
                <span className="icon icon-w"></span>
                <span className="name">微信</span>
              </div>
              <div className="login-way">
                <span className="icon icon-q"></span>
                <span className="name">QQ</span>
              </div>
              <div className="login-way">
                <span className="icon icon-b"></span>
                <span className="name">微博</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}