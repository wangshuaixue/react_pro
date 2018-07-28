import React,{Component} from 'react'
import {Route, Switch,withRouter,NavLink} from 'react-router-dom'
import PropTypes from 'prop-types'
import './HomeHeaderTop.less'
import BScroll from 'better-scroll'


 class  HomeHeaderTop extends Component{
  static propType={
    headCateList:PropTypes.object.isRequired
  }
  
  state = {
    current:0,
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
     
     if(this.state.current===index){
       return
     }
     this.setState({
       current:index
     })
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
            <div className="list">
              <NavLink className={this.props.location.pathname==='/home/main' || this.props.location.pathname==='/home'? 'tab active' :'tab'}  to='/home/main' replace>
                <span className="text">推荐</span>
              </NavLink>
              {this.props.headCateList.map((item,index)=>(
                <NavLink className={this.props.location.pathname===`/home/detail/${index}`? 'tab active' :'tab'} key={index} to={`/home/detail/${index}`}
                         onClick={()=>{this.checkTab(index)}} replace>
                  <span className="text">{item.name}</span>
                </NavLink>
              ))}
          </div>
         </div>
        </div>
      </div>
    )
  }
  
}

export default withRouter(HomeHeaderTop)