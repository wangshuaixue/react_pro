import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom'
import PropTypes from 'prop-types'
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
import './HomeSwiper.less'

export default class HomeSwiper extends Component {
  static propType={
    focusList:PropTypes.object.isRequired
  }
  
  componentDidUpdate(){
      if(this.swiper){
        this.swiper.destroy()
      }
      this.swiper = new Swiper('.swiper-container', {
        loop: true, // 可以循环轮播
        autoplay:true,
        // 如果需要分页器
        pagination:{
          el: '.swiper-pagination',
          currentClass : 'my-pagination-current',
        },
      })
  }
  
  render() {
    const {focusList}=this.props
    return (
      <div>
        <div className="swiper-con">
          <div className="swiper-container">
            <div className="swiper-wrapper">
              
              {
                focusList.map((item,index)=>(
                  <div className="swiper-slide" key={index}>
                    <img src={item.picUrl} alt=""/>
                  </div>
                ))
              }
              
          </div>
          <div className="swiper-pagination"></div>
        </div>
        <div className="end-container">
          <ul className="shop-row">
            <li className="item">
              <i className='arrow'></i>
              <span className="content">网易自营品牌</span>
            </li>
            <li className="item">
              <i className='arrow'></i>
              <span className="content">30天无忧退货</span>
            </li>
            <li className="item">
              <i className='arrow'></i>
              <span className="content">48小时快速退款</span>
            </li>
    
          </ul>
        </div>
      </div>
      </div>
    )
  }
}