import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom'
import {getTopicList}  from '../../../redux/actions'
import {connect} from 'react-redux'
import BScroll from 'better-scroll'
import './HomeHandPick.less'


 class HomeHandPick extends Component {
  
   componentDidMount(){
     this.props.getTopicList()
   }
  
   componentDidUpdate(){
     if(this.scroll){
       this.scroll.destroy()
     }
     new BScroll('.inner', {
       eventPassthrough: 'vertical',
       probeType: 2,  // 因为惯性滑动不会触发
       click: true,   //默认是禁止点击的
       scrollX: true
     })
   }
   
  render() {
     const {topic} =this.props
    return (
      <div>
        <div>
          <div className="wrap1">
            <header className="pick">
              <a href="javascript:;" className="more">
                <span>专题精选</span>
                <i className="icon"></i>
              </a>
            </header>
            <div className="topics">
              <div className="inner">
                <ul className="list" >
                  {
                    topic.map((item,index)=>(
                      <li className="item" key={index}>
                        <a href="/" className="imgWrap">
                          <img src={item.itemPicUrl} alt=""/>
                        </a>
                        <div className="money">
                          <h4 className="title">{item.title}</h4>
                          <span className="price">{item.priceInfo}元起</span>
                        </div>
                        <div className="desc">{item.subtitle}</div>
                      </li>
                    ))
                  }
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
  state=>({topic:state.TopicItem}),
  {getTopicList}
)(HomeHandPick)