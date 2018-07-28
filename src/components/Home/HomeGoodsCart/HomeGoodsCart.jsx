import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom'
import {getCateList} from '../../../redux/actions'
import {connect} from 'react-redux'
import './HomeGoodsCart.less'


 class HomeGoodsCart extends Component {
  componentDidMount(){
    this.props.getCateList()
  }
  
  
  render() {
    
    const {cateList} = this.props
    
    return (
      <div>
        <div className="detailCon">
          {
            cateList.map((item,index)=>(
              <div className="container" key={index}>
                <header className="title">
                  {item.name}
                </header>
                <div className="wrap-goods" >
                  <ul className="list" >
                    {
                      item.itemList.map((itemGood,index)=>(
                        <li className="item" key={index}>
                          <a href="javascript:;" className="goods">
                            <div className="top">
                              <img src={itemGood.listPicUrl} alt=""/>
                              <div className="detail">{itemGood.simpleDesc}</div>
                            </div>
                            <div className="tagw">
                              <span className="tag">限时购</span>
                            </div>
                            <div className="name">{itemGood.name}</div>
                            <div className="price">￥{itemGood.retailPrice}</div>
                          </a>
                        </li>
                      ))
                    }
                    
                    <li className="item more">
                      <a href="javascript:;" className="goods">
                        <p className="text">更多 好物</p>
                        <i className="right-icon"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            ))
          }
         
      </div>
      </div>
    )
  }
}

export default connect(
  state=>({cateList:state.CateList}),
  {getCateList}
)(HomeGoodsCart)