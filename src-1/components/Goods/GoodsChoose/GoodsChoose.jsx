import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom'
import {connect} from 'react-redux'
import './GoodsChoose.less'
import {getZhenPin} from '../../../redux/actions'


 class GoodsChoose extends Component {
   componentDidMount(){
     this.props.getZhenPin()
   }
  
  render() {
    const {zhenPin} =this.props
    return (
      <div>
        <div>
          <div className="zhenpin-con">
            <div className="zhenpin-item">
              <div className="rec-title">严选甄品</div>
              <div href="/" className="item-wrap" >
                <div href="/" className="mainItem" >
                  <div className="pic-container">
                    <img src={ zhenPin.zhenOne ? zhenPin.zhenOne.picUrl : null } alt=""/>
                    <div className="bg-top">{zhenPin.zhenOne ?  zhenPin.zhenOne.nickname : null}</div>
                  </div>
                  <div className="pic-info">
                    <div className="pir-text-con">
                      <div className="text">{zhenPin.zhenOne ?  zhenPin.zhenOne.title : null}</div>
                    </div>
                    <div className="pic-down">{zhenPin.zhenOne ?  zhenPin.zhenOne.subtitle : null}</div>
                  </div>
          
                </div>
                {
                  zhenPin.zhenpins ?  zhenPin.zhenpins.map((item,index)=>(
                    <div href="/" className="info-list" key={index}>
                      <div className="left-info">
                        <div className="text-info">{item.title}</div>
                        <div className="text-info2">{item.subtitle}</div>
                      </div>
                      <div className="right-img">
                        <img src={item.picUrl}  alt=""/>
                        <div className="bg-top">{item.nickname}</div>
                      </div>
                    </div>
                  )) : null
                }
      
            </div>
          </div>
        </div>
      </div>
      </div>
    )
  }
}

export default connect(
  state=>({zhenPin:state.ZhenPins}),
  {getZhenPin}
)(GoodsChoose)