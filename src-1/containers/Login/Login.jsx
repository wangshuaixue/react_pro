import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom'
import Swiper from 'swiper'
import BScroll from 'better-scroll'
import './Login.less'
import {connect} from 'react-redux'
import GoodsHeader from '../../components/Goods/GoodsHeader/GoodsHeader'


export default class Login extends Component {
  
  state={
    isOk:true,
    time:0,
    valueLength:''
  }
  
  reciveCode=()=>{
    console.log('aaaaa')
    if(/^1\d{10}$/.test(this.refs.recive.value)){
      this.setState({
        isOk:true
      })
    }else{
      this.setState({
        isOk:false
      })
    }
    if(/^1\d{10}$/.test(this.refs.recive.value)){
      //发送获取验证码请求
      if(this.state.time===0) {  //避免重复点击，指定时间内只执行一次
        this.state.time = 20;
        this.intervalId = setInterval(() => {
          this.state.time--
          this.refs.getCode.textContent = this.state.isOk ? `倒计时${this.state.time}s` : '获取验证码'
//            console.log(time)
          if (this.state.time <=0) {   //倒计时完毕清除定时器
            clearInterval(this.intervalId)
            this.refs.getCode.textContent = '获取验证码'
          }
        }, 1000)
      }
    }
    this.isOk=/^1\d{10}$/.test(this.refs.recive.value)
    this.refs.alertTip.textContent=this.refs.recive.value ? (this.state.isOk ? '' : '手机号格式错误' ) : ('请输入手机号')
  
  }
  
  clearNum = () =>{
    this.refs.recive.value=''
  }
  
  isShowIcon = () =>{
    
    this.setState({
      valueLength:this.refs.recive.value
    })
  }
  
  render() {
    return (
      <div>
        <div className="login-wrap">
          <GoodsHeader/>
          <div className="content-wrap">
            <div className="logo-wrap">
              <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt=""/>
            </div>
            <div className="center-wrap">
              <div className="top">
                <div className="phone">
                  <input type="text" className="tel-input" placeholder="请输入手机号" maxLength="11" ref='recive' onChange={this.isShowIcon}/>
                  {
                    this.state.valueLength.length ? <div className='clear-input' onClick={this.clearNum}></div> :null
                  }
              </div>
          
              <div className="yanzheng">
                <input type="text" className="yan-input" placeholder="请输入手机验证码"/>
                  <div className="btns"  onClick={this.reciveCode}  ref='getCode'>获取验证码</div>
            </div>
            <div className="alert-text" >
              <div className="text"  ref="alertTip">
              </div>
            </div>
            <div className="unlogin">
              <span className="issue">遇到问题?</span>
              <span className="pwd-login">使用密码验证登录</span>
            </div>
            <div className="sub-wrap">
              <div className="submit">登录</div>
              <div className="other">其他登录方式</div>
              <div className="more">注册账号
                <span className="icon"></span>
              </div>
            </div>
          </div>
          <div className="down"></div>
        </div>
      </div>
  </div>
  </div>
    )
  }
}