import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom'
import Swiper from 'swiper'
import BScroll from 'better-scroll'
import './Login.less'
import {connect} from 'react-redux'
import {getPhoneCode,receivePwd} from '../../redux/actions'
import GoodsHeader from '../../components/Goods/GoodsHeader/GoodsHeader'


class Login extends Component {
  
  state={
    isOk:true,
    time:0,
    valueLength:''
  }
  
  componentDidMount(){
    this.props.getPhoneCode()
    // const user={'1','2'}
    // this.props.receivePwd({'1111','2222'},()=>{})
  }
  
  reciveCode=()=>{
    if(/^1\d{10}$/.test(this.refs.recive.value)){
      this.setState({
        isOk:true
      })
  
      this.props.phoneCode.find((item,index)=>{
          if(item.phone===this.refs.recive.value){
            console.log(this.props.phoneCode[index].code)
           /* setTimeout(()=>{
              this.refs.codeMsg.value=this.props.phoneCode[index].code
            },3000)*/
          }
    })
    
    }else{
      this.setState({
        isOk:false
      })
    }
    if(/^1\d{10}$/.test(this.refs.recive.value)){
      //发送获取验证码请求
      if(this.state.time===0) {  //避免重复点击，指定时间内只执行一次
        this.setState({
          time:10
        })
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
  
  loginUp = () =>{
    const userInfo={
        phoneI:this.refs.recive.value,
        codeI:this.refs.codeMsg.value,
    }
    this.props.receivePwd(userInfo)
    console.log(this.props.user)
    
    
    
    this.props.phoneCode.find((item,index)=>{
      if(item.phone===this.refs.recive.value){
        console.log(this.props.phoneCode[index].code)
        if(this.refs.codeMsg.value===this.props.phoneCode[index].code){
          alert('登录成功')
        }else{
          alert('登录失败')
        }
      }
    })
    
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
                <input type="text" className="yan-input" placeholder="请输入手机验证码" ref='codeMsg' />
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
              <div className="submit" onClick={this.loginUp}>登录</div>
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

export default  connect(
  state=>({phoneCode:state.PhoneCode,user:state.user}),
  {getPhoneCode,receivePwd}
)(Login)