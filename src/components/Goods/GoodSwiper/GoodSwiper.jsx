import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom'
import './GoodSwiper.less'
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'

export default class GoodSwiper extends Component {
  
  componentDidMount(){
    if(this.swiper){
      this.swiper.destroy()
    }
    
    this.swiper=new Swiper('.swiper-container', {
      slidesPerView: 'auto',  //占满一页
      loop: true,   // 可以循环轮播
    })
  }
  
  render() {
    return (
      <div>
        <div>
          <div className="banner">
            <div className="banner-wrap">
              <div className="swiper-container">
                <div className="swiper-wrapper">
                  <a href="/" className="swiper-slide slide-item">
                    <img src={require('./img/01.jpg')} alt=""/>
                      <div className="innerCon">
                        <div className="sub-title">—— 严选推荐 ——</div>
                        <div className="title">夏日小仙女养成记</div>
                        <div className="desc"> 页面内商品每满179减20</div>
                      </div>
                  </a>
                  <a href="/" className="swiper-slide slide-item">
                    <img src={require('./img/02.jpg')} alt=""/>
                      <div className="innerCon">
                        <div className="sub-title">—— 严选推荐 ——</div>
                        <div className="title">今天一起做“大儿童”</div>
                        <div className="desc"> 页面内商品每满999减10</div>
                      </div>
                  </a>
                  <a href="/" className="swiper-slide slide-item">
                    <img src={require('./img/01.jpg')} alt=""/>
                      <div className="innerCon">
                        <div className="sub-title">—— 严选推荐 ——</div>
                        <div className="title">夏日小仙女养成记</div>
                        <div className="desc"> 页面内商品每满179减20</div>
                      </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}