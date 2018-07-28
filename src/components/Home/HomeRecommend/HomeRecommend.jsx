import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom'
import {connect} from 'react-redux'
import {getPopularItem} from '../../../redux/actions'
import BScroll from 'better-scroll'
import './HomeRecommend.less'


 class HomeRecommend extends Component {
  
   componentDidMount(){
     this.props.getPopularItem()
   }
  
   componentDidUpdate(){
     if(this.scroll){
       this.scroll.destroy()
     }
     this.scroll=new BScroll('.goodsItems', {
       eventPassthrough: 'vertical',
       probeType: 2,  // 因为惯性滑动不会触发
       click: true,   //默认是禁止点击的
       scrollX: true,
     })
   }
  
  render() {
     const {popularItem} =this.props
    return (
      <div>
        <div className="goods">
          <div className="recommend">
            <header className="newShow">
              <a href="javascript:;" className="more">
                <span>人气推荐·好物精选</span>
                <div className="all">
            <span className="wrap">
              <span>查看全部</span>
              <i className='arrow-right'></i>
            </span>
                </div>
              </a>
            </header>
            <div className="goodsItems">
              <ul className="list">
                {
                  popularItem.map((item,index)=>(
                    <li className="item" key={index}>
                      <a href="javascript:;" >
                        <div className="wraper">
                          <img src={item.listPicUrl} alt="" />
                        </div>
                        <div className="name">
                          {item.name}
                        </div>
                        <div className="newText">{item.simpleDesc}</div>
                        <div className="price">
                          <span className="money">￥</span>
                          <span className="num">{item.retailPrice}</span>
                        </div>
                      </a>
                    </li>
                  ))
                }
                
              <li className="item more">
                <a href="">
                  <span className="text">查看全部</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      </div>
    )
  }
}

export default connect(
  state=>({popularItem:state.PopularItem}),
  {getPopularItem}
)(HomeRecommend)