import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom'
import {connect} from 'react-redux'
import {getTagLists} from '../../../redux/actions'

import './HomeProduct.less'

class HomeProduct extends Component {
  
  componentDidMount(){
    this.props.getTagLists()
  }
  
  render() {
    const {tagList} =this.props
    return (
      <div>
        <div>
          <div className="produce">
            <div className="header-top">
              <a href="javascript:;">
                <span>品牌制造商直供</span>
                <i className="icon"></i>
              </a>
            </div>
            <div className="content" >
              <ul className="list">
                {
                  tagList.map((item,index)=>(
                    <li className="item" key={index}>
                      <a href="javascript:;">
                        <div className="shop">
                          <h4 className="title">{item.name}</h4>
                          <div className="price">
                            <span className="price1">{item.floorPrice}</span>
                            <span className="price2">元起送</span>
                          </div>
                        </div>
                        <img src={item.picUrl} alt=""/>
                      </a>
                    </li>
                  ))
                }
            </ul>
          </div>
        </div>
      </div>
      </div>
    )
  }
}

export default connect(
  state=>({tagList:state.tagList}),
  {getTagLists}
)(HomeProduct)