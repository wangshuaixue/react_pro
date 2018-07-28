import React, {Component} from 'react';
import {Route, Switch,withRouter} from 'react-router-dom'
import '../../common/less/mixins.less'
import './FooterBar.less'

class FooterBar extends Component {
  
  render() {
    return (
      <div>
          <footer className="footer_bar">
            <span className={`guide_item ${this.props.location.pathname==='/home' ? 'on' : null}`}  onClick={()=>{this.props.history.replace('/home')}}>
              <span className={`item_icon home ${this.props.location.pathname==='/home' ? 'on' : null}`} ></span>
              <span className="text">首页</span>
            </span>
            <span className={`guide_item ${this.props.location.pathname==='/goods' ? 'on' : null}`}  onClick={ ()=>{this.props.history.replace('/goods')}}>
              <span className={`item_icon goods ${this.props.location.pathname==='/goods' ? 'on' : null}`} ></span>
              <span className="text">识物</span>
            </span>
            <span className={`guide_item ${this.props.location.pathname==='/classify' ? 'on' : null}`} onClick={ ()=>{this.props.history.replace('/classify')}}>
              <span className={`item_icon classify ${this.props.location.pathname==='/classify' ? 'on' : null}`}></span>
              <span className="text">分类</span>
            </span>
            <span className={`guide_item shop ${this.props.location.pathname==='/cart' ? 'on' : null}`} onClick={()=>{this.props.history.replace('/cart')}}>
              <span className={`item_icon cart ${this.props.location.pathname==='/cart' ? 'on' : null}`}></span>
              <span className="text">购物车</span>
            </span>
            <span className={`guide_item ${this.props.location.pathname==='/personal' ? 'on' : null}`}   onClick={()=>{this.props.history.replace('/personal')}}>
              <span className={`item_icon personal ${this.props.location.pathname==='/personal' ? 'on' : null}`} ></span>
              <span className="text">个人</span>
          </span>
        </footer>
      </div>
    )
  }
}

export default withRouter(FooterBar)