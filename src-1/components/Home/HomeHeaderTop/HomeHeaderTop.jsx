import React,{Component} from 'react'
import {Route, Switch,withRouter} from 'react-router-dom'
import PropTypes from 'prop-types'
import './HomeHeaderTop.less'
import BScroll from 'better-scroll'


 class  HomeHeaderTop extends Component{
  static propType={
    headCateList:PropTypes.object.isRequired
  }
  
  state = {
    current:null,
  }
  
   componentDidUpdate(){
     new BScroll('.scroll-container', {
       probeType: 2,  // 因为惯性滑动不会触发
       click: true,   //默认是禁止点击的
       scrollX: true,
       scrollY:false
     })
   }
  
   checkTab = (index) =>{
     
      
      let tabs=document.querySelectorAll('.tab')
       for (let i = 0; i < tabs.length; i++) {
         tabs[i].className = 'tab'
       }
      // event.currentTarget.className='tab active'
     tabs[index].className='tab active'
     console.log(index)
     
     
   }
  
   showNewPage = (index) =>{
     console.log(index)
   }
  
  render(){
    return (
      <div className="header_con">
        
        <header className="header_top">
          <span  className="logo" onClick={()=>{this.props.history.replace('/home')}} ></span>
          <div className="search" >
            <i className="search_icon"></i>
            <span className="search_text">搜索商品，共97565款好物</span>
          </div>
        </header>
        <div className="scroll">
          <div className="scroll-container">
            <div className="list" >
              <div className="tab active" onClick={this.checkTab}>
                <span className="text">推荐</span>
              </div>
              {this.props.headCateList.map((item,index)=>(
                <div className="tab" key={index} onClick={()=>{this.checkTab(index)}} >
                  <span className="text">{item.name}</span>
                </div>
              ))}
          </div>
         </div>
        </div>
      </div>
    )
  }
  
}

export default withRouter(HomeHeaderTop)