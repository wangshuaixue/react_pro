import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom'
import {getTenFive} from '../../../redux/actions'
import {connect} from 'react-redux'
import Swiper from 'swiper'
import './GoodsCarve.less'

 class GoodsCarve extends Component {
  
  componentDidMount(){
    this.props.getTenFive()
  }
  
  componentDidUpdate(){
      if(this.swiper){
        this.swiper.destroy()
      }
      this.swiper=new Swiper('.swiper-container1', {
        slidesPerView: 'auto',  //占满一页
//            loop: true,   // 可以循环轮播
      })
    
  }
  
  render() {
    const {tenMsg} =this.props
    return (
      <div>
        <div className="carve-wrap">
          <div className="tencarve">
            <div className="head-title">十点一刻</div>
           
                <div className="topic-con" >
                  <div className="swiper-container1">
                    <ul className="swiper-wrapper">
                      {
                        tenMsg.map((item,index)=>(
                          <a href="/" className="swiper-slide common-item" key={index}>
                            <div className="titled">
                              <span className="today">-今日话题-</span>
                            </div>
                            <div className="item-title">{item.title}</div>
                            <div className="desc">{item.desc}</div>
                            <div className="text-info" >
                              <div className="text-inner">
                                <div className="as">
                                  {
                                    item.participantAvatar ? item.participantAvatar.map((innerItem,index)=>(
                                      <div className="avatar" key={index}>
                                        <img src={innerItem} alt="" />
                                      </div>
                                    )) : null
                                  }
                                </div>
                                <div className="dot">
                                  <span className="circle"></span>
                                  <span className="circle"></span>
                                  <span className="circle"></span>
                                </div>
                                <div className="peo">5人参与话题</div>
                              </div>
                            </div>
                          </a>
                        ))
                      }
        
                      <a href="" className="swiper-slide common-item more">
                        <div className="inner">
                          <div className="all">查看全部话题</div>
                          <div className="allm"><img src={require('./img/right.png')} alt="" /></div>
                        </div>
                      </a>
                    </ul>
                  </div>
                </div>
            
            
          </div>
          
        </div>
      </div>
    )
  }
}

export default connect(
  state=>({tenMsg:state.TenMsg}),
  {getTenFive}
)(GoodsCarve)