import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom'
import {getYxLook} from '../../../redux/actions'
import {connect} from 'react-redux'
import './GoodLook.less'


 class GoodLook extends Component {
  
   componentDidMount(){
     this.props.getYxLook()
   }
  
  render() {
    const {yxLook}=this.props
    return (
      <div>
        <div className="look-wrap">
          <div className="look-title">严选LOOK</div>
          <div className="look-con">
            <div className="video-wrap">
        
              <video className="video" src="http://yanxuan.nosdn.127.net/yx-topic-1531997741819r9mv9q0g.jpg" >
                <div className="video-icon">11111</div>
              </video>
      
            </div>
            <div className="user-info">
              <div className="info-top">
                <div  className="head-img"><img src={yxLook.avatar} alt="" /></div>
                <div className="username">{yxLook.nickname}</div>
              </div>
              <div className="textinfo">{yxLook.content}</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(
  state=>({yxLook:state.YxLook}),
  {getYxLook}
)(GoodLook)