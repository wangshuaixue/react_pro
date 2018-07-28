import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom'
import {connect} from 'react-redux'
import {getColumn} from '../../../redux/actions'
import BScroll from 'better-scroll'
import './GoodsRecommend.less'

 class GoodsRecommend extends Component {
  
  componentDidMount(){
    this.props.getColumn()
  }
  
  
   componentDidUpdate(){
     if(this.scroll){
       this.scroll.destroy()
     }
     this.scroll=new BScroll('.rec-wrap', {
       eventPassthrough: 'vertical',
       probeType: 2,  // 因为惯性滑动不会触发
       click: true,   //默认是禁止点击的
       scrollX: true
     })
   }
  
   
  
  render() {
     
     const {column} = this.props
     
    return (
      <div>
        <div className="column">
          <div className="recommend-wrap">
            <div className="rec-wrap">
              <div className="list-scroll">
                {
                  column.map((item,index)=>(
                    <a href="/" className="item" key={index}>
                      <img src={item.picUrl} alt="" />
    
                      <div className="num-wrap">
                        <div className="num">{item.articleCount}</div>
                      </div>
    
                      <div className="title">{item.title}</div>
                    </a>
                  ))
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
  state=>({column:state.Column}),
  {getColumn}
)(GoodsRecommend)